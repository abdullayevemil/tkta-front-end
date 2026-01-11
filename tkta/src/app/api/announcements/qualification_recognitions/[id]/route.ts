import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { id } = await params;

  const idNumber = parseInt(id);

  if (isNaN(idNumber)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const qualification_recognitionsResult = await sql`SELECT * FROM qualification_recognitions WHERE id = ${idNumber}`;
  if (qualification_recognitionsResult.length === 0) {
    return NextResponse.json({ error: "qualification_recognitions not found" }, { status: 404 });
  }

  const qualification_recognitions = qualification_recognitionsResult[0];

  const photosResult = await sql`
    SELECT id, url 
    FROM qualification_recognitions_photos 
    WHERE vacancy_id = ${idNumber}
  `;

  const response = {
    ...qualification_recognitions,
    photos: photosResult,
  };

  return NextResponse.json(response);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const role = session.user.role;

  if (role !== "admin" && role !== "superadmin") {
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }
  
  const { id } = await params;
  const idNumber = parseInt(id);

  if (isNaN(idNumber)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const formData = await req.formData();

  const title = formData.get("title") as string;
  const titleEnglish = formData.get("titleEnglish") as string;
  const note = formData.get("note") as string;
  const noteEnglish = formData.get("noteEnglish") as string;
  const content = formData.get("content") as string;
  const contentEnglish = formData.get("contentEnglish") as string;
  const date = formData.get("date") as string;
  const headerImage = formData.get("headerImage") as File;

  const headerBuffer = Buffer.from(await headerImage.arrayBuffer());

  const uploadedHeader = await new Promise<{ secure_url: string }>(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, result) => {
          if (err || !result) return reject(err);
          resolve(result as UploadApiResponse);
        })
        .end(headerBuffer);
    }
  );

  const headerImageUrl = uploadedHeader.secure_url;

  await sql`
    UPDATE qualification_recognitions SET
      title = ${title},
      titleEnglish = ${titleEnglish},
      note = ${note},
      noteEnglish = ${noteEnglish},
      content = ${content},
      contentEnglish = ${contentEnglish},
      date = ${date},
      headerImageUrl = ${headerImageUrl}
    WHERE id = ${idNumber}
  `;

  const galleryImages = formData.getAll("galleryImages") as File[];

  await sql`DELETE FROM qualification_recognitions_photos WHERE vacancy_id = ${id}`;

  for (const img of galleryImages) {
    const imgBuffer = Buffer.from(await img.arrayBuffer());

    const uploaded = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({}, (err, result) => {
            if (err || !result) return reject(err);
            resolve(result as UploadApiResponse);
          })
          .end(imgBuffer);
      }
    );

    await sql`
        INSERT INTO qualification_recognitions_photos (vacancy_id, url)
        VALUES (${id}, ${uploaded.secure_url})
      `;
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const role = session.user.role;

  if (role !== "superadmin") {
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }
  
  if (req.method !== "DELETE") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { id } = await params;

  const idNumber = parseInt(id);

  if (isNaN(idNumber)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await sql`DELETE FROM qualification_recognitions WHERE id = ${idNumber}`;

  return NextResponse.json({ success: true });
}
