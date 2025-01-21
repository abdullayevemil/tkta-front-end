"use client";

import NewsCard from "@/components/home/news-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export default function Video() {
  return (
    <div className="w-full relative">
      <video className="w-full" autoPlay={true} muted loop preload="none">
        <source
          src="https://miras.blob.core.windows.net/multimedia/Let%20s%20Talk%20About%20Education%20(online-video-cutter.com)-2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex items-start pb-4 justify-center">
        <div className="w-full border-8 border-goldBorderColor border-solid border-x-8 h-fit">
          <div className="w-full border-[6px] border-goldBorderColor border-dashed border-x-0">
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
                <CarouselItem className="basis-1/3">
                  <Link href="/news/1">
                    <NewsCard
                      id={1}
                      title="Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov “Maarifçi” tələbə–məzun təcrübə proqramının iştirakçıları ilə görüş keçirib"
                      content=""
                      creationDate="23.12.2024"
                    />
                  </Link>
                </CarouselItem>

                <CarouselItem className="basis-1/3">
                  <Link href="/news/1">
                    <NewsCard
                      id={1}
                      title="Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov “Maarifçi” tələbə–məzun təcrübə proqramının iştirakçıları ilə görüş keçirib"
                      content=""
                      creationDate="23.12.2024"
                    />
                  </Link>
                </CarouselItem>

                <CarouselItem className="basis-1/3">
                  <Link href="/news/1">
                    <NewsCard
                      id={1}
                      title="Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov “Maarifçi” tələbə–məzun təcrübə proqramının iştirakçıları ilə görüş keçirib"
                      content=""
                      creationDate="23.12.2024"
                    />
                  </Link>
                </CarouselItem>

                <CarouselItem className="basis-1/3">
                  <Link href="/news/1">
                    <NewsCard
                      id={1}
                      title="Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov “Maarifçi” tələbə–məzun təcrübə proqramının iştirakçıları ilə görüş keçirib"
                      content=""
                      creationDate="23.12.2024"
                    />
                  </Link>
                </CarouselItem>

                <CarouselItem className="basis-1/3">
                  <Link href="/news/1">
                    <NewsCard
                      id={1}
                      title="Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov “Maarifçi” tələbə–məzun təcrübə proqramının iştirakçıları ilə görüş keçirib"
                      content=""
                      creationDate="23.12.2024"
                    />
                  </Link>
                </CarouselItem>

                <CarouselItem className="basis-1/3">
                  <Link href="/news/1">
                    <NewsCard
                      id={1}
                      title="Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov “Maarifçi” tələbə–məzun təcrübə proqramının iştirakçıları ilə görüş keçirib"
                      content=""
                      creationDate="23.12.2024"
                    />
                  </Link>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
