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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";

  const from = searchParams.get("from") || null;

  const to = searchParams.get("to") || null;

  const sort = searchParams.get("sort") === "old" ? sql`ASC` : sql`DESC`;

  const page = parseInt(searchParams.get("page") || "1");

  const ITEMS_PER_PAGE = 9;

  const offset = (page - 1) * ITEMS_PER_PAGE;

  const conditions = [];

  if (search) {
    const similarity = sql`(SIMILARITY(title, ${search}) > 0 OR SIMILARITY(titleEnglish, ${search}) > 0)`;

    if (from) {
      if (to) {
        conditions.push(
          sql`${similarity} AND date >= ${from} AND date <= ${to}`
        );
      } else {
        conditions.push(sql`${similarity} AND date >= ${from}`);
      }
    } else {
      if (to) {
        conditions.push(sql`${similarity} AND date <= ${to}`);
      } else {
        conditions.push(similarity);
      }
    }
  }

  const whereClause = conditions.length > 0 ? sql`WHERE ${conditions}` : sql``;

  const qualification_recognitions = await sql`SELECT * FROM qualification_recognitions
    ${whereClause}
    ORDER BY SIMILARITY(title, ${search}) DESC, SIMILARITY(titleEnglish, ${search}) DESC, date ${sort}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  const count = await sql`
    SELECT COUNT(*) FROM qualification_recognitions
    ${whereClause}
  `;

  return NextResponse.json({
    qualification_recognitions,
    total: Number(count[0].count),
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("title")?.toString() || "";

    const content = formData.get("content")?.toString() || "";

    const titleEnglish = formData.get("titleEnglish")?.toString() || "";

    const contentEnglish = formData.get("contentEnglish")?.toString() || "";

    const date = new Date(formData.get("date")?.toString() || Date.now());

    const headerImage = formData.get("headerImage") as File;

    const note = formData.get("note")?.toString() || "";

    const noteEnglish = formData.get("noteEnglish")?.toString() || "";

    const galleryImages = formData.getAll("galleryImages") as File[];

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

    const [qualification_recognitions] = await sql`
      INSERT INTO qualification_recognitions (title, content, date, headerImageUrl, note, titleEnglish, contentEnglish, noteEnglish)
      VALUES (${title}, ${content}, ${date}, ${headerImageUrl}, ${note}, ${titleEnglish}, ${contentEnglish}, ${noteEnglish})
      RETURNING id
    `;

    const qualification_recognitionsId = qualification_recognitions.id;

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
        VALUES (${qualification_recognitionsId}, ${uploaded.secure_url})
      `;
    }

    return NextResponse.json({ success: true, qualification_recognitionsId });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
