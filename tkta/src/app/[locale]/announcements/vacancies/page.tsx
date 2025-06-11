import NewsCard from "@/components/home/news-card";
import Link from "next/link";

const vacancies = [
  {
    id: 1,
    title:
      "TKTA Analitik təhlil şöbəsinin aparıcı məsləhətçisi vəzifəsi üzrə vakansiya elan edir",
    date: "2024-11-27",
  },
  {
    id: 2,
    title:
      "TKTA İnformasiya və insan resursları şöbəsinin aparıcı məsləhətçisi vəzifəsi üzrə vakansiya elan edir",
    date: "2024-11-27",
  },
  {
    id: 3,
    title:
      "TKTA Analitik təhlil şöbəsinin böyük məsləhətçisi vəzifəsi üzrə vakansiya elan edir",
    date: "2024-11-27",
  },
  {
    id: 4,
    title: "TKTA “məktəb inspektoru” vəzifəsi üzrə vakansiya elan edir",
    date: "2024-11-27",
  },
  {
    id: 5,
    title:
      "TKTA “Kvalifikasiyaların tanınması şöbəsinin aparıcı məsləhətçisi” vakansiyası elan edir",
    date: "2024-11-27",
  },
  {
    id: 6,
    title:
      "TKTA “Təlim və metodologiya şöbəsinin baş məsləhətçisi” vakansiyası elan edir",
    date: "2024-11-27",
  },
  {
    id: 7,
    title:
      "TKTA “Keyfiyyət təminatı departamentinin Analitik təhlil şöbəsinin böyük məsləhətçisi” vakansiyası elan edir",
    date: "2024-11-27",
  },
];

export default function Vacancies() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-5xl text-center w-full px-[112px] pt-16">
        VAKANSİYALAR
      </h1>

      <ul className="grid grid-cols-3 gap-4 px-16">
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <Link href={`/vacancies/${vacancy.id}`}>
              <NewsCard
                id={vacancy.id}
                title={vacancy.title}
                date={vacancy.date}
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
