import Image from "next/image";
import { Card } from "@/components/ui/card";
import Folder from "@/assets/icons/reports/Folder.png";
import Link from "next/link";
import sql from "@/lib/db";

type BulletinYear = {
  year: number;
};

export default async function Bulletins() {
  const years = await sql<BulletinYear[]>`
    SELECT DISTINCT year
    FROM bulletins
    ORDER BY year DESC;
  `;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-4 md:px-16 gap-6 w-full">
      {years.map(({ year }) => (
        <Link
          key={year}
          href={`/media/bulletins/${year}`}
          aria-label={`Bulletins for year ${year}`}
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center transition hover:cursor-pointer hover:font-bold">
            <Image
              src={Folder}
              alt="Folder icon"
              width={120}
              height={120}
              priority={false}
            />

            <span className="text-center text-textPrimary">{year}</span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
