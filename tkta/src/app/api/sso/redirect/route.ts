import { NextResponse } from "next/server";
import { generateSignature } from "@/lib/sso/sign";
import { SSORequest, SignableContainer, SSORedirectResponse } from "@/lib/sso/types";
import crypto from "crypto";

const CLIENT_ID = process.env.SSO_CLIENT_ID!;
const SECRET_KEY = process.env.SSO_SECRET_KEY!;
const CALLBACK_URL = process.env.SSO_CALLBACK_URL!;
const REDIRECT_UI = process.env.SSO_REDIRECT_UI!;
const SSO_URL = process.env.SSO_BASE_URL + "/api/get-redirect-url";

export async function GET() {
  const operationId = crypto.randomUUID();

  const container: SignableContainer = {
    ProtoInfo: {
      Name: "web",
      Version: "1.1"
    },
    OperationInfo: {
      OperationId: operationId,
      Type: "Auth",
      Platform: "ASAN"
    },
    ClientInfo: {
      ClientId: CLIENT_ID,
      Callback: CALLBACK_URL,
      RedirectURI: REDIRECT_UI
    }
  };

  const signature = generateSignature(container, SECRET_KEY);

  const requestBody: SSORequest = {
    SignableContainer: container,
    Header: {
      AlgName: "HMACSHA256",
      Signature: signature
    }
  };

  const ssoResponse = await fetch(SSO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  console.log(ssoResponse)

  const json = (await ssoResponse.json()) as SSORedirectResponse;

  return NextResponse.json(json);
}