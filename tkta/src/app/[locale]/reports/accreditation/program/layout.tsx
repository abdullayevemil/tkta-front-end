export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section className="w-full flex flex-col gap-16 items-center">
        <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
          ATMlərin proqram akkredİtasİya hesabatları
        </h1>

        {children}
      </section>
    </main>
  );
}
