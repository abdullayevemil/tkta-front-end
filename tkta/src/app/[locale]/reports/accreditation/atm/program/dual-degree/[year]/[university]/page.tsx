import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export async function generateStaticParams() {
  const universities = (
    await sql`
  SELECT DISTINCT u.title
  FROM universities u
  JOIN dual_degree_program_accreditation e
    ON u.id = e.universityId;
`
  ).map((row) => row.title);

  return universities.map((university) => ({
    university: university.toLowerCase(),
  }));
}

interface Report {
  id: number;
  title: string;
  link: string;
  imagelink: string;
  year: string;
  universityTitle: string;
}

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string; university: string }>;
}) {
  const { year, university } = await params;

  const reports: Report[] = await sql`
  SELECT 
  e.id,
  e.title,
  e.link,
  e.imageLink,
  e.year,
  u.title AS universityTitle
FROM dual_degree_program_accreditation e
JOIN universities u ON e.universityId = u.id
WHERE e.year = ${year} AND LOWER(u.title) = LOWER(${university});
`;

  return (
    <div className="grid grid-cols-4 items-center justify-evenly px-4 md:px-16 gap-6 w-full">
      {reports
        ? reports.map((report, index) => (
            <Link
              key={index}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
              href={report.link}
            >
              {report.imagelink ? (
                <Card className="h-[27.5rem] w-full p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
                  <Image
                    src={report.imagelink}
                    alt="document preview"
                    width={150}
                    height={150}
                    className="w-full max-h-[21.25rem] object-cover"
                  />

                  <span className="text-lg text-center text-textPrimary font-bold font-bold">
                    {report.title}
                  </span>
                </Card>
              ) : null}
            </Link>
          ))
        : null}
    </div>
  );
}
