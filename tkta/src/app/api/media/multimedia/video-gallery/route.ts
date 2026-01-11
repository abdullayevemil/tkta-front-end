import { authOptions } from "@/lib/auth";
import sql from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

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

  const whereClause = conditions.length > 0 ? sql`WHERE ${conditions}` : sql``;

  const gallery = await sql`
    SELECT * FROM video_gallery
    ${whereClause}
    ORDER BY SIMILARITY(title, ${search}) DESC,
             SIMILARITY(titleEnglish, ${search}) DESC,
             date ${sort}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  const count = await sql`
    SELECT COUNT(*) FROM video_gallery
    ${whereClause}
  `;

  return NextResponse.json({
    gallery,
    total: Number(count[0].count),
  });
}

export async function POST(req: NextRequest) {
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

    const body = await req.json();
    const { title, titleEnglish, headerviewurl } = body;

    if (!title || !titleEnglish || !headerviewurl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const [inserted] = await sql`
      INSERT INTO video_gallery (title, titleenglish, headerviewurl)
      VALUES (${title}, ${titleEnglish}, ${headerviewurl})
      RETURNING id;
    `;

    return NextResponse.json({ id: inserted.id }, { status: 201 });
  } catch (error) {
    console.error("Insert error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
