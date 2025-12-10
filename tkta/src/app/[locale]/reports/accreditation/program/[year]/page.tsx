import { reports } from "@/data/acccreditation_reports";
import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

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
      <div className="grid grid-cols-4 px-4 md:px16 gap-6 w-full">
        {reports.filter(report => report.year === Number(year)).map((report, index) => (
          <Link
            key={index}
            href={`/reports/accreditation/program/${year}/${report.university.toLowerCase()}`}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

              <span className="text-center text-textPrimary">{report.university}</span>
            </Card>
          </Link>
        ))}
      </div>
  );
}
