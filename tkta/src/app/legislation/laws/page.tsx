import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/assets/images/law/header-image.png";
import { Card } from "@/components/ui/card";
import LawIcon from "@/assets/icons/law/law.svg";

const laws = [
  {
    id: 1,
    link: "https://e-qanun.az/framework/18343",
    title: '"Təhsil haqqında" Azərbaycan Respublikasının Qanunu',
  },
  {
    id: 2,
    link: "https://e-qanun.az/framework/31994",
    title: '"Publik hüquqi şəxslər haqqında" Azərbaycan Respublikasının Qanunu',
  },
  {
    id: 3,
    link: "https://e-qanun.az/framework/2860",
    title: '"Dövlət rüsumu haqqında" Azərbaycan Respublikasının Qanunu',
  },
  {
    id: 4,
    link: "https://e-qanun.az/framework/11254",
    title: '"İnzibati icraat haqqında" Azərbaycan Respublikasının Qanunu',
  },
];

export default function Laws() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        Qanunlar
      </h1>

      <ul className="grid grid-cols-4 gap-4 px-16">
        {laws.map((law) => (
          <li key={law.id}>
            <Link className="hover:text-textPrimary" target="_blank" rel="noopener noreferrer" href={law.link}>
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-semibold hover:text-textPrimary text-base">
                <LawIcon width="30%" color="var(--primary-color)" />

                <div className="line-clamp-4 text-center">{law.title}</div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
