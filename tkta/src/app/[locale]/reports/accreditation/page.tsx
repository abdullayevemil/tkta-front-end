import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AnnualReports() {
  return (
      <div className="grid grid-cols-4 px-16 gap-6 w-full">
        <Link href="/reports/accreditation/2024">
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2024</span>
          </Card>
        </Link>

        <Link href="/reports/accreditation/2023">
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2023</span>
          </Card>
        </Link>
      </div>
  );
}
