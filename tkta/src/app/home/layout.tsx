"use client";

import { useFontSize } from "@/context/font-size-context";

export default function HomeLayout({
  children,
  video,
  statistics,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
  statistics: React.ReactNode;
}>) {
  const { fontSize } = useFontSize();

  return (
    <main
      className="flex flex-col gap-20 h-full w-full"
      style={{ fontSize: `${fontSize}px` }}
    >
      <section>{video}</section>

      <section>{statistics}</section>

      {children}
    </main>
  );
}
