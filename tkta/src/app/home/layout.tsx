export default function HomeLayout({
  children,
  video,
  map,
  statistics,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
  map: React.ReactNode;
  statistics: React.ReactNode,
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section>{video}</section>

      <section>{statistics}</section>

      <section>{map}</section>

      {children}
    </main>
  );
}
