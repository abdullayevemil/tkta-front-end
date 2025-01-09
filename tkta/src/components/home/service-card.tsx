import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";
import React from "react";
import { Service } from "@/types/service";

export default function ServiceCard({ iconUrl, name, url }: Service) {
  return (
    <Link href={`/${url}`}>
      <Card className="px-20 py-24 w-fit flex flex-col gap-8 items-center justify-center w-[430px] h-[430px] bg-textPrimary">
        <Image src={iconUrl} alt={`{name} icon`} width={72} height={72} />

        <h3 className="text-white text-xl font-bold">{name}</h3>
      </Card>
    </Link>
  );
}
