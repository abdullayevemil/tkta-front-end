import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const role = session.user.role;

  if (role !== "admin" && role !== "superadmin" && role !== "user") {
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }
  
  const { fin, serialNumber, slot } = await req.json();
  const date = new Date(slot);
  date.setHours(date.getHours() + 4);

  try {
    const meeting = await sql<{ id: number }[]>`
      INSERT INTO meetings (fin, serial_number, slot, approved)
      VALUES (${fin}, ${serialNumber}, ${date.toISOString()}, TRUE)
      RETURNING id
    `;
    return NextResponse.json({ success: true, meeting: meeting[0] });
  } catch (err: any) {
    if (err.code === "23505") {
      return NextResponse.json({ success: false, message: "Slot already booked" }, { status: 409 });
    }
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}