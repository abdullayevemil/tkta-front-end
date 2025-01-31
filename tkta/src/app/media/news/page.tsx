import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import NewsCard from "@/components/home/news-card";
import Link from "next/link";

const news = [
  {
    id: 1,
    title:
      "Təhsildə Keyfiyyət Təminatı Agentliyi ekspert seçimlərini davam etdirir",
    date: "2024-11-27",
  },
  {
    id: 2,
    title:
      "Bakı Biznes Universitetinə institusional akkreditasiya şəhadətnaməsi təqdim edilib",
    date: "2024-11-27",
  },
  {
    id: 3,
    title:
      "Qərbi Kaspi Universitetinə institusional akkreditasiya şəhadətnaməsi təqdim edilib",
    date: "2024-11-27",
  },
  {
    id: 4,
    title: "ATMU-ya “İnstitusional Akkreditasiya Şəhadətnaməsi” təqdim edilib",
    date: "2024-11-27",
  },
  {
    id: 5,
    title:
      "Təhsildə Keyfiyyət Təminatı Agentliyi ADNSU-ya akkreditasiya şəhadətnaməsi təqdim edib",
    date: "2024-11-27",
  },
  {
    id: 6,
    title:
      "Təhsildə Keyfiyyət Təminatı Agentliyi və “YAŞAT” Fondu arasında görüş keçirilib.",
    date: "2024-11-27",
  },
  {
    id: 7,
    title:
      "“Mühafizəçi”, “Kompüter operatoru” və “Poliqrafiya üzrə dizayner” peşə ixtisasları üzrə bacarıqların qiymətləndirilməsi həyata keçirilib",
    date: "2024-11-27",
  },
  {
    id: 8,
    title:
      "“İnşaat ustası” peşə ixtisası üzrə praktik imtahan həyata keçirilib",
    date: "2024-11-27",
  },
  {
    id: 9,
    title: "Təhsildə Keyfiyyət Təminatı Agentliyində brifinq təşkil edilib",
    date: "2024-11-27",
  },
  {
    id: 10,
    title:
      'TKTA və BANM təşkilatçılığı ilə "Keyfiyyətli Təhsil: Müasir Çağırışlar" Forumu keçirilib',
    date: "2024-11-27",
  },
];

export default function News() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        XƏBƏRLƏR
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
