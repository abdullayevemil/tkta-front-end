import Image from "next/image";
import { Card } from "../ui/card";
import { Statistics } from "@/types/statistics";

export default function StatisticsCard({ name, number, iconUrl }: Statistics) {
  return (
    <Card className="flex flex-col gap-11 px-8 py-9 bg-textPrimary text-white w-full justify-center items-center">
      <Image unoptimized={process.env.NODE_ENV === "development"}src={iconUrl} alt={`${name} icon`} width={96} height={96} />

      <div className="flex flex-col gap-1">
        <h3 className="text-4xl text-center">{number}</h3>

        <div className="text-base text-center">{name}</div>
      </div>
    </Card>
  );
}
