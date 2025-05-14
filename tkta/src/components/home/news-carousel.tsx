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
      className="px-4 w-full border-8 border-goldBorderColor border-solid border-x-0"
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
          <CarouselItem key={n.id} className="basis-1/3">
            <Link href={`/news/${n.id}`}>
              <NewsCard
                id={n.id}
                title={n.title}
                content={n.content}
                creationDate={n.creationDate}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
