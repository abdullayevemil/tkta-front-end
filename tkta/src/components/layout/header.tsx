import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Navigation } from "./navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white flex flex-row items-center justify-center gap-8 py-6 px-16 font-helvetica sticky top-0 left-0 z-50">
      <Link href="/home" className="hover:cursor-pointer">
        <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
      </Link>

      <Navigation />
    </header>
  );
}
