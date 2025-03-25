import { reports } from "@/data/acccreditation_reports";
import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const types = [
  {
    title: "Özünütəhlil hesabatı",
    link: "self-analysis",
  },
  {
    title: "Yekun hesabat",
    link: "final",
  },
  {
    title: "Şəhadətnamə",
    link: "diploma",
  },
];

export async function generateParams() {
  return reports.map((report) => ({
    university: report.university.toLowerCase(),
  }));
}

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string; university: string }>;
}) {
  const { year, university } = await params;

  return (
      <div className="grid grid-cols-4 px-16 gap-6 w-full">
        {types.map((type, index) => (
          <Link
            key={index}
            href={`/reports/accreditation/institutional/${year}/${university}/${type.link}`}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image src={Folder} alt="folder icon" width={120} height={120} />

              <span className="text-center text-textPrimary">{type.title}</span>
            </Card>
          </Link>
        ))}
      </div>
  );
}
