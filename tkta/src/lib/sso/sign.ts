import crypto from "crypto";
import { SignableContainer } from "./types";

export function sha256Raw(data: string): Buffer {
  return crypto.createHash("sha256").update(data).digest();
}

export function hmacSha256(data: Buffer, secret: string): Buffer {
  return crypto.createHmac("sha256", secret).update(data).digest();
}

export function generateSignature(
  container: SignableContainer,
  secretKey: string
) {
  const json = JSON.stringify(container);

  const hash = sha256Raw(json); 
  const hmac = hmacSha256(hash, secretKey);
  const signature = hmac.toString("base64");

  return signature;
}
