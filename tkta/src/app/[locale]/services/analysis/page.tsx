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

        <TabsContent
          value="general-information"
          className="flex flex-col gap-4"
        >
          <div className="text-justify tracking-wide leading-7 text-base">
            Analitik Təhlil Şöbəsi Təhsildə Keyfiyyət Təminatı Agentliyinin
            struktur bölmələrindən biri olaraq elm və təhsil sahəsində
            araşdırmaların aparılması, təhlil və monitorinqlərin təşkili,
            analitik hesabatların hazırlanması və Agentliyin daxili keyfiyyət
            təminatının həyata keçirilməsi istiqamətində fəaliyyət göstərir.
            Şöbə, təhsil müəssisələrinin fəaliyyətinə dair məlumatların
            toplanması və təhlili əsasında inkişaf yönümlü təkliflərin
            hazırlanmasını, eləcə də bu sahədə beynəlxalq təcrübənin öyrənilərək
            tətbiqinə dair təşəbbüslərin irəli sürülməsini təmin edir.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            Şöbə həmçinin Agentliyin bütün fəaliyyət istiqamətləri üzrə
            monitorinqlərin aparılmasını, əldə olunan nəticələrin təhlil
            edilərək dövri hesabatlara çevrilməsini və aidiyyəti üzrə təqdim
            olunmasını həyata keçirir. Təhsil müəssisələrinin fəaliyyətinə dair
            reytinq və proqnoz göstəricilərinin hazırlanması, bu məlumatların
            ictimaiyyətə açıqlanması, akkreditasiya proseslərində təqdim edilən
            tövsiyələrin icrasına dair monitorinqlərin təşkili də şöbənin əsas
            vəzifələri sırasındadır. Şöbə öz fəaliyyətində Azərbaycan
            Respublikasının qanunvericiliyini, dövlət başçısının və Nazirlər
            Kabinetinin normativ hüquqi aktlarını, həmçinin Agentliyin
            Nizamnaməsini və daxili normativ sənədləri rəhbər tutur.
          </div>
        </TabsContent>

        <TabsContent value="thematic-analysis"></TabsContent>

        <TabsContent value="data-analysis"></TabsContent>

        <TabsContent value="projects"></TabsContent>
      </Tabs>
    </section>
  );
}
