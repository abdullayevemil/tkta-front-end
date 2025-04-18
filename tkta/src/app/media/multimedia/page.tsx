import Image from "next/image";
import HeaderImage from "@/assets/images/media/header-image.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function News() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Multİmedİa
      </h1>

      <Tabs
        defaultValue="photo-gallery"
        className="w-full px-[112px] flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="photo-gallery"
          >
            Foto qalereya
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="video-gallery"
          >
            Video qalereya
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photo-gallery"></TabsContent>

        <TabsContent value="video-gallery"></TabsContent>
      </Tabs>
    </section>
  );
}
