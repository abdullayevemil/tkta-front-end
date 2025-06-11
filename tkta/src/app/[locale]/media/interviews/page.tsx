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
      

      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        Müsahİbələr
      </h1>

      <ul className="grid grid-cols-3 gap-4 px-16">
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/cooperation/${news.id}`}>
              <NewsCard
                id={news.id}
                title={news.title}
                date={news.date}
                href=""
                content=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
