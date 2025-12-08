import { reports } from "@/data/acccreditation_reports";
import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string; university: string }>;
}) {
  const { year, university } = await params;

  const report = reports
    .filter((report) => report.year === parseInt(year))
    .find(
      (report) => report.university.toLowerCase() === university.toLowerCase()
    );

  return (
      <div className="grid grid-cols-4 px-16 gap-6 w-full">
        {report ? (
          <Link
            key={report.id}
            target="_blank"
            rel="noopener noreferrer"
            href={report.link}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

              <span className="text-center text-textPrimary">
                {report.university}
              </span>
            </Card>
          </Link>
        ) : null}
      </div>
  );
}
