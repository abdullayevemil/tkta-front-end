import Image from "next/image";

export default function ImagePreviewer({ imageUrl }: { imageUrl: string }) {
  return (
    <>
      <Image
        src={imageUrl}
        alt="news image"
        width={600}
        height={600}
        className="w-full h-auto rounded-xl object-cover cursor-pointer hover:opacity-90 transition"
      />
    </>
  );
}
