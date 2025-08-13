"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const partners = [
  {
    id: 1,
    url: "membership/rcevdw4g7s6klunzx4cv",
  },
  {
    id: 2,
    url: "membership/ksargqtut4r8et0dsgzu",
  },
  {
    id: 3,
    url: "membership/t3goilav8ghdntaq69qs",
  },
  {
    id: 4,
    url: "membership/rcevdw4g7s6klunzx4cv",
  },
  {
    id: 5,
    url: "membership/ksargqtut4r8et0dsgzu",
  },
  {
    id: 6,
    url: "membership/t3goilav8ghdntaq69qs",
  },
];

export default function Memberships() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-2xl sm:text-3xl md:text-4xl w-full justify-center text-center uppercase px-4">
        Üzv olduğumuz təşkİlatlar
      </h2>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-4 sm:gap-6">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem
                key={partner.id}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 flex items-center justify-center"
              >
                <Link href="">
                  <CldImage
                    src={partner.url}
                    width="200"
                    alt="image"
                    height="200"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] object-contain"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
