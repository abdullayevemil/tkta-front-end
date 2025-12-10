import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export async function generateStaticParams() {
  const universities = (
    await sql`
  SELECT DISTINCT u.title
  FROM international_universities u
  JOIN international_accreditation e
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
  params: Promise<{ university: string }>;
}) {
  const { university } = await params;

  console.log(decodeURIComponent(university))

  const reports: Report[] = await sql`
  SELECT 
  e.id,
  e.title,
  e.link,
  e.imageLink,
  e.year,
  u.title AS universityTitle
FROM international_accreditation e
JOIN international_universities u ON e.universityId = u.id
WHERE LOWER(u.title) = LOWER(${decodeURIComponent(university)});
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
              <div className="w-full h-[21.25rem] flex items-center justify-center overflow-hidden rounded-md">
                <Image
                  src={report.imagelink}
                  alt="document preview"
                  width={150}
                  height={150}
                  className="h-full w-auto"
                />
              </div>

              <span className="text-lg text-center text-textPrimary font-bold">
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
