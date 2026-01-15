import { NextResponse } from "next/server";
import axios from "axios";
import crypto from "crypto";
import { cookies } from "next/headers";
import sql from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userDetails = body.SignableContainer?.UserInfo?.Details;

    if (!userDetails) {
      return NextResponse.json({ error: "No user info" }, { status: 400 });
    }

    const decoded = JSON.parse(
      Buffer.from(userDetails, "base64").toString("utf-8")
    );

    const fakeEmail = `${decoded.GN}@sso.fake`;
    const fakePassword = decoded.serialNumber || "sso-default";

    let user;
    try {
      const res = await axios.get(
        `${process.env.NEXTAUTH_URL}/api/users?email=${fakeEmail}`
      );
      user = res.data?.[0];
    } catch {}

    if (!user) {
      const createRes = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/users`,
        {
          name: decoded.CN || decoded.GN || "SSO User",
          email: fakeEmail,
          password: fakePassword,
          role: "user",
        }
      );
      user = createRes.data;
    }

    const sessionId = crypto.randomUUID();

    await sql`
      INSERT INTO sso_sessions (id, email, expires_at)
      VALUES (${sessionId}, ${fakeEmail}, now() + interval '2 minutes')
    `;

    const cookieStore = await cookies();

    cookieStore.set("sso_session", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 120,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SSO Callback Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
