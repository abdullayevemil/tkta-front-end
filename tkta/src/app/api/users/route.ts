import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import bcrypt from "bcrypt";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

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

    if (role === "admin" || role === "superadmin") {
      const session = await getServerSession(authOptions);

      if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
        });
      }

      if (session.user.role !== "superadmin") {
        return new Response(JSON.stringify({ error: "Forbidden" }), {
          status: 403,
        });
      }
    }

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result =
      await sql`INSERT INTO users (name, email, password, role) VALUES
    (${name}, ${email}, ${hashedPassword}, ${role})
    RETURNING id;`;

    const newUser = {
      id: `${result[0].id}`,
      name,
      email,
      password: hashedPassword,
      role,
    };

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
