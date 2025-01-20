import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Navigation } from "./navigation";
import Link from "next/link";
import { LanguageSelector } from "./language-selector";
import { FontSelector } from "./font-selector";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white flex flex-col items-center justify-center gap-8 py-6 px-16 font-helvetica sticky top-0 left-0 z-50">
      <div className="w-full flex justify-between h-full">
        <Link href="/home" className="hover:cursor-pointer">
          <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
        </Link>

        <div className="flex flex-col gap-2">
          <LanguageSelector />

          <FontSelector />
        </div>
      </div>

      <Navigation />
    </header>
  );
}
