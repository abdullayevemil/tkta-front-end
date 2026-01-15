"use server";

import { StreamClient } from "@stream-io/node-sdk";
import { getServerSession } from "next-auth/next";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const session = await getServerSession();

  const user = session?.user;

  let id;

  await fetch(`${process.env.NEXTAUTH_URL}/api/users?email=${user?.email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch user: ${res.statusText}`);
      }
      return res.json();
    })
    .then((body) => {
      id = `${body[0].id}`;
    });

  if (!user) throw new Error("User is not authenticated");

  if (!STREAM_API_KEY) throw new Error("Stream API key secret is missing");

  if (!STREAM_API_SECRET) throw new Error("Stream API secret is missing");

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;

  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(id!, expirationTime, issuedAt);

  console.log("Generated Stream Token:", token, { userId: id });

  return token;
};
