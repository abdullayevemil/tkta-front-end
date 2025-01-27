import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";

export default function Iternationalization() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
      Beynəlmİləlləşmə
      </h1>

      <div className="flex flex-col gap-6 px-16">
        <div>
          Təhsildə Keyfiyyət Təminatı Agentliyi həm yerli həm də beynalxalq
          əməkdaşlıqlara önəm verir və Azərbaycan ərazisində fəaliyyət göstərən
          təhsil müəssisələri, o cümlədən digər hökumət və qeyri - hökumət
          təşkilatları ilə əməkdaşlıq etməkdədir.
        </div>

        <div>
          Təhsildə Keyfiyyət Təminatı Agentliyi 2017-ci ilin Yanvar ayından
          Avropa Ali Təhsil Məkanında Keyfiyyətin Təminatı üzrə Assosiasiyaya
          (ENQA) müşahidəçi üzv statusu əldə edib. Avropanın aparıcı
          akkreditasiya qurumlarını birləşdirən ENQA-da təmsil olunmaq
          Azərbaycana Avropa ali təhsil məkanında təhsilin keyfiyyətinin
          yüksəldilməsi istiqamətində müzakirələrdə yaxından iştiraka imkan
          verir. Bununla yanaşı, Avropa Ali Təhsil Məkanına daha da yaxınlaşmaq
          və Keyfiyyətin Təminatı üzrə Avropa Standartları və Təlimatlarına
          (ESG) cavab verən akkreditasiya sistemini qurmağa şərait yaradır.
        </div>

        <div>
          Azərbaycan Respublikası ölkə olaraq 2015-ci ildən Ali Təhsildə
          Keyfiyyətin Təminatı üzrə Avropa Reyestri (EQAR) təşkilatının Baş
          Assambleyasının iclasında EQAR-a üzv seçilmişdir. EQAR Bolonya
          prosesinə üzv ölkələrin mandatı ilə Ali təhsildə keyfiyyətin təminatı
          üzrə Avropa Assosiasiyasının (ENQA), Avropa Universitetlər
          Assosiasiyasının (EUA), Ali təhsil müəssisələrinin Avropa
          Assosiasiyasının (EURASHE) və Avropa Tələbələr Birliyinin (ESU)
          təşəbbüsü əsasında ali təhsildə keyfiyyətə nəzarət üçün yaradılmış ilk
          rəsmi qurumdur. Ümumilikdə 36 ölkə EQAR-ın üzvüdür.
        </div>
      </div>
    </section>
  );
}
