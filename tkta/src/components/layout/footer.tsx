"use client";

import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import ExternalLinks from "./external-links";
import Link from "next/link";
import { ChevronDown, ChevronUp, Mail, MapPinned, Phone } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentDate = new Date();
  const [open, setOpen] = useState(false);

  return (
    <footer className="flex flex-col gap-6 w-full items-end p-4 sm:p-8 md:p-16">
      <div className="flex flex-col gap-10 sm:gap-20 w-full items-end">
        <div className="w-full h-full flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="flex flex-col gap-4">
            <div
              className="text-textPrimary font-semibold flex items-center justify-between lg:cursor-default cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Sürətli keçid
              <span className="lg:hidden">
                {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </div>

            <ul
              className={`
          flex flex-col justify-between h-full overflow-hidden transition-all duration-300
          ${open ? "max-h-[1000px]" : "max-h-0 lg:max-h-none"}
          ${open ? "opacity-100" : "opacity-0 lg:opacity-100"}
          lg:opacity-100 lg:max-h-none
        `}
            >
              <li className="hover:text-textPrimary">
                <Link href="/home">Ana səhifə</Link>
              </li>
              
              <li className="hover:text-textPrimary">
                <Link href="/agency">Agentlik</Link>
              </li>
              
              <li className="hover:text-textPrimary">
                <Link href="/sercices">Fəaliyyət sahələri</Link>
              </li>
              
              <li className="hover:text-textPrimary">
                <Link href="/diploma-recognition">Diplom Təsdiqi</Link>
              </li>
              
              <li className="hover:text-textPrimary">
                <Link href="/internationalization">Beynəlmiləlləşmə</Link>
              </li>
              
              <li className="hover:text-textPrimary">
                <Link href="/">Ən çox imtina alan universitetlər</Link>
              </li>
              
              <li className="hover:text-textPrimary">
                <Link href="">Tanınmayan universitetlər</Link>
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
                <Link href="/contact">Əlaqə</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start rounded-xl border-2 items-center border-textPrimary p-4 sm:p-8">
            <div className="flex flex-col gap-8 w-full sm:w-auto">
              <h3 className="text-3xl sm:text-5xl pb-4 sm:pb-8 border-b-2 border-textPrimary">
                Əlaqə
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 items-start justify-left items-stretch">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:info@tkta.edu.az"
                  className="flex flex-col gap-3 items-center justify-between p-4 border-2 border-textPrimary rounded-xl"
                >
                  <Mail width={60} color="var(--primary-color)" />

                  <div className="text-textPrimary text-sm text-justify">
                    info@tkta.edu.az
                  </div>
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:146-8"
                  className="flex flex-col gap-3 items-center justify-between p-4 border-2 border-textPrimary rounded-xl"
                >
                  <Phone width={60} color="var(--primary-color)" />

                  <div className="text-textPrimary text-sm text-justify">
                    146-8
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="text-textPrimary text-sm text-justify">
                      09:00 - 18:00
                    </div>
                  </div>
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/FTyJY73SYT4YvKfJ6"
                  className="flex flex-col gap-3 items-center justify-between p-4 border-2 border-textPrimary rounded-xl"
                >
                  <MapPinned width={60} color="var(--primary-color)" />

                  <div className="text-textPrimary text-[0.6875rem] text-justify text-wrap max-w-64">
                    Q.Qarayev prospekti 2B (Bakı Texniki Kolleci). AZ 1060,
                    Azərbaycan, Bakı. Agentliyə giriş Kamil Balakişiyev küçəsi.
                  </div>
                </Link>
              </div>
            </div>
            <Card className="flex justify-right w-full sm:w-auto">
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
