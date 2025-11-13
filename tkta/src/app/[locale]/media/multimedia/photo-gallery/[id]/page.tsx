"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

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
  params: Promise<{
    locale: string;
  }>;
};

export default function PhotoGalleryPage({ params }: Props) {
  const { locale } = use(params);
  
  const [open, setOpen] = useState(false);

  const { id } = useParams() as {
    id: string;
  };

  const type = "photo-gallery";

  const [data, setData] = useState<PhotoGallery | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!type || !id) return;

    fetch(`/api/media/multimedia/${type}/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          setError(errorData.error || "Failed to load");
          return;
        }
        const json = await res.json();
        setData(json);
        // Set the first image as selected by default
        if (json.images && json.images.length > 0) {
          setSelectedImage(json.images[0].url);
        }
      })
      .catch(() => setError("Failed to load"));
  }, [type, id]);

  if (error) {
    return (
      <section className="p-8 text-center">
        <p className="text-red-600">{error}</p>
        <button onClick={() => router.back()} className="mt-4 underline">
          Go Back
        </button>
      </section>
    );
  }

  if (!data) {
    return <Skeleton className="w-full h-[700px] rounded-xl" />;
  }

  console.log(data);

  const {
    title,
    titleenglish,
    contentenglish,
    content,
    date,
    images,
  } = data;

  const allImages = [data.headerphotourl, ...images.map((p) => p.url)].filter(
    Boolean
  );
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

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6 sm:gap-8">
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
          <div className="text-xs text-muted-foreground ml-auto">
            {date.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
      </div>
    </section>
  );
}
