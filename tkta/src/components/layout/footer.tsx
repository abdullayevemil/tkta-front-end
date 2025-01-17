"use client";

import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/images/logo.png";
import ExternalLinks from "./external-links";
import Image from "next/image";
import Link from "next/link";
import PinIcon from "@/assets/icons/footer/map-pin.svg";
import FacebookIcon from "@/assets/icons/footer/social-media/facebook.svg";
import InstagramIcon from "@/assets/icons/footer/social-media/instagram.svg";
import LinkedinIcon from "@/assets/icons/footer/social-media/linkedin.svg";
import TelegramIcon from "@/assets/icons/footer/social-media/telegram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-20 w-full items-end p-16">
      <ExternalLinks />

      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/home" className="hover:cursor-pointer w-fit">
          <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
        </Link>

        <div className="flex flex-row gap-4">
          <Link href="https://www.facebook.com/tkta.edu.az?_rdr">
            <FacebookIcon width={32} height={32} color="var(--primary-color)" />
          </Link>

          <Link target="_blank" rel="noopener noreferrer" href="https://instagram.com/tktaeduaz">
            <InstagramIcon width={32} height={32} color="var(--primary-color)" />
          </Link>

          <Link href="https://www.linkedin.com/company/tktaeduaz/">
            <LinkedinIcon width={32} height={32} color="var(--primary-color)" />
          </Link>

          <Link href="https://t.me/tktaeduaz">
            <TelegramIcon width={32} height={32} color="var(--primary-color)" />
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="w-1/3 flex flex-col gap-6">
          <Card className="h-96 w-full flex justify-right">
            <GoogleMapComponent />
          </Card>

          <div className="flex flex-row gap-2 items-center">
            <PinIcon width={30} height={30} color="var(--primary-color)" />

            <div className="text-textPrimary text-base">
              2B Qara Qarayev, Bakı 1060
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
