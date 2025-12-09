
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("SSO Callback Received:", body);
  
  return NextResponse.json({ status: "ok" });
}