"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  titleenglish: string;
  content: string;
  contentenglish: string;
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
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [error, setError] = useState("");

  const { id, locale } = use(params);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/media/news/${id}`
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

  if (error) return <p>{error}</p>;

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
  } = news;

  console.log(photos);

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
          {/* Image gallery grid */}
          {photos && headerimageurl && photos.length > 0 && (
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                <div
                  key={0}
                  className={`relative cursor-pointer transition-all duration-200 hover:scale-105 ${
                    selectedImage === headerimageurl ? "ring-4 ring-textPrimary rounded-lg" : ""
                  }`}
                  onClick={() => setSelectedImage(headerimageurl)}
                >
                  <Image
                    src={headerimageurl}
                    alt={`${locale === "az" ? title : titleenglish}`}
                    width={300}
                    height={200}
                    className="w-full h-28 sm:h-40 md:h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 font-semibold">0</span>
                  </div>
                </div>
                {photos.map((image: Photo, index: number) => (
                  <div
                    key={index + 1}
                    className={`relative cursor-pointer transition-all duration-200 hover:scale-105 ${
                      selectedImage === image.url ? "ring-4 ring-textPrimary rounded-lg" : ""
                    }`}
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <Image
                      src={image.url}
                      alt={`${locale === "az" ? title : titleenglish}`}
                      width={300}
                      height={200}
                      className="w-full h-28 sm:h-40 md:h-48 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <span className="text-white opacity-0 hover:opacity-100 font-semibold">{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedImage && (
            <div className="w-full">
              <Image
                src={selectedImage}
                alt={locale === "az" ? title : titleenglish}
                width={1200}
                height={800}
                className="w-full h-64 sm:h-96 md:h-[600px] object-cover rounded-xl shadow-lg"
              />
            </div>
          )}
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
