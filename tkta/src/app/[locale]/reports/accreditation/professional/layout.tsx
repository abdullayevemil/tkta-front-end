export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section className="w-full flex flex-col gap-16 items-center">
        <h1 className="uppercase text-5xl text-center w-full px-[112px] pt-16">
          Peşə təhsİlİ üzrə hesabatları
        </h1>

        {children}
      </section>
    </main>
  );
}
