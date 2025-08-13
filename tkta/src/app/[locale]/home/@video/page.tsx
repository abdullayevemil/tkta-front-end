import NewsCarousel from "@/components/home/news-carousel";
import sql from "@/lib/db";
import { News } from "@/types/news";

export default async function Video() {
  const news: News[] = await sql`SELECT * FROM news ORDER BY date DESC LIMIT 5`;

  return (
    <div className="w-full relative">
      <video className="w-full" autoPlay={true} muted loop preload="none">
        <source
          src="https://miras.blob.core.windows.net/multimedia/Let%20s%20Talk%20About%20Education%20(online-video-cutter.com)-2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex items-start pb-2 sm:pb-3 md:pb-4 justify-center">
        <div className="w-full border-4 sm:border-6 md:border-8 border-goldBorderColor border-solid border-x-4 sm:border-x-6 md:border-x-8 h-fit">
          <div className="w-full border-[3px] sm:border-[4px] md:border-[6px] border-goldBorderColor border-dashed border-x-0">
            <NewsCarousel news={news} />
          </div>
        </div>
      </div>
    </div>
  );
}
