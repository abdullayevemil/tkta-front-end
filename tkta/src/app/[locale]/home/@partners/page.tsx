"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const partners = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921601/partners/mzkds8lwyi12jpg18udv.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921601/partners/tpywgiyzgx3ybi1qfq4s.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921601/partners/fixv4ggyt5nmm83mcgkl.png",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921601/partners/iqnl4mzcrubovbirnypx.jpg",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921601/partners/gaq5b15mykteiwawctun.png",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/hcy8lt7xvzwr8x6z0idk.jpg",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/kdhdovtf6mqydd85mlzy.png",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/ffwrvvcyletlsvmzguz3.jpg",
  },
  {
    id: 9,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/rjsz0waxxpt3vck5ceh3.png",
  },
  {
    id: 10,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/pnr2rxayr3szfilwz7ob.png",
  },
  {
    id: 11,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/yjtcjprtgb7bfb8qvikc.png",
  },
  {
    id: 12,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1763642717/Screenshot_2025-11-20_at_16.45.10_hyek1p.png",
  },
  {
    id: 13,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/bjt3mgr3pjjpzfddkuv5.jpg",
  },
  {
    id: 14,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/orokex9epxsu3osnl0eu.png",
  },
  {
    id: 15,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921600/partners/d7evcczcjn4arot6xapa.jpg",
  },
  {
    id: 16,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/jirdfhgj6nlfpxztgovl.png",
  },
  {
    id: 17,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/xxy3mwzrh9d8sxg9ejpu.jpg",
  },
  {
    id: 18,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/ruqztpfmfpzem6tfqn0w.jpg",
  },
  {
    id: 19,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/wh2ef9lbu9z4lqpaj0z6.jpg",
  },
  {
    id: 20,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/t4brofllwxqj0fw1iupx.png",
  },
  {
    id: 21,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921599/partners/fib6tajcem45vwwvwtdh.png",
  },
  {
    id: 22,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921598/partners/f5hsq8ztnupn77og6nrl.jpg",
  },
  {
    id: 23,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921598/partners/xya55wvfbvrldtv0goxb.png",
  },
  {
    id: 24,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921598/partners/fqtkb2j98kbgaekv3onz.jpg",
  },
  {
    id: 25,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921598/partners/boqjccfjw0tauysde9eu.jpg",
  },
  {
    id: 26,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921598/partners/miaybbh34wkjlbxdxkxp.png",
  },
  {
    id: 27,
    url: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737921598/partners/imvvvpg87peniiyvxgex.jpg",
  },
];

export default function Partners() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-2xl sm:text-3xl md:text-4xl w-full justify-center text-center uppercase px-4">
        Tərəfdaşlar
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
                className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-center"
              >
                <Image unoptimized={process.env.NODE_ENV === "development"}
                  src={partner.url} 
                  width="150" 
                  alt="image" 
                  height="150" 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px] object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
