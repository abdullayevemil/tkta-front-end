import Image from "next/image";
import HeaderImage from "@/assets/images/media/header-image.png";
import NewsCard from "@/components/home/news-card";
import Link from "next/link";
import sql from "@/lib/db";

export default async function News() {
  const news = await sql`SELECT * FROM news`;

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        XƏBƏRLƏR
      </h1>

      <ul className="grid grid-cols-3 gap-4 px-16">
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/media/news/${news.id}`}>
              <NewsCard
                id={news.id}
                title={news.title}
                creationDate={new Date(news.date).toISOString().split('T')[0]}
                note={news.note}
                content=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
