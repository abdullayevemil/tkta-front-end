import Image from "next/image";
import HeaderImage from "@/assets/images/internationalization/header-image.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Iternationalization() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Beynəlmİləlləşmə
      </h1>

      <Tabs
        defaultValue="international-events"
        className="w-full px-[112px] flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="international-events"
          >
            Xarici tədbirlər
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="employee-exchange"
          >
            Heyyətin mübadiləsi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="international-events"></TabsContent>

        <TabsContent value="employee-exchange"></TabsContent>
      </Tabs>
    </section>
  );
}
