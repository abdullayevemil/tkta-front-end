import { Card } from "@/components/ui/card";
import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import Link from "next/link";

export default function AnnualReports() {
  return (
      <div className="flex flex-row justify-evenly px-16 gap-6 w-full w-full">
        <Link href="/reports/accreditation/program/double-diploma" className="w-1/4">
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">İkili diplom proqramları üzrə</span>
          </Card>
        </Link>

        <Link href="/reports/accreditation/program/school-teaching" className="w-1/4">
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">İbtidai sinif müəllimliyi ixtisası üzrə</span>
          </Card>
        </Link>
      </div>
  );
}
