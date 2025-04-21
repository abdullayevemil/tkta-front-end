import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analysis() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Analİtİk təhlİl
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-[112px] flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="general-information"
          >
            Ümumi məlumat
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="thematic-analysis"
          >
            Tematik təhlil
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="data-analysis"
          >
            Data analizi
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="projects"
          >
            Layihələr
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general-information"></TabsContent>
        
        <TabsContent value="thematic-analysis"></TabsContent>
        
        <TabsContent value="data-analysis"></TabsContent>
        
        <TabsContent value="projects"></TabsContent>
      </Tabs>
    </section>
  );
}
