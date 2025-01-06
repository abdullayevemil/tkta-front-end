import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Navigation } from "./navigation";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-center gap-[60px] py-4 px-28 font-helvetica">
      <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18"/>

      <Navigation />
    </header>
  );
}
