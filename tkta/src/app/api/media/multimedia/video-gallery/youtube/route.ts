import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Readable } from "stream";

export const dynamic = "force-dynamic";

const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID!,
  process.env.YOUTUBE_CLIENT_SECRET!,
  process.env.YOUTUBE_REDIRECT_URI!
);

oauth2Client.setCredentials({
  refresh_token: process.env.YOUTUBE_REFRESH_TOKEN!,
});

const youtube = google.youtube({
  version: "v3",
  auth: oauth2Client,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const title = (formData.get("title") as string) || "Video Upload";
    const description = (formData.get("description") as string) || "";

    if (!file) {
      return NextResponse.json(
        { error: "No video file provided" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const tempFilename = `${uuidv4()}-${file.name}`;
    const tempPath = path.join("/tmp", tempFilename);
    await writeFile(tempPath, buffer);

    const stream = Readable.from(buffer);

    const uploadResponse = await youtube.videos.insert({
      part: ["snippet", "status"],
      requestBody: {
        snippet: {
          title,
          description,
        },
        status: {
          privacyStatus: "private",
        },
      },
      media: {
        body: stream,
      },
    });

    const videoId = uploadResponse?.data?.id;
    if (!videoId) {
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    const iframeUrl = `https://www.youtube.com/embed/${videoId}`;
    return NextResponse.json({ iframeUrl }, { status: 200 });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
