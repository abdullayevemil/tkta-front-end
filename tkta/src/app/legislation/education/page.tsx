import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/assets/images/law/header-image.png";
import { Card } from "@/components/ui/card";
import LawIcon from "@/assets/icons/law/law.svg";

const laws = [
  {
    id: 1,
    link: "https://e-qanun.az/framework/52566",
    title:
      "“Ali təhsil müəssisəsinin institusional akkreditasiyası üzrə qiymətləndirmə Meyarları” və “Ali təhsil müəssisəsinin proqram akkreditasiyası üzrə qiymətləndirmə Meyarları”",
  },
  {
    id: 2,
    link: "https://e-qanun.az/framework/58178",
    title:
      '"Peşə təhsili müəssisəsinin institusional akkreditasiyası üzrə qiymətləndirmə meyarları" və "Peşə təhsili müəssisəsinin proqram akkreditasiyası üzrə qiymətləndirmə meyarları"',
  },
];

export default function Laws() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        Elm və Təhsil Nazirliyinin qərarları
      </h1>

      <ul className="grid grid-cols-4 gap-4 px-16 justify-center items-center">
        {laws.map((law) => (
          <li key={law.id}>
            <Link
              className="hover:text-textPrimary"
              target="_blank"
              rel="noopener noreferrer"
              href={law.link}
            >
              <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-semibold hover:text-textPrimary text-base">
                <LawIcon width="30%" color="var(--primary-color)" />

                <div className="text-center">
                  <div className="line-clamp-4">{law.title}</div>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
