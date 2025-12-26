"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryImage {
  id: number;
  url: string;
}

interface PhotoGallery {
  id: number;
  title: string;
  titleenglish: string;
  content: string;
  contentenglish: string;
  headerphotourl: string;
  date: string;
  images: PhotoGalleryImage[];
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default function PhotoGalleryPage({ params }: Props) {
  const { locale } = use(params);
  const { id } = useParams() as { id: string };
  const router = useRouter();

  const [data, setData] = useState<PhotoGallery | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch(`/api/media/multimedia/photo-gallery/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          setError(err.error || "Failed to load");
          return;
        }
        const json = await res.json();
        setData(json);
        if (json.images?.length > 0) setSelectedIndex(0);
      })
      .catch(() => setError("Failed to load"));
  }, [id]);

  if (error)
    return (
      <section className="p-8 text-center">
        <p className="text-red-600">{error}</p>
        <button onClick={() => router.back()} className="mt-4 underline">
          Go Back
        </button>
      </section>
    );

  if (!data) return <Skeleton className="w-full h-[700px] rounded-xl" />;

  const { title, titleenglish, headerphotourl, date, images } = data;
  const allImages = [headerphotourl, ...images.map((p) => p.url).filter(Boolean)];
  const selectedImage = allImages[selectedIndex];

  const goLeft = () =>
    setSelectedIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));

  const goRight = () =>
    setSelectedIndex((i) => (i === allImages.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-8 md:px-24 pt-8 sm:pt-12">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-textPrimary">
        {locale === "az" ? title : titleenglish}
      </h1>

      <div className="w-full max-w-4xl relative flex items-center justify-center">
        <button
          onClick={goLeft}
          className="absolute left-0 p-3 rounded-full bg-black/40 backdrop-blur text-white"
        >
          <ChevronLeft size={32} />
        </button>

        <Image
          src={selectedImage}
          alt={locale === "az" ? title : titleenglish}
          width={1600}
          height={1000}
          className="w-full max-h-[480px] object-contain rounded-xl shadow"
        />

        <button
          onClick={goRight}
          className="absolute right-0 p-3 rounded-full bg-black/40 backdrop-blur text-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {allImages.map((img, idx) => (
            <CarouselItem
              key={idx}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div
                className="relative cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setSelectedIndex(idx)}
              >
                <Image
                  src={img}
                  alt={locale === "az" ? title : titleenglish}
                  width={300}
                  height={200}
                  className={`w-full h-28 sm:h-40 md:h-48 object-cover rounded-lg shadow-md ${
                    selectedIndex === idx ? "ring-4 ring-blue-500" : "opacity-70"
                  }`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 w-full">
        <div className="text-xs text-muted-foreground ml-auto">
          {date.split("T")[0].split("-").reverse().join("-")}
        </div>
      </div>
    </section>
  );
}