"use client";

import NewsCard from "@/components/home/news-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { News } from "@/types/news";

interface NewsProps {
  news: News[];
}

export default function NewsCarousel({ news }: NewsProps) {
  return (
    <Carousel
      className="px-2 sm:px-3 md:px-4 w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {news.map((n) => (
          <CarouselItem key={n.id} className="basis-1/1 sm:basis-1/2 md:basis-1/3">
            <Link href={`/media/news/${n.id}`}>
              <NewsCard
                id={n.id}
                href={`/media/news/${n.id}`}
                title={n.title}
                date={new Date(n.date).toISOString().split("T")[0]}
                headerimageurl={n.headerimageurl}
                note={n.note}
                content=""
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
