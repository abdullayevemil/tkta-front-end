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
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Üzv olduğumuz təşkİlatlar
      </h2>

      <div className="px-16 flex flex-col gap-6">
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
                className="basis-1/3 flex items-center justify-center"
              >
                <Link href="">
                  <CldImage
                    src={partner.url}
                    width="200"
                    alt="image"
                    height="200"
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
