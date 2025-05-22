import Image from "next/image";
import HeaderImage from "@/assets/images/media/header-image.png";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-20 h-full w-full">
      <section className="w-full flex flex-col gap-12 items-center">
        <Image src={HeaderImage} alt="header image" className="w-full" />
        
        {children}
      </section>
    </main>
  );
}
