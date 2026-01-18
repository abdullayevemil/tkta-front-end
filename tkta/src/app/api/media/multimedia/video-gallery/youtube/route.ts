import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPLOAD_DIR =
  "/var/www/nextapp_uploads/media/multimedia/video-gallery";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const title = (formData.get("title") as string) || "video";

    if (!file) {
      return NextResponse.json(
        { error: "No video file provided" },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("video/")) {
      return NextResponse.json(
        { error: "Uploaded file is not a video" },
        { status: 400 }
      );
    }

    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    const ext = path.extname(file.name) || ".mp4";
    const safeTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, "-")
      .slice(0, 60);

    const fileName = `${safeTitle}-${crypto.randomUUID()}${ext}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    const relativePath = `media/multimedia/video-gallery/${fileName}`;
    const videoUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${relativePath}`;

    return NextResponse.json(
      {
        success: true,
        videoUrl,
        fileName,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}