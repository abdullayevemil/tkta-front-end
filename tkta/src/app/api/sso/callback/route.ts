import { NextResponse } from "next/server";
import axios from "axios";

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

    const fakeEmail = decoded.GN + "@sso.fake";
    const fakePassword = decoded.serialNumber || "sso-default";

    let user = null;
    try {
      const res = await axios.get(
        `${process.env.NEXTAUTH_URL}/api/users?email=${fakeEmail}`
      );
      user = res.data[0];
    } catch (err) {
      console.error("Error fetching user:", err);
    }

    if (!user) {
      try {
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
      } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json(
          { error: "Failed to create user" },
          { status: 500 }
        );
      }
    }

    await axios.post(
      `${process.env.NEXTAUTH_URL}/api/auth/callback/credentials`,
      {
        email: fakeEmail,
        password: fakePassword,
      },
      { withCredentials: true }
    );

    const res = NextResponse.json({ status: "ok", user: decoded });

    res.cookies.set({
      name: "sso_session",
      value: fakeEmail,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 2 * 60 * 60,
    });

    return res;
  } catch (err) {
    console.error("SSO Callback Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
