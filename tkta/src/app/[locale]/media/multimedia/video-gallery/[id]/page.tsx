"use client";

import { use, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

interface Video {
  id: number;
  title: string;
  titleenglish: string;
  headerviewurl: string;
  date: string;
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default function News({ params }: Props) {
  const { locale } = use(params);

  const { id } = useParams() as {
    id: string;
  };

  const type = "video-gallery";

  const [data, setData] = useState<Video | null>(null);
  const [error, setError] = useState<string | null>(null);
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-textPrimary mb-2 sm:mb-4 text-center">
        {locale === "az" ? data.title : data.titleenglish}
      </h1>
      <div className="w-full">
        <iframe
          src={(data as Video).headerviewurl}
          className="w-full rounded-xl shadow h-64 sm:h-96 md:h-[700px]"
        />
      </div>
      <p className="text-sm text-gray-600 w-full text-right">
        {format(new Date(data.date.toString()), "dd-MM-yyyy")}
      </p>
    </section>
  );
}
