import NewsCarousel from "@/components/home/news-carousel";
import sql from "@/lib/db";
import { News } from "@/types/news";

export default async function Video() {
  const news: News[] = await sql`SELECT * FROM news ORDER BY date DESC LIMIT 5`;

  return (
    <div className="w-full relative flex flex-col gap-24">
      <video
        className="w-full object-contain z-10"
        autoPlay
        loop
        muted
        preload="none"
      >
        <source src="https://github.com/abdullayevemil/tkta-front-end/releases/download/v1/home1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full flex items-start px-16 pb-2 sm:pb-3 md:pb-4 justify-center">
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
