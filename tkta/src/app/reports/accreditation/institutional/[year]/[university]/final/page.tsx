import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string; university: string }>;
}) {
  const { year, university } = await params;

  const report = await sql`
  SELECT * FROM institutional_accreditation_final_reports
  WHERE year = ${year}
    AND LOWER(university) = LOWER(${university})
  `;

  return (
    <div className="grid grid-cols-4 px-16 gap-6 w-full">
      {report ? (
        <Link target="_blank" rel="noopener noreferrer" href={report[0].link}>
          {report[0].imagelink ? (
            <Card className="p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image
                src={report[0].imagelink}
                alt="document preview"
                width={150}
                height={150}
                className="w-full"
              />
            </Card>
          ) : (
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image src={Folder} alt="folder icon" width={120} height={120} />

              <span className="text-center text-textPrimary">
                {report[0].university}
              </span>
            </Card>
          )}
        </Link>
      ) : null}
    </div>
  );
}
