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

    fetch(`/api/media/${type}/${id}`)
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
    <section className="px-16 mx-auto p-8 flex flex-col items-center gap-16 pt-16">
      <h1 className="text-3xl font-semibold text-textPrimary mb-4 text-center">
        {locale === 'az' ? data.title : data.titleenglish}
      </h1>

      <div className="w-full px-16">
        <iframe
          src={(data as Video).headerviewurl}
          height={"700"}
          className="w-full rounded-xl shadow"
        />
      </div>

      <p className="text-sm text-gray-600 w-full text-right">
        {format(new Date(data.date.toString()), "dd-MM-yyyy")}
      </p>
    </section>
  );
}
