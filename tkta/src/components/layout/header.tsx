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
import YoutubeIcon from "@/assets/icons/footer/social-media/youtube.svg";
import XIcon from "@/assets/icons/footer/social-media/x.svg";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

export default function Header({ locale }: { locale: string }) {
  const t = getTranslation(locale);

  return (
    <header className="border-b border-gray-100 bg-white flex flex-col items-center justify-center gap-8 py-6 px-4 md:px-16 font-helvetica sticky top-0 left-0 z-50 w-full">
      <div className="w-full flex flex-wrap justify-between items-center gap-4">
        <Link href="/home" className="hover:cursor-pointer">
          <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
        </Link>

        <div className="flex flex-wrap gap-2">
          <Link
            className="text-base max-w-[150px] text-center shadow border rounded p-2 hover:text-textPrimary"
            href="/rejected-universities"
          >
            {t.header.mostRejectedUniversities}
          </Link>

          <Link
            className="text-base max-w-[150px] text-center shadow border rounded p-2 hover:text-textPrimary"
            href="/not-recognized-universities"
          >
            {t.header.nonRecognizedUniversities}
          </Link>
        </div>

        <ul className="flex flex-wrap gap-3 items-center justify-center">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/tkta.edu.az"
            >
              <FacebookIcon
                color="var(--gold-border-color)"
                width={24}
                height={24}
              />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/home"
            >
              <XIcon color="var(--gold-border-color)" width={24} height={24} />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tktaeduaz/"
            >
              <InstagramIcon
                color="var(--gold-border-color)"
                width={24}
                height={24}
              />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/tktaeduaz"
            >
              <TelegramIcon
                color="var(--gold-border-color)"
                width={24}
                height={24}
              />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/54113705/admin/page-posts/published/"
            >
              <LinkedinIcon
                color="var(--gold-border-color)"
                width={24}
                height={24}
              />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@thsildkeyfiyyttminatagentl1977"
            >
              <YoutubeIcon color="var(--gold-border-color)" height={24} />
            </Link>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full sm:w-auto">
          <div className="flex flex-row gap-2 items-center border border-gray-300 rounded-xl p-0.5 px-2 w-full sm:w-auto focus-within:border-textPrimary">
            <SearchIcon width={24} height={24} className="text-gray-500" />

            <Input className="border-none outline-none focus:outline-none focus:border-none shadow-none focus-visible:ring-0 w-full" />
          </div>

          <div className="flex flex-row gap-2 items-center justify-center">
            <ColorSwitch locale={locale} />

            <FontSelector />

            <LanguageSelector />
          </div>
        </div>
      </div>

      <Navigation locale={locale} />
    </header>
  );
}
