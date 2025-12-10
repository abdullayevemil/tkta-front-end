import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export async function generateStaticParams() {
  const reports = await sql`SELECT * FROM activity_plan`;

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

  const reports =
    await sql`SELECT * FROM monitoring_reports WHERE year = ${year} AND LOWER(university) = LOWER(${decodeURIComponent(
      university
    )})`;

  const plans =
    await sql`SELECT * FROM activity_plan WHERE year = ${year} AND LOWER(university) = LOWER(${decodeURIComponent(
      university
    )})`;

  return (
    <div className="flex flex-row items-center justify-evenly px-4 md:px16 gap-6 w-full">
      {reports[0] ? (
        <Link
          className="w-1/4"
          target="_blank"
          rel="noopener noreferrer"
          href={reports[0].link}
        >
          {reports[0].imagelink ? (
            <Card className="h-[27.5rem] w-full p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image
                src={reports[0].imagelink}
                alt="document preview"
                width={150}
                height={150}
                className="w-full max-h-[21.25rem] object-cover"
              />

              <span className="text-lg text-center text-textPrimary font-bold font-bold">
                Monitorinq Hesabatı
              </span>
            </Card>
          ) : null}
        </Link>
      ) : null}

      {plans[0] ? (
        <Link
          className="w-1/4"
          target="_blank"
          rel="noopener noreferrer"
          href={plans[0].link}
        >
          {plans[0].imagelink ? (
            <Card className="h-[27.5rem] p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image
                src={plans[0].imagelink}
                alt="document preview"
                width={150}
                height={150}
                className="w-full max-h-[21.25rem] object-cover"
              />

              <span className="text-lg text-center text-textPrimary font-bold font-bold">
                Fəaliyyət Planı
              </span>
            </Card>
          ) : null}
        </Link>
      ) : null}
    </div>
  );
}
