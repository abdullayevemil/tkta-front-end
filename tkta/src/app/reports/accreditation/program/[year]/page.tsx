import { reports } from "@/data/acccreditation_reports";
import FooterIcon from "@/assets/icons/reports/Folder.svg";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/assets/images/reports/header-image.png";

const types = [
  {
    title: "Özünütəhlil",
    link: "self-analysis",
  },
  {
    title: "Yekun hesabat",
    link: "final",
  },
  {
    title: "Şəhadətnamə",
    link: "diploma",
  }
]

export async function generateStaticParams() {
  return reports.map((report) => ({
    year: report.year.toString(),
  }));
}

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        ATMlərİn Proqram akkredİtasİya hesabatları
      </h1>

      <div className="grid grid-cols-4 px-16 gap-6">
        {types.map((type, index) => (
          <Link
            key={index}
            href={`/reports/accreditation/program/${year}/${type.link}`}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <FooterIcon width="30%" color="var(--primary-color)" />

              <span className="text-center text-textPrimary">
                {type.title}
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
