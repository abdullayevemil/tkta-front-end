import Folder from "@/assets/icons/reports/Folder.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AnnualReports() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        İllİk hesabatlar
      </h1>

      <div className="grid grid-cols-4 px-16 gap-6 w-full">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://tkta.edu.az/files/45/1/12/13/123/bülleten/İllik%20hesabat%20SON.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2024</span>
          </Card>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://tkta.edu.az/files/hesabat/2023%20illik%20hesabat/İllik%20Hesabat%202023%20cü%20il%20pdf%20versiya.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2023</span>
          </Card>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://tkta.edu.az/files/hesabat%20az.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2022</span>
          </Card>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://tkta.edu.az/files/TKTA-illik%20hesabat.pdf"
        >
          <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
            <Image src={Folder} alt="folder icon" width={120} height={120} />

            <span className="text-center text-textPrimary">2021</span>
          </Card>
        </Link>
      </div>
    </section>
  );
}
