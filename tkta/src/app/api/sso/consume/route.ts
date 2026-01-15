import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import sql from "@/lib/db";

export async function POST() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sso_session")?.value;
  console.log("SSO session ID:", sessionId);

  if (!sessionId) {
    return NextResponse.json(
      { error: "No SSO session" },
      { status: 401 }
    );
  }

  const session = await sql`
    SELECT email
    FROM sso_sessions
    WHERE id = ${sessionId}
      AND expires_at > now()
  `;

  console.log("SSO session record:", session);

  if (!session.length) {
    cookieStore.delete("sso_session");
    return NextResponse.json(
      { error: "Invalid SSO session" },
      { status: 401 }
    );
  }

  await sql`
    DELETE FROM sso_sessions WHERE id = ${sessionId}
  `;
  cookieStore.delete("sso_session");

  return NextResponse.json({ email: session[0].email });
}