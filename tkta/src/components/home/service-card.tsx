import { Card } from "../ui/card";
import AccreditationIcon from "@/assets/icons/accreditation.svg";
import QualificationIcon from "@/assets/icons/qualification.svg";
import Link from "next/link";
import React from "react";

const icons = [AccreditationIcon, QualificationIcon];

interface Props {
  iconIndex: number;
  name: string;
  url: string;
}

export default function ServiceCard({ iconIndex, name, url }: Props) {
  return (
    <Link href={`/${url}`}>
      <Card className="px-20 py-24 w-fit flex flex-col gap-8 items-center justify-center w-[430px] h-[430px]">
        {React.createElement(icons[iconIndex], {
          color: "var(--primary-color)",
          width: "72px",
          height: "72px",
        })}

        <div className="text-textPrimary text-xl font-bold">{name}</div>
      </Card>
    </Link>
  );
}
