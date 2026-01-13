import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export async function generateStaticParams() {
  const reports = await sql`SELECT * FROM bulletins`;

  return reports.map((report) => ({
    year: report.year.toString(),
  }));
}

export default async function Bulletins({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  const reports = await sql`SELECT * FROM bulletins WHERE year = ${year} ORDER BY quarter DESC`;

  return (
    <div className="grid grid-cols-4 px-4 md:px-16 gap-6 w-full">
      {reports.map((report, index) => (
        <Link key={index} href={report.url}>
          <Card className="h-[27.5rem] w-full p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <div className="w-full h-[21.25rem] flex items-center justify-center overflow-hidden rounded-md">
              <Image
                src={report.previewurl}
                alt="document preview"
                width={150}
                height={150}
                className="h-full w-auto"
              />
            </div>

            <span className="text-lg text-center text-textPrimary font-bold">
              {report.name}
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
