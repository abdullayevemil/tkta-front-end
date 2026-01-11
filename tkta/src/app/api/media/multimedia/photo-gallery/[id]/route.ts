import sql from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
  const { id } = await params;

  const gallery = await sql`
  SELECT 
    pg.*,
    json_agg(
      json_build_object(
        'id', pgi.id,
        'url', pgi.url
      )
    ) AS images
  FROM "photo_gallery" AS pg
  LEFT JOIN "photo_gallery_images" AS pgi
    ON pg.id = pgi.gallery_id
  WHERE pg.id = ${id}
  GROUP BY pg.id, pg.title, pg."titleenglish", pg."headerphotourl", pg.date;
`;

  if (gallery.length === 0) {
    return NextResponse.json({ error: "Gallery not found" }, { status: 404 });
  }

  return NextResponse.json(gallery[0]);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const role = session.user.role;

    if (role !== "admin" && role !== "superadmin") {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
      });
    }

    const { id } = await params;
    const formData = await req.formData();

    // Extract text fields
    const title = formData.get("title") as string;
    const titleEnglish = formData.get("titleEnglish") as string;
    const date = formData.get("date") as string;
    const headerPhotoFile = formData.get("headerPhoto") as File | null;
    const imageFiles = formData.getAll("images") as File[];
    const removeImageIds = formData.getAll("removeImageIds") as string[];

    if (!title || !titleEnglish || !date) {
      return NextResponse.json(
        { error: "Missing required fields: title, titleEnglish, and date" },
        { status: 400 }
      );
    }

    // Start building the update query
    let updateFields = sql`title = ${title}, titleEnglish = ${titleEnglish}, date = ${date}`;

    // Handle header photo update if provided
    if (headerPhotoFile) {
      const headerPhotoBuffer = Buffer.from(
        await headerPhotoFile.arrayBuffer()
      );
      const headerPhotoUpload = await new Promise<UploadApiResponse>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder: "photo-gallery/headers",
                resource_type: "image",
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result!);
              }
            )
            .end(headerPhotoBuffer);
        }
      );

      updateFields = sql`${updateFields}, headerPhotoUrl = ${headerPhotoUpload.secure_url}`;
    }

    // Update the gallery
    await sql`
      UPDATE photo_gallery
      SET ${updateFields}
      WHERE id = ${id}
    `;

    // Remove images if specified
    if (removeImageIds.length > 0) {
      await sql`
        DELETE FROM photo_gallery_images
        WHERE id = ANY(${removeImageIds}::int[]) AND gallery_id = ${id}
      `;
    }

    // Add new images if provided
    if (imageFiles.length > 0) {
      const uploadedImages = await Promise.all(
        imageFiles.map(async (file) => {
          const buffer = Buffer.from(await file.arrayBuffer());
          return new Promise<UploadApiResponse>((resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                {
                  folder: "photo-gallery/images",
                  resource_type: "image",
                },
                (error, result) => {
                  if (error) reject(error);
                  else resolve(result!);
                }
              )
              .end(buffer);
          });
        })
      );

      const imageValues = uploadedImages.map((uploadResult) => ({
        gallery_id: parseInt(id),
        url: uploadResult.secure_url,
      }));

      await sql`
        INSERT INTO photo_gallery_images (gallery_id, url)
        SELECT * FROM json_populate_recordset(null::photo_gallery_images, ${JSON.stringify(
          imageValues
        )})
      `;
    }

    return NextResponse.json({
      message: "Gallery updated successfully",
    });
  } catch (error) {
    console.error("Error updating gallery:", error);
    return NextResponse.json(
      { error: "Failed to update gallery" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const role = session.user.role;

    if (role !== "superadmin") {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
      });
    }

    const { id } = await params;

    // Get gallery info for Cloudinary cleanup
    const gallery = await sql`
      SELECT headerPhotoUrl FROM photo_gallery WHERE id = ${id}
    `;

    const images = await sql`
      SELECT url FROM photo_gallery_images WHERE gallery_id = ${id}
    `;

    // Delete from database (CASCADE will handle photo_gallery_images)
    await sql`
      DELETE FROM photo_gallery
      WHERE id = ${id}
    `;

    // Clean up Cloudinary assets
    if (gallery.length > 0 && gallery[0].headerPhotoUrl) {
      const publicId = gallery[0].headerPhotoUrl
        .split("/")
        .pop()
        ?.split(".")[0];
      if (publicId) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (error) {
          console.error("Error deleting header photo from Cloudinary:", error);
        }
      }
    }

    // Delete all images from Cloudinary
    for (const image of images) {
      if (image.url) {
        const publicId = image.url.split("/").pop()?.split(".")[0];
        if (publicId) {
          try {
            await cloudinary.uploader.destroy(publicId);
          } catch (error) {
            console.error("Error deleting image from Cloudinary:", error);
          }
        }
      }
    }

    return NextResponse.json({ message: "Gallery deleted successfully" });
  } catch (error) {
    console.error("Error deleting gallery:", error);
    return NextResponse.json(
      { error: "Failed to delete gallery" },
      { status: 500 }
    );
  }
}
