"use client";

import NewsCarousel from "@/components/home/news-carousel";
import { News } from "@/types/news";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Props {
  news: News[];
}

export default function Video() {
  const [news, setNews] = useState<News[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/media/news?sort=new`, {
      method: "GET",
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((n: Props) => setNews(n.news.slice(0, 6)))
      .catch(() => setNews([]));
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="w-full relative flex flex-col gap-24">
      <div className="relative w-full flex justify-center items-center">
        <div className="relative w-full md:w-3/4">
          <video
            ref={videoRef}
            className="object-contain z-10"
            autoPlay
            loop
            muted={muted}
            playsInline
            preload="none"
          >
            <source
              src="https://github.com/abdullayevemil/tkta-front-end/releases/download/v1/home1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={toggleMute}
            className="
            absolute bottom-4 right-4 z-50
            bg-black/60 text-white 
            p-3 rounded-full 
            backdrop-blur 
            hover:bg-black/80 
            transition
          "
          >
            {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
          </button>
        </div>
      </div>

      <div className="w-full h-full flex items-start px-8 md:px-12 lg:px-16 pb-2 sm:pb-3 md:pb-4 justify-center">
        <div className="w-full h-fit flex flex-col gap-8 sm:gap-10 md:gap-12 items-center">
          <h2 className="text-textPrimary font-bold text-2xl sm:text-3xl md:text-4xl w-full justify-center text-center uppercase px-4">
            Xəbərlər
          </h2>

          <div className="w-full">
            <NewsCarousel news={news} />
          </div>
        </div>
      </div>
    </div>
  );
}
