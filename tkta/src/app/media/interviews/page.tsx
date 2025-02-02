import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import NewsCard from "@/components/home/news-card";
import Link from "next/link";

const news = [
  {
    id: 1,
    title:
      'Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə Heyətinin sədri Tural Əhmədov İctimai televiziyada efirə gedən "Sabahın xeyir, Azərbaycan" verilişinin qonağı olub',
    date: "2024-11-27",
  },
  {
    id: 2,
    title: "TKTA-da keçirilən brifinq Baku TV-də canlı yayımlanıb",
    date: "2024-11-27",
  },
];

export default function News() {
  
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        Müsahibələr
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
