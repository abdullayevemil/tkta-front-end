import NewsCarousel from "@/components/home/news-carousel";
import sql from "@/lib/db";
import { News } from "@/types/news";

export default async function Video() {
  const news: News[] = await sql`SELECT * FROM news ORDER BY date DESC LIMIT 5`;

  return (
    <div className="w-full relative">
      <video className="w-full" autoPlay={true} muted loop preload="none">
        <source
          src=""
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex items-start pb-2 sm:pb-3 md:pb-4 justify-center">
        <div className="w-full h-fit">
          <div className="w-full">
            <NewsCarousel news={news} />
          </div>
        </div>
      </div>
    </div>
  );
}
