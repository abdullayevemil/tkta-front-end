"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DialogTitle } from "@/components/ui/dialog";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import Image from "next/image";
import { use, useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  titleenglish: string;
  content: string;
  contentenglish: string;
  videourl: string;
  headerimageurl?: string;
  date: string;
  note?: string;
  noteenglish?: string;
  photos: Photo[];
}

interface Photo {
  url: string;
}

export default function NewsPage({
  params,
}: {
  params: Promise<{ id: number; locale: string }>;
}) {
  const [news, setNews] = useState<News>({
    id: 0,
    title: "",
    titleenglish: "",
    content: "",
    contentenglish: "",
    note: "",
    noteenglish: "",
    date: "",
    photos: [],
    headerimageurl: "",
    videourl: "",
  });

  const [error, setError] = useState("");

  const { id, locale } = use(params);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/media/interviews/${id}`
        );

        if (!res.ok) {
          setError("Not Found");
          return;
        }

        const data = await res.json();
        if (!data) {
          setError("Not Found");
          return;
        }

        setNews(data);

        if (data.headerimageurl) {
          setSelectedImage(data.headerimageurl);
        }
      } catch {
        setError("Failed to load news");
      }
    };

    fetchNews();
  }, [id]);

  const {
    title,
    titleenglish,
    contentenglish,
    noteenglish,
    content,
    date,
    note,
    photos,
    headerimageurl,
    videourl,
  } = news;

  const allImages = [headerimageurl, ...photos.map((p) => p.url)].filter(
    Boolean
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  if (error) return <p>{error}</p>;

  return (
    <section className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-8 md:px-24 pt-8 sm:pt-12">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-textPrimary">
        {locale === "az" ? title : titleenglish}
      </h1>

      <div
        className="w-full text-justify"
        dangerouslySetInnerHTML={{
          __html: locale === "az" ? content : contentenglish,
        }}
      />

      {videourl && (
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[60%]">
            <video
              src={videourl}
              controls
              className="w-full rounded-lg shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {/* Image gallery grid */}
          <div className="w-full">
            <Carousel className="w-full mx-auto">
              <CarouselContent>
                {allImages.map((img, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div
                      className="relative cursor-pointer transition-transform duration-200 hover:scale-105"
                      onClick={() => {
                        setSelectedImage(img || "");
                        setOpen(true);
                      }}
                    >
                      <Image
                        src={img || ""}
                        alt={locale === "az" ? title : titleenglish}
                        width={300}
                        height={200}
                        className="w-full h-28 sm:h-40 md:h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {selectedImage && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                  className="fixed inset-0 flex items-center justify-center bg-black/80 p-4 z-[9999]"
                  onClick={() => setOpen(false)} // click outside the image
                >
                  <DialogTitle></DialogTitle>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-lg"
                  >
                    <Image
                      src={selectedImage!}
                      alt={locale === "az" ? title : titleenglish}
                      width={1600}
                      height={1000}
                      className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    />

                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-4 right-4 text-white text-2xl font-bold"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          {note && (
            <div className="text-sm font-semibold text-destructive">
              {locale === "az" ? note : noteenglish}
            </div>
          )}
          <div className="text-xs text-muted-foreground ml-auto">
            {date.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
      </div>
    </section>
  );
}
