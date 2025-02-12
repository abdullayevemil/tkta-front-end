import { reports } from "@/data/acccreditation_reports";
import FooterIcon from "@/assets/icons/reports/Folder.svg";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/assets/images/reports/header-image.png";

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

  const filteredReports = reports.filter(
    (report) => report.year === parseInt(year)
  );

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Peşə təhsİl üzrə hesabatlar
      </h1>

      <div className="grid grid-cols-4 px-16 gap-6">
        {filteredReports.map((report) => (
          <Link
            key={report.id}
            target="_blank"
            rel="noopener noreferrer"
            href={report.link}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <FooterIcon width="30%" color="var(--primary-color)" />

              <span className="text-center text-textPrimary">
                {report.university}
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
