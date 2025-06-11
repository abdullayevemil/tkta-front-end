import NewsCard from "@/components/home/news-card";
import Link from "next/link";

const vacancies = [
  {
    id: 1,
    title:
      "TKTA “Peşə təhsili müəssisələrinin akkreditasiya prosesində iştirak edəcək ekspertlərin hazırlanması” təlimlərinə başlayır",
    date: "2024-11-27",
  },
  {
    id: 2,
    title:
      "Təhsildə Keyfiyyət Təminatı Agentliyi işəgötürənləri əməkdaşlığa dəvət edir",
    date: "2024-11-27",
  },
  {
    id: 3,
    title:
      "Qiymətləndirmə və tanınma prosesində iştirak edəcək ekspertlərin seçimi davam edir",
    date: "2024-11-27",
  },
  {
    id: 4,
    title:
      "Akkreditasiya prosesində iştirak edəcək magistratura və ya doktorantura səviyyəsi üzrə təhsilalanların seçiminə start verilib",
    date: "2024-11-27",
  },
  {
    id: 5,
    title:
      "Qiymətləndirmə və tanınma prosesində iştirak edəcək ekspertlərin seçimi davam edir",
    date: "2024-11-27",
  },
  {
    id: 6,
    title:
      "Akkreditasiya proseslərində iştirak edəcək ekspertlərin seçimi davam edir",
    date: "2024-11-27",
  },
  {
    id: 7,
    title:
      "TKTA müəssisə rəhbərlərini və müəssisələrin kadr seçimində əhəmiyyətli rolu olan mütəxəssisləri əmək bazarının təhlili prosesində iştirak etməyə dəvət edir",
    date: "2024-11-27",
  },
  {
    id: 8,
    title: "TKTA ali təhsil müəssisələrini sorğuda iştirak etməyə dəvət edir",
    date: "2024-11-27",
  },
  {
    id: 9,
    title:
      "Təhsildə Keyfiyyət Təminatı Agentliyi akkreditasiya proseslərinə keyfiyyət təminatı üzrə ekspertlər dəvət edir",
    date: "2024-11-27",
  },
  {
    id: 10,
    title:
      "TKTA işəgötürənləri peşə təhsili üzrə sorğuda iştirak etməyə dəvət edir",
    date: "2024-11-27",
  },
];

export default function Cooperation() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        ƏMƏKDAŞLIQ İMKANLARI
      </h1>

      <ul className="grid grid-cols-3 gap-4 px-16">
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <Link href={`/cooperation/${vacancy.id}`}>
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
