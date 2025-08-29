import Image from "next/image";
import StructureImage from "@/assets/images/structure/structure.jpeg";

export default function Structure() {
  return (
    <Image
      src={StructureImage}
      alt="Agency Structure"
      width={800}
      height={600}
      priority
      className="w-full h-auto"
    ></Image>
  );
}
