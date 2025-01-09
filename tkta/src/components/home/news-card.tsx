import { News } from "@/types/news";
import { Card } from "../ui/card";
import Image from "next/image";

export default function NewsCard({ title, creationDate, imageUrl }: News) {
  return (
    <Card className="w-full flex flex-col">
      <div className="h-3/5 w-full">
        {imageUrl ? <Image src={imageUrl} alt={`${title} image`} width={40} height={40} className="w-full"/> : <div className="flex items-center justify-center text-textPrimary text-6xl pt-20 pb-12">TKTA</div>}
      </div>

      <div className="p-6 flex flex-col gap-7">
        <h3 className="font-bold text-base line-clamp-2">{title}</h3>

        <div className="text-xs text-textSecondary">{creationDate}</div>
      </div>
    </Card>
  );
}
