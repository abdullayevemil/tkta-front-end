import Image from "next/image";
import HeaderImage from "@/assets/images/about/header-image.png";
import CenterImage from "@/assets/images/about/center-image.png";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-7xl text-center">HAQQIMIZDA</h1>

      <h2 className="italic text-3xl text-center w-2/3 p-4 text-textPrimary">
        <b>“</b>Təhsil, yalnız bilik əldə etmək deyil, həm də insanın düşünmə
        qabiliyyətini inkişaf etdirmək, həyatda doğru qərarlar vermək və
        cəmiyyətə faydalı olmaq üçün ən güclü vasitədir<b>”</b>
      </h2>

      <div className="px-[112px] w-full">
        <div className="w-2/3 h-fit">
          <Card className="w-full h-fit float-left mr-8 mb-4">
            <Image
              src={CenterImage}
              alt="center image"
              objectFit={"contain"}
              className="rounded-xl w-full"
            />
          </Card>
        </div>

        <p className="text-base w-full text-justify tracking-wide leading-7">
          Azərbaycan Respublikası Prezidentinin 29.12.2019-cu il tarixdə
          imzaladığı müvafiq Fərmana əsasən, Təhsil Nazirliyinin Akkreditasiya
          və Nostrifikasiya İdarəsi Təhsil Nazirliyinin tabeliyində publik
          hüquqi şəxs statusu olan Təhsildə Keyfiyyət Təminatı Agentliyinə
          çevrilmə yolu ilə yenidən təşkil edilmişdir. Agentlik Azerbaycanda və
          beynəlxalq səviyyədə qəbul edilmiş standartlara əsaslanan ali, orta
          ixtisas və əlavə təhsilin keyfiyyətinin müstəqil qiymətləndirilməsi
          sahəsində peşəkar və mütəxəssis qurumdur. <br /> Təhsildə Keyfiyyət
          Təminatı Agentliyi (TKTA) təhsil proqramlarının keyfiyyət
          səviyyələrinin müəyyənləşdirilməsi və tələblərin həyata keçirilməsini
          təmin edir. Agentlik öz vəzifələrini yerinə yetirərkən və hüquqlarını
          həyata keçirərkən dövlət orqanları (qurumları) və bələdiyyələrlə,
          beynəlxalq və qeyri-hökumət təşkilatları, digər hüquqi və fiziki
          şəxslərlə qarşılıqlı əlaqədə fəaliyyət göstərir. Azərbaycan Respublikası Təhsil Nazirliyinin fəaliyyətinin
          təkmilləşdirilməsi və “Azərbaycan Respublikasında bir sıra dövlət
          orqanlarının strukturunun optimallaşdırılması və idarə edilməsinin
          təkmilləşdirilməsi ilə bağlı əlavə tədbirlər haqqında” Azərbaycan
          Respublikası Prezidentinin 2019-cu il 17 yanvar tarixli 479 nömrəli
          Fərmanında dəyişiklik edilməsi barədə{" "}
          <Link
            className="italic text-textPrimary font-semibold"
            href="https://e-qanun.az/framework/44056"
          >
            NİZAMNAMƏYƏ KEÇİD
          </Link>
        </p>
      </div>
    </div>
  );
}
