import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Iternationalization() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-5xl text-center w-full px-16 pt-16">
        Beynəlmİləlləşmə
      </h1>

      <Tabs
        defaultValue="general-info"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="general-info"
          >
            Ümumi məlumat
          </TabsTrigger>

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
            Heyətin mübadiləsi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general-info" className="flex flex-col gap-4">
          <div className="text-justify tracking-wide leading-7 text-base">
            Təhsildə Keyfiyyət Təminatı Agentliyi (TKTA) öz vəzifələrini yerinə
            yetirərkən və hüquqlarını həyata keçirərkən beynəlxalq təşkilat və
            qurumlarla da əməkdaşlıqlara önəm verir, qarşılıqlı əlaqədə
            fəaliyyət göstərir.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            Azərbaycan Respublikasında effektiv keyfiyyət təminatı sisteminin
            fəaliyyətini təşkil etmək, keyfiyyət nəticələri və əhatəliliyinə
            görə dünya ölkələri sırasında qabaqcıl mövqe tutan təhsil sisteminin
            formalaşdırılmasına nail olmaq, müasir dövrün tələblərinə uyğun
            bilik, bacarıq, səriştə və təcrübəyə malik rəqabətqabiliyyətli
            mütəxəssislərin əmək bazarına çıxışına dəstək göstərmək üçün
            Agentliyin fəaliyyət istiqamətlərindən biri də müvafiq sahədə
            qabaqcıl beynəlxalq təcrübəni öyrənmək və tətbiq etməkdən ibarətdir.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            TKTA 2017-ci ilin Yanvar ayından Ali Təhsildə Keyfiyyət Təminatı
            üzrə Avropa Assosiasiyasına (ENQA) müşahidəçi üzv statusu əldə edib.
            Avropanın aparıcı keyfiyyət təminatı qurumlarını birləşdirən ENQA-da
            təmsil olunmaq Azərbaycana Avropa ali təhsil məkanında təhsilin
            keyfiyyətinin yüksəldilməsi istiqamətində müzakirələrdə yaxından
            iştiraka imkan verir. Bununla yanaşı, Avropa Ali Təhsil Məkanına
            daha da yaxınlaşmaq və Keyfiyyətin Təminatı üzrə Avropa Standartları
            və Təlimatlarına (ESG) cavab verən keyfiyyət təminatı sisteminin
            formalaşdırılmasına şərait yaradır.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            TKTA-nın ENQA-ya üzvlük prosesinə başlanılmış, bu kontekstdə
            fəaliyyət planı hazırlanıb həmin quruma göndərilmişdir
            (https://www.enqa.eu/wp-content/uploads/SEQA-ESG-2-Azerbaijan-action-plan_as-of-02.08.2024.pdf).
            2025-ci təqvim ilində TKTA-nın ENQA-ya üzvlük prosesi ilə əlaqəli
            Özünütəhlil hesabatının hazırlanması və 2026-cı təqvim ilində
            ENQA-nın müvafiq komissiyasının TKTA-ya sahə səfəri planlaşdırılır.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            Azərbaycan Respublikası ölkə olaraq 2015-ci ildən Ali Təhsildə
            Keyfiyyətin Təminatı üzrə Avropa Reyestri (EQAR) təşkilatının Baş
            Assambleyasının iclasında EQAR-a üzv seçilmişdir. EQAR Bolonya
            prosesinə üzv ölkələrin mandatı ilə Ali təhsildə keyfiyyətin
            təminatı üzrə Avropa Assosiasiyasının (ENQA), Avropa Universitetlər
            Assosiasiyasının (EUA), Ali təhsil müəssisələrinin Avropa
            Assosiasiyasının (EURASHE) və Avropa Tələbələr Birliyinin (ESU)
            təşəbbüsü əsasında ali təhsildə keyfiyyətə nəzarət üçün yaradılmış
            ilk rəsmi qurumdur. Ümumilikdə 36 ölkə EQAR-ın üzvüdür.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            TKTA 2021-ci ilin oktyabr ayından Ali Təhsildə Keyfiyyət Təminatı
            Agentliklərinin Mərkəzi və Şərqi Avropa Şəbəkəsinin (CEENQA) tam
            hüquqlu üzvüdür. Azərbaycan da daxil olmaqla 27 ölkədən 46 təsisatın
            qoşulduğu təşkilat Mərkəzi və Şərqi Avropa ali təhsil məkanında
            keyfiyyət təminatı üzrə standart və təlimatlara uyğun daxili və
            xarici keyfiyyət təminatı sisteminin təkmilləşdirilməsinə töhfə
            verməklə yanaşı, üzv təşkilatlar arasında təcrübə mübadiləsi və
            müştərək layihələrin həyata keçirilməsini təşviq edir.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            2022-ci ilin oktyabr ayından etibarən TKTA Ali Təhsildə Keyfiyyət
            Təminatı Agentliklərinin Beynəlxalq Şəbəkəsi (INQAAHE) təşkilatının
            tamhüquqlu üzvüdür. Baş qərargahı İspaniyada yerləşən INQAAHE
            1991-ci ildən 300-dən artıq ali təhsildə keyfiyyət təminatı
            qurumunun şəbəkələşməsini və təcrübə mübadiləsini təşviq edir.
            Agentlik INQAAHE tərəfindən UNESCO-nun dəstəyi ilə həyata keçirilən
            tədqiqat layihələrində ölkənin ali təhsil müəssisələrinin iştirakını
            təmin edərək beynəlxalq əməkdaşlığa töhfə verir.
          </div>

          <div className="text-justify tracking-wide leading-7 text-base">
            Bundan əlavə, TKTA müxtəlif xarici keyfiyyət təminatı agentlikləri
            ilə əməkdaşlığını genişləndirmək məqsədilə bir sıra anlaşma
            memorandumları imzalamışdır. Bu qurumlar arasında Türkiyənin Ali
            Təhsildə Keyfiyyət Təminatı Şurası (YÖKAK), Almaniyanın Təhsil
            Proqramlarının Akkreditasiyası üzrə Keyfiyyətin Təminatı Agentliyi
            (AQAS), Böyük Britaniyanın Ali Təhsil üzrə Keyfiyyət Təminatı
            Agentliyi (QAA), Moldovanın Təhsil və Tədqiqatda Keyfiyyətin
            Təminatı üzrə Milli Agentliyi (ANACEC), Qazaxıstanın Beynəlxalq
            Akkreditasiya və Reytinq Agentliyi (IAAR), Ukraynanın Keyfiyyət
            Təminatı üzrə Milli Agentliyi (NAQA), Gürcüstanın Təhsilin
            Keyfiyyətinin Artırılması Milli Mərkəzi (NCEQE), həmçinin Hollandiya
            və Flandriya Akkreditasiya Təşkilatı (NVAO) yer alır.
          </div>
        </TabsContent>

        <TabsContent value="international-events"></TabsContent>

        <TabsContent value="employee-exchange"></TabsContent>
      </Tabs>
    </section>
  );
}
