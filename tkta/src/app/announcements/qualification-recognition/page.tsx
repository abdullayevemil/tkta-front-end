import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import NewsCard from "@/components/home/news-card";
import Link from "next/link";

const vacancies = [
  {
    id: 1,
    title: "TKTA daha 5 peşə ixtisası üzrə müraciətlərin qəbulunu elan edir",
    date: "2024-11-27",
  },
  {
    id: 2,
    title:
      "Peşə tanınması üzrə imtahanda iştirak edəcək xarici ölkələrdə ali təhsil almış şəxslərin nəzərinə!",
    date: "2024-11-27",
  },
  {
    id: 3,
    title:
      "TKTA “Zərgər” peşə ixtisasının tanınması üzrə sənəd qəbulu elan edir",
    date: "2024-11-27",
  },
  {
    id: 4,
    title:
      "TKTA “plastik boru qaynaqçısı” peşə ixtisasının tanınması üzrə sənəd qəbulu elan edir",
    date: "2024-11-27",
  },
  {
    id: 5,
    title:
      "TKTA “dərzi” peşə ixtisasının tanınması üzrə sənəd qəbulu elan edir",
    date: "2024-11-27",
  },
  {
    id: 6,
    title:
      "TKTA “əməliyyatçı-mühasib” peşə ixtisasının tanınması üzrə sənəd qəbulu elan edir",
    date: "2024-11-27",
  },
  {
    id: 7,
    title: "TKTA “Dayə” peşə ixtisasının tanınması üzrə sənəd qəbulu elan edir",
    date: "2024-11-27",
  },
  {
    id: 8,
    title:
      "TKTA “Kənd təsərrüfatı, Balıq və Meşə Təsərrüfatı” peşə istiqaməti üzrə mütəxəssisləri ekspert qismində fəaliyyət göstərməyə dəvət edir",
    date: "2024-11-27",
  },
  {
    id: 9,
    title:
      "TKTA 7 peşə ixtisası üzrə qeyri-formal və informal yollarla əldə edilmiş bilik və bacarıqların qiymətləndirilməsi və tanınması məqsədilə imtahan elan edir",
    date: "2024-11-27",
  },
  {
    id: 10,
    title:
      "Daha 4 peşə ixtisası üzrə qeyri-formal və informal yollarla əldə edilmiş bilik, bacarıq, səriştə və təcrübələrin qiymətləndirilməsi həyata keçiriləcək",
    date: "2024-11-27",
  },
  {
    id: 11,
    title: "“Plastik boru qaynaqçısı” ixtisası üzrə imtahan elan edilir.",
    date: "2024-11-27",
  },
];

export default function EducationRecognition() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        PEŞƏ İXTİSASININ TANINMASI ÜZRƏ SƏNƏD QƏBULU
      </h1>

      <ul className="grid grid-cols-3 gap-4 px-16">
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <Link href={`/qualification-recognition/${vacancy.id}`}>
              <NewsCard
                id={vacancy.id}
                title={vacancy.title}
                creationDate={vacancy.date}
                content=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
