"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SSORedirectPage() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    email ? "loading" : "error"
  );

  useEffect(() => {
    if (!email) return;

    async function storeEmail() {
      try {
        const res = await fetch("/api/sso/store-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
          credentials: "include",
        });

        if (!res.ok) {
          setStatus("error");
          return;
        }

        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    }

    storeEmail();

    async function go() {
      const res = await fetch("/api/sso/redirect");
      const json = await res.json();

      const redirectUrl = json?.data?.ClientInfo?.RedirectURI;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        console.error("Invalid redirect URL", json);
      }
    }

    go();
  }, [email]);

  if (status === "loading") return <p>Giriş məlumatları saxlanılır…</p>;
  if (status === "error")
    return <p>Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.</p>;

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Yönləndirilir...</p>
    </div>
  );
}
