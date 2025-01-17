import LinkCard from "@/components/home/link-card";

export default function ExternalWebsites() {
  return (
    <div className="flex flex-col gap-20 w-full items-end px-16 pt-20">
      <div className="flex flex-row w-full justify-between items-center h-[240px] gap-6">
        <LinkCard
          name="Azərbaycanda fəaliyyət göstərən Ali Təhsil müəssisələri"
          imageUrl="https://tkta.edu.az/files/Az%C9%99rbaycan%20Universitetl%C9%99ri/Doc1%20(1).jpg"
          url="https://tkta.edu.az/files/NewFolder%208/NewFolder/NewFolder/dsds.pdf"
        />

        <LinkCard
          name="AZƏRBAYCAN RESPUBLİKASININ PREZİDENTİ"
          imageUrl="https://tkta.edu.az/files/thumbnail_gerb%201.png"
          url="https://prezident.az"
        />

        <LinkCard
          name="Heydər Əliyev Mərkəzi"
          imageUrl="https://www.tkta.edu.az/files/thumbnail_HA_center.png"
          url="https://heydaraliyevcenter.az"
        />

        <LinkCard
          name="Azərbaycan Respublikası Elm və Təhsil Nazirliyi"
          imageUrl="https://www.tkta.edu.az/files/NewFolder%203/Main_logotype_AZE.png"
          url="https://edu.gov.az"
        />

        <LinkCard
          name="Azərbaycanda təhsil"
          imageUrl="https://www.tkta.edu.az/files/thumbnail_study%20in%20aze%203.png"
          url="https://studyinaazerbaijan.gov.az"
        />
      </div>
    </div>
  );
}
