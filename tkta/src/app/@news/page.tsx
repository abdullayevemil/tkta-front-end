import NewsCard from "@/components/home/news-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Xəbərlər
      </h2>

      <Carousel
        className="px-[112px] w-full"
        opts={{
          loop: true,
        }}
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

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </div>
  );
}
