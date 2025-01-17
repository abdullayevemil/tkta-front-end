export default function HomeLayout({
  children,
  video,
  statistics,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
  statistics: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section>{video}</section>

      <section>{statistics}</section>

      {children}
    </main>
  );
}
