import Image from "next/image";
// import HeaderImage from "@/assets/images/principles/header-image.png";
import CenterImage from "@/assets/images/about/center-image.png";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col gap-16 items-center">

      <h1 className="uppercase text-5xl text-center pt-16">HAQQIMIZDA</h1>

      <div className="px-[112px] w-full" >
        <p className="text-base w-full text-justify tracking-wide leading-7">
          Azərbaycan Respublikası Prezidentinin 29.12.2019-cu il tarixində
          imzaladığı müvafiq Fərmana əsasən, Təhsil Nazirliyinin Akkreditasiya
          və Nostrifikasiya İdarəsi Təhsil Nazirliyinin tabeliyində publik
          hüquqi şəxs statusu olan Təhsildə Keyfiyyət Təminatı Agentliyinə
          çevrilmə yolu ilə yenidən təşkil edilmişdir. Agentlik Azərbaycanda və
          beynəlxalq səviyyədə qəbul edilmiş standartlara əsaslanan ali, orta
          ixtisas və əlavə təhsilin keyfiyyətinin müstəqil qiymətləndirilməsi
          sahəsində peşəkar və mütəxəssis qurumdur. <br /> Təhsildə Keyfiyyət
          Təminatı Agentliyi (TKTA) təhsil proqramlarının keyfiyyət
          səviyyələrinin müəyyənləşdirilməsi və tələblərin həyata keçirilməsini
          təmin edir. Agentlik öz vəzifələrini yerinə yetirərkən və hüquqlarını
          həyata keçirərkən dövlət orqanları (qurumları) və bələdiyyələrlə,
          beynəlxalq və qeyri-hökumət təşkilatları, digər hüquqi və fiziki
          şəxslərlə qarşılıqlı əlaqədə fəaliyyət göstərir.<br /> Azərbaycan Respublikası Təhsil Nazirliyinin fəaliyyətinin
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
