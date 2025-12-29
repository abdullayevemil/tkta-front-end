import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AnnualReports() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-4xl text-center w-full px-4 md:px-16 pt-16">
        İllİk hesabatlar
      </h1>

      <div className="grid grid-cols-4 px-4 md:px-16 gap-6 w-full">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="/assets/reports/annual/2024.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2024</span>
          </Card>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="/assets/reports/annual/2023.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2023</span>
          </Card>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="/assets/reports/annual/2022.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2022</span>
          </Card>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="/assets/reports/annual/2021.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image unoptimized={process.env.NODE_ENV === "development"}src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2021</span>
          </Card>
        </Link>
      </div>
    </section>
  );
}
