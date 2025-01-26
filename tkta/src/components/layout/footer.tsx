"use client";

import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import ExternalLinks from "./external-links";
import Link from "next/link";
import { Clock, Mail, MapPinned, Phone } from "lucide-react";

export default function Footer() {
  const currentDate = new Date();

  return (
    <footer className="flex flex-col gap-6 w-full items-end p-16">
      <div className="flex flex-col gap-20 w-full items-end">
        <div className="w-full h-full flex flex-row justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-textPrimary font-semibold">Sürətli keçid</div>

            <ul className="flex flex-col justify-between h-full">
              <li className="hover:text-textPrimary">
                <Link href="/home">Ana səhifə</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/agency">Agentlik</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/sercices">Fəaliyyət Sahələri</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/internationalization">Beynəlmiləlləşmə</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/announcements">Elanlar</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/reports">Hesabatlar</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/legislation">Qanunvericilik</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/media">Media</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/diploma-recognition">Diplom Təsdiqi</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/">İmtina alan universitetlər</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="">Tanınmayan universitetlər</Link>
              </li>

              <li className="hover:text-textPrimary">
                <Link href="/contact">Əlaqə</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-textPrimary font-semibold text-center">
              Əlaqə
            </div>

            <div className="flex flex-col gap-6 items-start justfy-left">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto::info@tkta.edu.az"
                className="flex flex-row gap-2"
              >
                <Mail width={60} color="var(--primary-color)" />

                <div className="text-textPrimary text-base text-justify">
                  info@tkta.edu.az
                </div>
              </Link>

              <div className="flex flex-row justify-between gap-16">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel::146-8"
                  className="flex flex-row gap-2"
                >
                  <Phone width={60} color="var(--primary-color)" />

                  <div className="text-textPrimary text-base text-justify">
                    146-8
                  </div>
                </Link>

                <div className="flex flex-row gap-2">
                  <Clock width={60} color="var(--primary-color)" />

                  <div className="text-textPrimary text-base text-justify">
                    09:00 - 18:00
                  </div>
                </div>
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/FTyJY73SYT4YvKfJ6"
                className="flex flex-row gap-2"
              >
                <MapPinned width={60} color="var(--primary-color)" />

                <div className="text-textPrimary text-base text-justify text-wrap max-w-80">
                  Q.Qarayev prospekti 2B (Bakı Texniki Kolleci). AZ 1060,
                  Azərbaycan, Bakı. Agentliyə giriş Kamil Balakişiyev küçəsi.
                </div>
              </Link>
            </div>
          </div>

          <Card className="flex justify-right">
            <GoogleMapComponent />
          </Card>
        </div>

        <ExternalLinks />
      </div>

      <div className="text-sm text-left w-full text-black/[0.5]">
        © {currentDate.getFullYear()} Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}
