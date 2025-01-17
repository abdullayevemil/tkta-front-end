import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";

interface Props {
  name: string;
  imageUrl: string;
  url: string;
}

export default function LinkCard({ name, imageUrl, url }: Props) {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank"className="w-1/5 h-full">
      <Card className="flex flex-col items-center justify-evenly gap-3 p-6 h-full">
        <Image
          src={imageUrl}
          alt={`${name} logo`}
          width={90}
          height={90}
          className="h-[90px] w-auto object-contain"
        />

        <h3 className="text-textPrimary text-sm text-center">{name}</h3>
      </Card>
    </Link>
  );
}
