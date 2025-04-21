import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ATM() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-5xl text-center w-full px-[112px]">ATM Üzrə Akkredİtasİya Hesabatları</h1>
      
      <div className="flex flex-row justify-evenly px-16 gap-6 w-full">
        <Link href="/reports/accreditation/atm/institutional" className="w-1/4">
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">
              İnstitusional akkreditasiya hesabatları
            </span>
          </Card>
        </Link>

        <Link href="/reports/accreditation/atm/program" className="w-1/4">
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">
              Proqram akkreditasiya hesabatları
            </span>
          </Card>
        </Link>
      </div>
    </section>
  );
}
