export default function HomeLayout({
  children,
  video,
  services,
  statistics,
  news,
  map,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
  services: React.ReactNode;
  statistics: React.ReactNode;
  news: React.ReactNode;
  map: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section>{video}</section>

      <section>{services}</section>

      <section>{statistics}</section>

      <section>{news}</section>

      <section>{map}</section>

      {children}
    </main>
  );
}
