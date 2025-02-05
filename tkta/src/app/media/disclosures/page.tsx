import Image from "next/image";
import HeaderImage from "@/assets/images/media/header-image.png";
import NewsCard from "@/components/home/news-card";
import Link from "next/link";

const news = [
  {
    id: 1,
    title:
      'Dekabr ayı üçün tanınma üzrə müraciətlərin statistikası',
    date: "2024-11-27",
  },
  {
    id: 2,
    title:
      "Qeyri-formal və informal təhsilin tanınması üzrə ötən il TKTA tərəfindən görülən işlərə dair RELİZ",
    date: "2024-11-27",
  },
];

export default function News() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
      Açıqlamalar
      </h1>

      <ul className="grid grid-cols-3 gap-4 px-16">
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/cooperation/${news.id}`}>
              <NewsCard
                id={news.id}
                title={news.title}
                creationDate={news.date}
                content=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
