import sql from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
  const { id } = await params;

  const video = await sql`
    SELECT * FROM video_gallery WHERE id = ${id}
  `;

  if (video.length === 0) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  return NextResponse.json(video[0]);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { title, titleEnglish } = body;

    if (!title || !titleEnglish) {
      return NextResponse.json(
        { error: "Missing title or titleEnglish" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE video_gallery
      SET title = ${title}, title_english = ${titleEnglish}
      WHERE id = ${id}
    `;

    return NextResponse.json({
      message: "Video metadata updated successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to update video" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await sql`
      DELETE FROM video_gallery
      WHERE id = ${id}
    `;

    return NextResponse.json({ message: "Video deleted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete video" },
      { status: 500 }
    );
  }
}
