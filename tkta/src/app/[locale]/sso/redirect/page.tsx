"use client";

import { useEffect } from "react";

export default function SSORedirectPage() {
  useEffect(() => {
    async function go() {
      const res = await fetch("/api/sso/redirect");
      const json = await res.json();

      const redirectUrl =
        json?.data?.ClientInfo?.RedirectURI;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        console.error("Invalid redirect URL", json);
      }
    }

    go();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Yönləndirilir...</p>
    </div>
  );
}