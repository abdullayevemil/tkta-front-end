"use client";

import { useFontSize } from "@/context/font-size-context";

export default function HomeLayout({
  children,
  video,
  statistics,
  partners,
  memberships,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
  statistics: React.ReactNode;
  partners: React.ReactNode;
  memberships: React.ReactNode;
}>) {
  const { fontSize } = useFontSize();

  return (
    <main
      className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 h-full w-full"
      style={{ fontSize: `${fontSize}px` }}
    >
      <section>{video}</section>

      <section>{statistics}</section>

      <section>{memberships}</section>

      <section>{partners}</section>

      {children}
    </main>
  );
}
