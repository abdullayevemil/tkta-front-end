import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Navigation } from "./navigation";
import Link from "next/link";
import { LanguageSelector } from "./language-selector";
import { FontSelector } from "./font-selector";
import { ColorSwitch } from "./color-switch";
import TelegramIcon from "@/assets/icons/footer/social-media/telegram.svg";
import LinkedinIcon from "@/assets/icons/footer/social-media/linkedin.svg";
import InstagramIcon from "@/assets/icons/footer/social-media/instagram.svg";
import FacebookIcon from "@/assets/icons/footer/social-media/facebook.svg";
import XIcon from "@/assets/icons/footer/social-media/x.svg";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white flex flex-col items-center justify-center gap-8 py-6 px-16 font-helvetica sticky top-0 left-0 z-50">
      <div className="w-full flex justify-between h-full items-center gap-10">
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
        </div>

        <ul className="flex flex-row gap-4 items-center">
          <li>
            <Link href="">
              <InstagramIcon color="var(--gold-border-color)" width={24} height={24} />
            </Link>
          </li>

          <li>
            <Link href="">
              <FacebookIcon color="var(--gold-border-color)" width={24} height={24} />
            </Link>
          </li>

          <li>
            <Link href="">
              <LinkedinIcon color="var(--gold-border-color)" width={24} height={24} />
            </Link>
          </li>

          <li>
            <Link href="">
              <TelegramIcon color="var(--gold-border-color)" width={24} height={24} />
            </Link>
          </li>

          <li>
            <Link href="">
              <XIcon color="var(--gold-border-color)" width={24} height={24} />
            </Link>
          </li>
        </ul>

        <div className="flex flex-row gap-2 items-center border border-gray-300 rounded-xl p-0.5 px-2 h-fit flex-1 focus:border focus:border-textPrimary">
          <SearchIcon width={24} height={24} className="text-gray-500" />

          <Input className="border-none outline-none focus:outline-none focus:border-none shadow-none focus-visible:ring-0" />
        </div>

        <ColorSwitch />

        <FontSelector />

        <LanguageSelector />
      </div>

      <Navigation />
    </header>
  );
}
