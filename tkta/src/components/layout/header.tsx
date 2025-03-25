import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Navigation } from "./navigation";
import Link from "next/link";
import { LanguageSelector } from "./language-selector";
import { FontSelector } from "./font-selector";
import { ColorSwitch } from "./color-switch";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white flex flex-col items-center justify-center gap-8 py-6 px-16 font-helvetica sticky top-0 left-0 z-50">
      <div className="w-full flex justify-between h-full">
        <Link href="/home" className="hover:cursor-pointer">
          <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
        </Link>

        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-4">
            <Link
              className="text-base max-w-[150px] text-center shadow border rounded p-2 hover:text-textPrimary"
              href="/rejected-universities"
            >
              Ən çox imtina alan universitetlər
            </Link>

            <Link
              className="text-base max-w-[150px] text-center shadow border rounded p-2 hover:text-textPrimary"
              href="/not-recognized-universities"
            >
              Tanınmayan universitetlər
            </Link>
          </div>

          <ColorSwitch />

          <FontSelector />

          <LanguageSelector />
        </div>
      </div>

      <Navigation />
    </header>
  );
}
