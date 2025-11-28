import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import sql from "@/lib/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract text fields
    const title = formData.get('title') as string;
    const titleEnglish = formData.get('titleEnglish') as string;
    const headerPhotoFile = formData.get('headerPhoto') as File;
    const date = formData.get('date') as string;
    const imageFiles = formData.getAll('images') as File[];

    // Validate required fields
    if (!title || !titleEnglish || !headerPhotoFile || !date || !imageFiles || imageFiles.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields: title, titleEnglish, headerPhoto, date, and at least one image" },
        { status: 400 }
      );
    }

    // Upload header photo to Cloudinary
    const headerPhotoBuffer = Buffer.from(await headerPhotoFile.arrayBuffer());
    const headerPhotoUpload = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'photo-gallery/headers',
          resource_type: 'image',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result!);
        }
      ).end(headerPhotoBuffer);
    });

    // Upload all images to Cloudinary
    const uploadedImages = await Promise.all(
      imageFiles.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return new Promise<UploadApiResponse>((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: 'photo-gallery/images',
              resource_type: 'image',
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result!);
            }
          ).end(buffer);
        });
      })
    );

    const [gallery] = await sql`
      INSERT INTO photo_gallery (title, titleEnglish, headerPhotoUrl, date)
      VALUES (${title}, ${titleEnglish}, ${headerPhotoUpload.secure_url}, ${date})
      RETURNING id
    `;

    uploadedImages.forEach(async (image) => {
      await sql`
        INSERT INTO photo_gallery_images (gallery_id, url)
        VALUES (${gallery.id}, ${image.secure_url})
      `;
    });

    return NextResponse.json({
      message: "Photo gallery created successfully"
    }, { status: 201 });

  } catch (error) {
    console.error("Error creating photo gallery:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || null;
  const from = searchParams.get("from") || null;
  const to = searchParams.get("to") || null;
  const sort = searchParams.get("sort") === "old" ? sql`ASC` : sql`DESC`;
  const page = parseInt(searchParams.get("page") || "1");
  const ITEMS_PER_PAGE = 9;
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const conditions = [];

  if (search) {
    const similarity = sql`(SIMILARITY(title, ${search}) > 0 OR SIMILARITY(titleEnglish, ${search}) > 0)`;

    if (from && to) {
      conditions.push(sql`${similarity} AND date >= ${from} AND date <= ${to}`);
    } else if (from) {
      conditions.push(sql`${similarity} AND date >= ${from}`);
    } else if (to) {
      conditions.push(sql`${similarity} AND date <= ${to}`);
    } else {
      conditions.push(similarity);
    }
  } else {
    if (from && to) {
      conditions.push(sql`date >= ${from} AND date <= ${to}`);
    } else if (from) {
      conditions.push(sql`date >= ${from}`);
    } else if (to) {
      conditions.push(sql`date <= ${to}`);
    }
  }

  if (type) {
    conditions.push(sql`type = ${type}`);
  }

  const whereClause = conditions.length > 0 ? sql`WHERE ${conditions}` : sql``;

  const gallery = await sql`
    SELECT * FROM photo_gallery
    ${whereClause}
    ORDER BY SIMILARITY(title, ${search}) DESC,
             SIMILARITY(titleEnglish, ${search}) DESC,
             date ${sort}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  const count = await sql`
    SELECT COUNT(*) FROM photo_gallery
    ${whereClause}
  `;

  return NextResponse.json({
    gallery,
    total: Number(count[0].count),
  });
}
