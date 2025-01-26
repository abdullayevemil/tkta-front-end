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
    url: "partners/mzkds8lwyi12jpg18udv",
  },
  {
    id: 2,
    url: "partners/tpywgiyzgx3ybi1qfq4s",
  },
  {
    id: 3,
    url: "partners/fixv4ggyt5nmm83mcgkl",
  },
  {
    id: 4,
    url: "partners/iqnl4mzcrubovbirnypx",
  },
  {
    id: 5,
    url: "partners/gaq5b15mykteiwawctun",
  },
  {
    id: 6,
    url: "partners/hcy8lt7xvzwr8x6z0idk",
  },
  {
    id: 7,
    url: "partners/kdhdovtf6mqydd85mlzy",
  },
  {
    id: 8,
    url: "partners/ffwrvvcyletlsvmzguz3",
  },
  {
    id: 9,
    url: "partners/rjsz0waxxpt3vck5ceh3",
  },
  {
    id: 10,
    url: "partners/pnr2rxayr3szfilwz7ob",
  },
  {
    id: 11,
    url: "partners/yjtcjprtgb7bfb8qvikc",
  },
  {
    id: 12,
    url: "partners/gdmlfuaa18qh7wlk663n",
  },
  {
    id: 13,
    url: "partners/bjt3mgr3pjjpzfddkuv5",
  },
  {
    id: 14,
    url: "partners/orokex9epxsu3osnl0eu",
  },
  {
    id: 15,
    url: "partners/d7evcczcjn4arot6xapa",
  },
  {
    id: 16,
    url: "partners/jirdfhgj6nlfpxztgovl",
  },
  {
    id: 17,
    url: "partners/xxy3mwzrh9d8sxg9ejpu",
  },
  {
    id: 81,
    url: "partners/ruqztpfmfpzem6tfqn0w",
  },
  {
    id: 19,
    url: "partners/wh2ef9lbu9z4lqpaj0z6",
  },
  {
    id: 20,
    url: "partners/t4brofllwxqj0fw1iupx",
  },
  {
    id: 21,
    url: "partners/fib6tajcem45vwwvwtdh",
  },
  {
    id: 22,
    url: "partners/f5hsq8ztnupn77og6nrl",
  },
  {
    id: 23,
    url: "partners/xya55wvfbvrldtv0goxb",
  },
  {
    id: 24,
    url: "partners/fqtkb2j98kbgaekv3onz",
  },
  {
    id: 25,
    url: "partners/boqjccfjw0tauysde9eu",
  },
  {
    id: 26,
    url: "partners/miaybbh34wkjlbxdxkxp",
  },
  {
    id: 27,
    url: "partners/imvvvpg87peniiyvxgex",
  },
];

export default function Partners() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Tərəfdaşlar
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
                className="basis-1/5 flex items-center"
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
