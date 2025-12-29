"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import LinkCard from "@/components/home/link-card";

export default function ExternalLinks() {
  return (
    <div className="w-full flex flex-col gap-10">
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
          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Azərbaycan Respublikasının Prezidenti"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1766765535/Emblem_of_Azerbaijan.svg_adogff.png"
              url="https://prezident.az"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Azərbaycan Respublikasının Birinci xanımı"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1766765535/Emblem_of_Azerbaijan.svg_adogff.png"
              url="https://mehriban-aliyeva.az/"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Azərbaycan Respublikası Elm və Təhsil Nazirliyi"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1766765534/elm-tehsil-naziriyi-logo_rn5h9f.png"
              url="https://edu.gov.az"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Azərbaycanda fəaliyyət göstərən Ali Təhsil müəssisələri"
              imageUrl="https://tkta.edu.az/files/Az%C9%99rbaycan%20Universitetl%C9%99ri/Doc1%20(1).jpg"
              url="https://tkta.edu.az/files/NewFolder%208/NewFolder/NewFolder/dsds.pdf"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Heydər Əliyev Fondu"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1746868198/external%20link/khoqarsf30akyibvomjo.png"
              url="https://heydar-aliyev-foundation.org/az"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Heydər Əliyev Mərkəzi"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1746867845/external%20link/nrqgk6m3ro0iny3xlu3z.png"
              url="https://heydaraliyevcenter.az"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Azərbaycanda təhsil"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1746867871/external%20link/ynxqixsj3jzprazp1s63.png"
              url="https://studyinazerbaijan.edu.az"
            />
          </CarouselItem>

          <CarouselItem className="basis-full basis-1/2 lg:basis-1/5">
            <LinkCard
              name="Enic-Naric"
              imageUrl="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1746868003/external%20link/ue8icsshiidzvh6fffol.svg"
              url="https://www.enic-naric.net"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
