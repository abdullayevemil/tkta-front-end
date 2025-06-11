import Link from "next/link";
import { Card } from "@/components/ui/card";
import LawIcon from "@/assets/icons/law/law.svg";

const laws = [
  {
    id: 1,
    link: "https://e-qanun.az/framework/20089",
    title:
      "Təhsil müəssisələrinin akkreditasiyası Qaydaları",
  },
];

export default function Laws() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
      Akkredİtasİya Qaydaları
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
