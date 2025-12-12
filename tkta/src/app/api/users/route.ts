import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");

  const user = await sql`SELECT * FROM users WHERE email = ${email}`;

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, password, role } = body;
    console.log(name, email, password, role);

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
    const count = await sql`SELECT COUNT(*) FROM users`;
    const newId = parseInt(count[0].count, 10) + 1;
    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 400 }
      );
    }

    const newUser: {
      id: string;
      name: string;
      email: string;
      password: string;
      role: string;
    } = {
      id: `${newId}`,
      name,
      email,
      password,
      role,
    };

    await sql`INSERT INTO users (id, name, email, password, role) VALUES
(${newId}, ${name}, ${email}, ${password}, ${role});`;

    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
