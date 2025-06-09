import sql from "@/lib/db";
import { NextResponse } from "next/server";

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
