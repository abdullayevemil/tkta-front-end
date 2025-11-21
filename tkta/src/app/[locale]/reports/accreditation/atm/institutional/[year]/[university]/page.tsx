import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export async function generateStaticParams() {
  const reports =
    await sql`SELECT * FROM institutional_accreditation_final_reports`;

  return reports.map((report) => ({
    university: report.university.toLowerCase(),
  }));
}

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string; university: string }>;
}) {
  const _params = await params;

  const university = decodeURIComponent(_params.university);

  const year = _params.year;

  const report = await sql`
  SELECT * FROM institutional_accreditation_final_reports
  WHERE year = ${year}
    AND LOWER(university) = LOWER(${university})
  `;

  const self_analysis = await sql`
  SELECT * FROM institutional_accreditation_self_analysis_reports
  WHERE year = ${year}
    AND LOWER(university) = LOWER(${university})
  `;

  const certificate = await sql`
  SELECT * FROM institutional_accreditation_certificates
  WHERE year = ${year}
    AND LOWER(university) = LOWER(${university})
  `;

  return (
    <div className="flex flex-row items-center justify-evenly px-16 gap-6 w-full">
      {report[0] ? (
        <Link
          className="w-1/4"
          target="_blank"
          rel="noopener noreferrer"
          href={report[0].link}
        >
          {report[0].imagelink ? (
            <Card className="h-[27.5rem] w-full p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image
                src={report[0].imagelink}
                alt="document preview"
                width={150}
                height={150}
                className="w-full max-h-[21.25rem] object-cover"
              />

              <span className="text-lg text-center text-textPrimary font-bold font-bold">
                Yekun Hesabat
              </span>
            </Card>
          ) : null}
        </Link>
      ) : null}

      {self_analysis[0] ? (
        <Link
          className="w-1/4"
          target="_blank"
          rel="noopener noreferrer"
          href={self_analysis[0].link}
        >
          {self_analysis[0].imagelink ? (
            <Card className="h-[27.5rem] p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image
                src={self_analysis[0].imagelink}
                alt="document preview"
                width={150}
                height={150}
                className="w-full max-h-[21.25rem] object-cover"
              />

              <span className="text-lg text-center text-textPrimary font-bold font-bold">
                Özünü Təhlil Hesabatı
              </span>
            </Card>
          ) : null}
        </Link>
      ) : null}

      {certificate[0] ? (
        <Link
          className="w-1/4"
          target="_blank"
          rel="noopener noreferrer"
          href={certificate[0].link}
        >
          {certificate[0].imagelink ? (
            <Card className="h-[26.25rem] p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image
                src={certificate[0].imagelink}
                alt="document preview"
                width={150}
                height={150}
                className="w-full max-h-[21.25rem] object-cover"
              />

              <span className="text-lg text-center text-textPrimary font-bold font-bold">
                Sertifikat
              </span>
            </Card>
          ) : null}
        </Link>
      ) : null}
    </div>
  );
}
