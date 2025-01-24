"use client";

import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/images/logo.png";
import ExternalLinks from "./external-links";
import Image from "next/image";
import Link from "next/link";
import PinIcon from "@/assets/icons/footer/map-pin.svg";

export default function Footer() {
  const currentDate = new Date();

  return (
    <footer className="flex flex-col gap-6 w-full items-end p-16">
      <div className="flex flex-col gap-20 w-full items-end">
        <div className="w-full h-full flex flex-row justify-between">
          <Link href="/home" className="hover:cursor-pointer w-fit">
            <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
          </Link>

          <div className="flex flex-row gap-4"></div>

          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/FTyJY73SYT4YvKfJ6"
                className="flex flex-row gap-2 items-center"
              >
                <PinIcon width={24} height={24} color="var(--primary-color)" />

                <div className="text-textPrimary text-base">
                  2B Qara Qarayev, Bakı 1060
                </div>
              </Link>
            </div>

            <Card className="flex justify-right">
              <GoogleMapComponent />
            </Card>
          </div>
        </div>

        <ExternalLinks />
      </div>

      <div className="text-sm text-left w-full text-black/[0.5]">
        © {currentDate.getFullYear()} Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}
