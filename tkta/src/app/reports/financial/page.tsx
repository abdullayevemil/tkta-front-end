import FooterIcon from "@/assets/icons/reports/Folder.svg";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AnnualReports() {
  return (
    <section className="px-16 grid grid-cols-4 gap-4 items-center">
      <Link target="_blank" rel="noopener noreferrer" href="">
        <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
          <FooterIcon width="30%" color="var(--primary-color)" />

          <span className="text-center text-textPrimary">2024</span>
        </Card>
      </Link>

      <Link target="_blank" rel="noopener noreferrer" href="https://tkta.edu.az/files/marsol/forum/qfitt/aylıq/t%27lim/Audit%20r%C9%99yi%202023%20%28sayt%20üçün%29.pdf">
        <Card className="p-6 py-20 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
          <FooterIcon width="30%" color="var(--primary-color)" />

          <span className="text-center text-textPrimary">2023</span>
        </Card>
      </Link>
    </section>
  );
}
