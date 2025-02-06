import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/assets/images/law/header-image.png";
import { Card } from "@/components/ui/card";
import LawIcon from "@/assets/icons/law/law.svg";

const laws = [
  {
    id: 1,
    link: "https://e-qanun.az/framework/47272",
    title:
      "“Xarici dövlətlərin xarici təhsilə aid kvalifikasiyalarının tanınması xidmətləri ilə əlaqədar digər xidmətlərin siyahısı və göstərilən xidmətlərə görə ödəniləcək haqların məbləği”",
  },
  {
    id: 2,
    link: "https://e-qanun.az/framework/20089",
    title:
      "Azərbaycan Respublikası Nazirlər Kabinetinin 2010-cu il 28 sentyabr tarixli, 167 nömrəli qərarı ilə “Təhsil müəssisələrinin akkreditasiyası Qaydaları”",
  },
  {
    id: 3,
    link: "https://e-qanun.az/framework/45613",
    title: 'Azərbaycan Respublikası Nazirlər Kabinetinin 2020-ci il 5 avqust tarixli 279 nömrəli Qərarı ilə təsdiq edilmiş “Vətəndaşların peşə təhsili üzrə qeyri-formal və informal təhsil formaları vasitəsilə əldə etdikləri bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması məqsədilə imtahanın keçirilməsi və onlara peşə ixtisasını təsdiq edən sənədin verilməsi Qaydası”',
  },
];

export default function Laws() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
      AR Nazİrlər Kabİnetİnİn qərarları
      </h1>

      <ul className="grid grid-cols-4 gap-4 px-16">
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
