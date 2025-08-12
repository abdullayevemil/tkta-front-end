import { users } from "@/data/users";
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

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (existingUser) {
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
    } = {
      id: `${users.length + 1}`,
      name,
      email,
      password,
    };

    await sql`INSERT INTO users (id, name, email, password) VALUES
('${users.length + 1}', ${name}, ${email}, ${password});`;

    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
