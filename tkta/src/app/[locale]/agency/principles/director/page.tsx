import { Card } from "@/components/ui/card";
import Image from "next/image";


export default function Director() {
  return (
    <div className="w-full flex flex-col justify-center gap-20">
      

      <h1 className="uppercase text-4xl text-center text-textPrimary pt-16">İdarə Heyətİnİn sədrİ</h1>

      <div className="px-16 w-full flex flex-row gap-6 items-center">
        <Card className="h-full bg-textPrimary w-1/3 p-4 flex flex-col items-center gap-6 hover:cursor-pointer">
          <Image
            src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1742935878/principles/xhwrn4ztqiqeivxhgfrq.jpg"
            alt="Director photo"
            width={500}
            height={500}
            className="w-full rounded"
          />

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-semibold text-center">
              TURAL TEYMUR OĞLU ƏHMƏDOV
            </h3>

            <h4 className="text-white/[0.7] text-base font-semibold text-center">
              İdarə Heyətinin sədri
            </h4>
          </div>
        </Card>

        <p className="w-2/3 text-justify whitespace-pre flex flex-col gap-2 tracking-wide leading-6">
          <span className="text-wrap">
            Tural Əhmədov
          </span>
          <span className="text-wrap">
            2000-2004-cü illərdə Azərbaycan Dillər Universitetində
            regionşünaslıq ixtisası üzrə bakalavr təhsili alıb.
          </span>
          <span className="text-wrap">
            2005-2007-ci illərdə Golda Meir təqaüdü ilə Yerusəlim İbrani
            Universitetində (Hebrew University of Jerusalem) sosial elmlər üzrə
            magistr dərəcəsi alıb.
          </span>
          <span className="text-wrap">
            2004-2005 və 2007-2008-ci illərdə Azərbaycan Dillər Universitetində
            regionşünaslıq ixtisası üzrə magistr dərəcəsi alıb.
          </span>
          <span className="text-wrap">
            2011-2012-ci illərdə Fulbright təqaüdü ilə Sirakuz Universitetində
            (Maxwell School of Syracuse University) beynəlxalq münasibətlər üzrə
            magistr dərəcəsi alıb.
          </span>
          <span className="text-wrap">
            2008-ci ildə Brandeis Universitetində və Təl-Əviv Universitetində,
            2009-cu ildə Oslo Universitetində və Nansen Akademiyasında, 2011-ci
            ildə Şimali Karolina Dövlət Universitetində, 2015-ci ildə Avropa
            Kollecində (College of Europe) qısa müddətli təlimlərdə iştirak
            edib. 2007-2021-ci illər ərzində bir sıra ali təhsil müəssisələrində
            (Azərbaycan Dövlət İqtisad Universiteti, Bakı Dövlət Universiteti,
            Azərbaycan Dillər Universiteti, Azərbaycan Universiteti və Xəzər
            Universiteti) pedaqoji və inzibati fəaliyyətlə məşğul olub.
            2013-2015-ci illərdə Azərbaycan NATO Beynəlxalq Məktəbinin icraçı
            direktoru vəzifəsində çalışıb.
          </span>
          <span className="text-wrap">
            2015-2023-cü illər ərzində Elm və Təhsil Nazirliyinin Beynəlxalq
            əməkdaşlıq şöbəsində sektor müdiri, şöbə müdirinin müavini və şöbə
            müdiri vəzifələrində çalışıb.
          </span>
          <span className="text-wrap">
            1 dekabr 2023-cü il tarixindən etibarən Təhsildə Keyfiyyət Təminatı
            Agentliyinin İdarə Heyətinin sədri vəzifəsini icra edir.
          </span>
          <span className="text-wrap">Evlidir, 2 övladı var.</span>
        </p>
      </div>
    </div>
  );
}
