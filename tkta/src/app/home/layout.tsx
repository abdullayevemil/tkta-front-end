export default function HomeLayout({
  children,
  video,
  map,
  statistics,
  links,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
  map: React.ReactNode;
  statistics: React.ReactNode;
  links: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section>{video}</section>

      <section>{statistics}</section>

      <section>{map}</section>

      <section>{links}</section>

      {children}
    </main>
  );
}
