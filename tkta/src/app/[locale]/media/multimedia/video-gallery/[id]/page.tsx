"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  headerviewurl: string;
  createdAt: string;
}

export default function MediaDetailPage() {
  const { type, id } = useParams() as {
    type: "photo-gallery" | "video-gallery";
    id: string;
  };
  const [data, setData] = useState<Photo | Video | null>(null);
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
    return <p className="p-8 text-center">Loading...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-6">{data.description}</p>

      {type === "photo-gallery" ? (
        <img
          src={(data as Photo).imageUrl}
          alt={data.title}
          className="w-full rounded shadow"
        />
      ) : (
        <video
          src={(data as Video).headerviewurl}
          controls
          className="w-full rounded shadow"
        />
      )}

      <p className="mt-4 text-sm text-gray-600">
        Uploaded: {new Date(data.createdAt).toLocaleDateString()}
      </p>
    </section>
  );
}
