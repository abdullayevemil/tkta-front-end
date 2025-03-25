import { Card } from "@/components/ui/card";
import Image from "next/image";
import HeaderImage from "@/assets/images/principles/header-image.png";

export default function Principles() {
  return (
    <div className="w-full flex flex-col justify-center gap-20">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center text-textPrimary">İdarə Heyətİnİn sədr müavİnİ</h1>

      <div className="px-[112px] w-full flex flex-row gap-6 items-center">
        <Card className="h-full bg-textPrimary w-1/3 p-4 flex flex-col items-center gap-6 hover:cursor-pointer">
          <Image
            src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1742936194/principles/uu0lnxbin3ngx5gmwbl9.png"
            alt="Director photo"
            width={500}
            height={500}
            className="w-full rounded"
          />

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-semibold text-center">
              KAMRAN ƏLİ AĞA OĞLU RƏSULOV
            </h3>

            <h4 className="text-white/[0.7] text-base font-semibold text-center">
              İdarə Heyətinin sədr müavini
            </h4>
          </div>
        </Card>

        <p className="w-2/3 text-justify whitespace-pre flex flex-col gap-2 tracking-wide leading-6">
          <span className="text-wrap">
            Kamran Rəsulov
          </span>
          <span className="text-wrap">
            2005-2010-cu illərdə Türkiyənin paytaxtı Ankara şəhərində Hacəttəpə
            Universitetinin İqtisadi və idari elmlər fakültəsində “Biznesin
            idarə edilməsi” ixtisası üzrə bakalavr, 2010-2012-ci illərdə həmin
            universitetin “Maliyyə” ixtisası üzrə magistratura səviyyəsində ali
            təhsil alıb.
          </span>
          <span className="text-wrap">
            2015-ci ildə “Sənayedə innovasiya fəaliyyətinin səmərəliyinin
            yüksəldilməsi” mövzusunda dissertasiya işini müdafiə edərək iqtisad
            üzrə fəlsəfə doktoru elmi dərəcəsi, 2022-ci ildə isə dosent elmi
            adını alıb.
          </span>
          <span className="text-wrap">
            2012-ci ildən Azərbaycan Texniki Universitetinin İqtisadiyyat və
            satatistika kafedrasında müəllim, baş müəllim və dosent
            vəzifələrində çalışıb.
          </span>
          <span className="text-wrap">
            Azərbaycan Texniki Universitetində rektor köməkçisi, rektorun
            iqtisadi işlər üzrə məsləhətçisi, İqtisadiyyat və idarəetmə
            fakültəsinin tədris işləri üzrə dekan müavini vəzifələrində çalışıb.
          </span>
          <span className="text-wrap">
            2016-2021-ci illərdə Azərbaycan Respublikası Elm və Təhsil
            Nazirliyinin Elm, ali və orta ixtisas təhsili şöbəsində aparıcı
            məsləhətçi, böyük məsləhətçi və baş məsləhətçi vəzifələrində
            çalışıb.
          </span>
          <span className="text-wrap">
            2021-2022-illərdə Azərbaycan Texniki Universitetində Sosial
            məsələlər və ictimaiyyətlə əlaqələr üzrə prorektor vəzifəsində
            çalışıb.
          </span>
          <span className="text-wrap">
            2022-ci ildən etibarən Təhsildə Keyfiyyət Təminatı Agentliyinin
            İdarə Heyətinin sədrinin müavini vəzifəsində çalışır.
          </span>
          <span className="text-wrap">Ailəlidir, 2 övladı var.</span>
        </p>
      </div>
    </div>
  );
}
