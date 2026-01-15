"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

export default function SSOAutoLogin() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    async function login() {
      try {
        const res = await fetch("/api/sso/consume", {
          method: "POST",
          credentials: "include",
        });

        if (!res.ok) {
          setStatus("error");
          return;
        }

        const { email } = await res.json();

        const result = await signIn("sso", {
          email,
          redirect: false, // 👈 IMPORTANT
        });

        if (result?.error) {
          setStatus("error");
          return;
        }

        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    }

    login();
  }, []);

  if (status === "loading") {
    return <p>Giriş həyata keçirilir…</p>;
  }

  if (status === "error") {
    return (
      <p>
        Giriş zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
      </p>
    );
  }

  return (
    <div className="space-y-3 text-center flex justify-center items-center flex-col">
      <h2 className="text-lg font-semibold">
        Giriş uğurla tamamlandı
      </h2>
      <p>
        Video zəng üçün keçid elektron poçt ünvanınıza göndərilmişdir.
      </p>
      <p>
        Zəhmət olmasa e-poçtunuzu yoxlayın və görüşə qoşulun.
      </p>
    </div>
  );
}