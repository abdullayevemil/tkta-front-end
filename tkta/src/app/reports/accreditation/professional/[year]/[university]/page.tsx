import { reports } from "@/data/acccreditation_reports";
import FooterIcon from "@/assets/icons/reports/Folder.svg";
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

export async function generateStaticParams() {
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
      <div className="grid grid-cols-4 px-16 gap-6">
        {types.map((type, index) => (
          <Link
            key={index}
            href={`/reports/accreditation/professional/${year}/${university}/${type.link}`}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <FooterIcon width="30%" color="var(--primary-color)" />

              <span className="text-center text-textPrimary">{type.title}</span>
            </Card>
          </Link>
        ))}
      </div>
  );
}
