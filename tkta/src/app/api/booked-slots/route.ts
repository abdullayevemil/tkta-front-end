import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres({
  host: process.env.DB_HOST,       
  port: 5432,
  username: process.env.DB_USER,   
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: "require",                  
  prepare: false
});

export async function GET() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);
  endOfWeek.setHours(23, 59, 59, 999);

  const bookedSlots = await sql<{ slot: Date }[]>`
    SELECT slot
    FROM meetings
    WHERE approved = TRUE
      AND slot >= ${startOfWeek}
      AND slot <= ${endOfWeek}
  `;

  return NextResponse.json(bookedSlots.map(b => b.slot.toISOString()));
}