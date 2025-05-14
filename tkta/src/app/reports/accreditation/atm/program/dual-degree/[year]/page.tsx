import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import sql from "@/lib/db";

export async function generateStaticParams() {
  const years = await sql`SELECT DISTINCT year
FROM dual_degree_program_accreditation
ORDER BY year DESC;
`;

  return years.map((year) => ({
    year: year.year.toString(),
  }));
}

export default async function Accreditations({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  const universities = (await sql`
  SELECT DISTINCT u.title
  FROM universities u
  JOIN dual_degree_program_accreditation e
    ON u.id = e.universityId;
`).map(row => row.title);

  return (
    <div className="grid grid-cols-4 px-16 gap-6 w-full">
      {universities
        .map((university, index) => (
          <Link
            key={index}
            href={`/reports/accreditation/atm/program/dual-degree/${year}/${university.toLowerCase()}`}
          >
            <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
              <Image src={Folder} alt="folder icon" width={120} height={120} />

              <span className="text-center text-textPrimary">
                {university.toString()}
              </span>
            </Card>
          </Link>
        ))}
    </div>
  );
}
