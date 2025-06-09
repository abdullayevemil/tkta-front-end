import sql from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const video = await sql`
    SELECT * FROM video_gallery WHERE id = ${id}
  `;

  if (video.length === 0) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  return NextResponse.json(video[0]);
}
