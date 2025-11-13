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
    <Card className="w-full flex flex-col bg-transparent overflow-hidden">
      <div className="w-full">
        {headerimageurl ? (
          <Image
            src={headerimageurl}
            alt={`${title} image`}
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-t-xl"
          />
        ) : (
          <div className="flex items-center justify-center py-16 text-textPrimary text-2xl sm:text-3xl md:text-4xl">
            TKTA
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-1 sm:gap-1 md:gap-2 lg:gap-2 justify-between">
        <h3 className="font-bold text-sm sm:text-base line-clamp-2">{title}</h3>

        <div className="flex flex-row justify-between items-center">
          {note ? (
            <Badge
              variant="destructive"
              className="py-1 sm:py-1.5 text-xs sm:text-sm"
            >
              {note.length > 40 ? note.slice(0, 40) + "..." : note}
            </Badge>
          ) : (
            <div />
          )}

          <div className="text-xs text-textSecondary">
            {format(new Date(date.toString()), "dd-MM-yyyy")}
          </div>
        </div>
      </div>
    </Card>
  );
}
