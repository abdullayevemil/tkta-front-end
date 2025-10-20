"use client";

import { use, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { getTranslation } from "@/lib/i18n";

interface PhotoGalleryImage {
  id: number;
  url: string;
}

interface PhotoGallery {
  id: number;
  title: string;
  titleenglish: string;
  headerPhotoUrl: string;
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
  const t = getTranslation(locale);

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

  return (
    <section className="px-4 sm:px-8 md:px-16 mx-auto flex flex-col items-center gap-8 sm:gap-12 md:gap-16 pt-8 sm:pt-12 md:pt-16">
      <h1 className="w-full text-2xl sm:text-3xl md:text-4xl font-semibold text-textPrimary mb-2 sm:mb-4 text-center">
        {locale === "az" ? data.title : data.titleenglish}
      </h1>
      <div className="w-full flex flex-col gap-6 sm:gap-8">
        {selectedImage && (
          <div className="w-full">
            <Image
              src={selectedImage}
              alt={locale === "az" ? data.title : data.titleenglish}
              width={1200}
              height={1200}
              className="w-full h-64 sm:h-96 md:h-[600px] object-cover rounded-xl shadow-lg"
            />
          </div>
        )}
        {data.images && data.images.length > 0 && (
          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-textPrimary mb-2 sm:mb-4">
              {t.media.multimedia.photoGallery}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {data.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative cursor-pointer transition-all duration-200 hover:scale-105 ${selectedImage === image.url ? 'ring-4 ring-textPrimary rounded-lg' : ''}`}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <Image
                    src={image.url}
                    alt={`${locale === "az" ? data.title : data.titleenglish} - ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-28 sm:h-40 md:h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600 w-full text-right">
        {format(new Date(data.date.toString()), "dd-MM-yyyy")}
      </p>
    </section>
  );
} 