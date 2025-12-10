"use client";

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
import { SearchIcon, Menu, X } from "lucide-react";
import { getTranslation } from "@/lib/i18n";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header({ locale }: { locale: string }) {
  locale = locale || "az";

  const t = getTranslation(locale);

  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    if (!searchValue.trim()) return;
    const query = encodeURIComponent(searchValue);
    window.open(`https://tkta.edu.az/search?key=${query}`, "_blank");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="border-b border-gray-100 bg-white flex flex-col items-center gap-4 py-4 px-4 sm:px-8 md:px-16 font-helvetica sticky top-0 left-0 z-50 w-full">
      <div className="w-full flex items-center justify-between md:hidden">
        <Link href={`/${locale}/home`}>
          <Image src={Logo} alt="TKTA logo" className="w-[130px] h-12" />
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden md:flex"
        } flex-col md:flex md:flex-row w-full justify-between items-center gap-4 w-full`}
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex-col gap-2 flex md:flex-row w-full justify-between items-center md:gap-4">
            <div className="hidden md:block">
              <Link href={`/${locale}/home`}>
                <Image
                  src={Logo}
                  alt="TKTA logo"
                  className="w-[140px] sm:w-[194.4px] h-14 sm:h-18"
                />
              </Link>
            </div>

            <div className="flex gap-2 justify-between w-full md:w-auto">
              <Link
                className="w-1/2 text-sm md:text-base md:max-w-[150px] text-center shadow border rounded p-1 md:p-2 hover:text-textPrimary"
                href="/rejected-universities"
              >
                {t.header.mostRejectedUniversities}
              </Link>

              <Link
                className="flex justify-center items-center w-1/2 text-sm md:text-base md:max-w-[150px] text-center shadow border rounded p-1 md:p-2 hover:text-textPrimary"
                href="/not-recognized-universities"
              >
                {t.header.nonRecognizedUniversities}
              </Link>
            </div>

            <div className="flex flex-row gap-2 md:gap-4 justify-between w-full ma-w-full md:w-auto">
              <ul className="flex gap-1 items-center">
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
                    <XIcon
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

              <div className="flex flex-row gap-1 md:gap-2 items-center">
                <ColorSwitch locale={locale} />
                <FontSelector />
                <LanguageSelector />
              </div>
            </div>

            <div className="flex flex-row gap-2 items-center w-full md:w-auto">
              <div className="h-fit py-0 flex flex-row gap-2 items-center border border-gray-300 rounded-xl p-0.5 px-2 w-full md:w-auto focus-within:border-textPrimary">
                <SearchIcon
                  width={24}
                  height={24}
                  className="text-gray-500 w-4 md:w-6"
                />

                <Input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.header.navigation.agency.search}
                  className="border-none outline-none shadow-none focus-visible:ring-0 w-full text-sm md:text-base"
                />

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs p-1 md:p-2 md:text-sm"
                  onClick={handleSearch}
                >
                  {t.header.navigation.agency.search}
                </Button>
              </div>
            </div>
          </div>

          <Navigation locale={locale} />
        </div>
      </div>
    </header>
  );
}
