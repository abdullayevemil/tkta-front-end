import { Card } from "../ui/card";
import Image from "next/image";
import { format } from "date-fns";
import { Badge } from "../ui/badge";

interface Props {
  href: string;
  id: number;
  title: string;
  content: string;
  headerimageurl?: string;
  date: string;
  note?: string;
}

export default function NewsCard({ title, date, headerimageurl, note }: Props) {
  return (
    <Card className="w-full h-full flex flex-col bg-transparent">
      <div className="h-3/5 w-full h-[16rem]">
        {headerimageurl ? (
          <Image
            src={headerimageurl}
            alt={`${title} image`}
            width={400}
            height={400}
            className="w-full object-cover rounded-t-xl h-full max-w-full"
          />
        ) : (
          <div className="flex items-center h-[16rem] justify-center text-textPrimary text-4xl">
            TKTA
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-7 justify-between h-2/5">
        <h3 className="font-bold text-base line-clamp-2">{title}</h3>

        <div className="flex flex-row justify-between items-center">
          {note ? (
            <Badge variant="destructive" className="py-1.5">{note}</Badge>
          ) : (
            <div></div>
          )}

          <div className="text-xs text-textSecondary">
            {format(new Date(date.toString()), "dd-MM-yyyy")}
          </div>
        </div>
      </div>
    </Card>
  );
}
