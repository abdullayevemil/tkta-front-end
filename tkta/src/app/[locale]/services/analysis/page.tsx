import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Analysis() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        Analİtİk təhlİl
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-16 flex flex-col text-justify"
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
          className="flex flex-col gap-4 pt-16"
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

        <TabsContent value="thematic-analysis" className="flex flex-col gap-4">
          <p className="text-justify text-justify tracking-wide leading-7 text-base">
            Tematik təhlil, Təhsildə Keyfiyyət Təminatı Agentliyinin
            fəaliyyətində strateji əhəmiyyət daşıyan analitik vasitələrdən
            biridir. Bu yanaşma vasitəsilə ali təhsil müəssisələrinin
            fəaliyyətinə dair konkret sahələr üzrə məlumatlar toplanır, təhlil
            edilir və nəticələr əsasında təkmilləşdirmə imkanları müəyyən
            olunur.
          </p>

          <p>
            Təhlillər Avropa Ali Təhsil Məkanında qəbul olunmuş ESG-2015 (Avropa
            Standartları və Təlimatları) sənədinin müddəalarına uyğun olaraq
            aparılır və akkreditasiya qiymətləndirilməsi nəticəsində hazırlanmış
            yekun hesabatlara istinad edir. Tematik təhlil təhsil
            müəssisələrinin fəaliyyətində trendləri, çağırışları və yaxşı
            təcrübələri üzə çıxarmaqla yanaşı, həm də milli keyfiyyət təminatı
            sisteminin təkmilləşdirilməsi baxımından strateji əhəmiyyət kəsb
            edir.
          </p>
        </TabsContent>

        <TabsContent value="data-analysis">
          <div className="flex flex-col gap-4 text-justify tracking-wide leading-7 text-base">
            <p>
              Data analizi, Təhsildə Keyfiyyət Təminatı Agentliyinin
              fəaliyyətində əsas analitik vasitələrdən biridir. Bu proses,
              təhsil müəssisələrinin fəaliyyətinə dair məlumatların sistemli
              şəkildə toplanması, təhlil edilməsi və bu məlumatlar əsasında
              müvafiq təkmilləşdirmə təkliflərinin hazırlanmasını təmin edir.
              Data analizi, həmçinin təhsil sisteminin keyfiyyətinin artırılması
              məqsədilə real və obyektiv göstəricilər əsasında fəaliyyətin
              qiymətləndirilməsinə imkan yaradır.
            </p>

            <p>
              Data analizi prosesində istifadə olunan məlumatlar müxtəlif
              mənbələrdən toplanır, məsələn təhsil müəssisələrinin fəaliyyətinə
              dair rəqəmsal göstəricilər, akkreditasiya qiymətləndirilməsi,
              müvafiq hesabatlar, sorğular və digər analitik alətlər. Təhlilin
              daha dəqiq aparılması üçün çox vaxt çarpaz mənbələrdən əldə olunan
              məlumatlardan istifadə olunur.
            </p>

            <p>
              Təhlil edilmiş məlumatlar, təhsil sistemindəki güclü və zəif
              tərəflərin müəyyən edilməsinə, təhsil siyasətinin daha effektiv
              formalaşdırılmasına və gələcək inkişaf istiqamətlərinin müəyyən
              olunmasına xidmət edir. Data analizinin effektivliyini təmin etmək
              üçün Power BI, statistik analiz və təhlil proseslərinin həyata
              keçirilməsi üçün isə Stata və R proqramlarından istifadə olunur.{" "}
            </p>

            <p>
              Şöbə, data analizini beynəlxalq təcrübələrlə uyğunlaşdıraraq yerli
              təhsil sisteminə uyğunlaşdırmağa xüsusi diqqət yetirir. Analizlər,
              həmçinin təhsil müəssisələrinin fəaliyyətini qiymətləndirmək və
              inkişaf etdirmək məqsədilə proqnoz göstəricilərinin
              hazırlanmasında istifadə edilir. Bu analizlərin nəticələri
              əsasında tövsiyələr hazırlanır və müvafiq hesabatlarla
              ictimaiyyətə təqdim olunur.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="flex flex-col gap-4 text-justify tracking-wide leading-7 text-base">
            <h3 className="font-semibold text-textPrimary text-base">
              IELTS imtahanına təşviq edilməsi layihəsi
            </h3>

            <p>
              28 Oktyabr 2023-cü il tarixində Təhsilin İnkişafı Fondu (TİF),
              Təhsildə Keyfiyyət Təminatı Agentliyi (TKTA) və 6 ali təhsil
              müəssisəsi(ATM) arasında “Universitetlərin elmi-pedaqoji heyət
              üzvləri və təhsilalanların IELTS imtahanına təşviq edilməsi”
              mövzusunda üçtərəfli, strateji əməkdaşlıq müqaviləsi imzalanıb.
              2024-cü ilin sonunda layihəyə qoşulan ATM-lərin sayı 15-ə
              çatmışdır ki, onların da əksəriyyəti ETN tabeliyində fəaliyyət
              göstərən ATM-lərdir. Bu təşəbbüs, “Azərbaycan Respublikasının
              2022–2026-cı illərdə sosial-iqtisadi inkişaf Strategiyası”nın
              “Rəqabətli insan kapitalı və müasir innovasiyalar məkanı”
              komponentinə uyğun olaraq həyata keçirilir və ali təhsil
              sistemində keyfiyyətin artırılmasına xidmət edən mühüm addımlardan
              biri kimi dəyərləndirilir.
            </p>

            <p>
              Layihənin əsas məqsədi ali təhsil müəssisələrinin müəllim və
              tələbələrinin ingilis dilində yüksək səviyyədə bacarıq qazanması
              üçün əlverişli şərait yaratmaqdır.
            </p>

            <p>
              TKTA sözügedən layihədə koordinasiya və keyfiyyətə nəzarət
              funksiyasını effektiv şəkildə həyata keçirir. Layihə çərçivəsində
              sənəd və məlumatların ötürülməsi mərhələli və sistemli şəkildə
              təşkil olunur. Ali təhsil müəssisələri tərəfindən təqdim edilən
              sənədlər ilkin olaraq TKTA tərəfindən qəbul edilir, müvafiq
              meyarlar əsasında yoxlanılır və yalnız tələblərə uyğun olduğu
              halda aidiyyəti üzrə – Təhsilin İnkişafı Fonduna – təqdim olunur.
            </p>

            <p>
              Xüsusilə, IELTS imtahanında yüksək nəticə göstərən 300-dək
              akademik heyət üzvü və tələbənin imtahan ödənişlərinin Təhsilin
              İnkişafı Fondu tərəfindən qarşılanması planlaşdırılır ki, bu da
              gənc mütəxəssislərin inkişafına böyük stimul yaradır.
            </p>

            <p>
              Bu əməkdaşlıq sayəsində Azərbaycan təhsil sistemi beynəlxalq
              səviyyədə rəqabətqabiliyyətli insan kapitalının formalaşması
              yolunda mühüm addım atır.
            </p>

            <h3 className="font-semibold text-textPrimary text-base">
              Esse Müsabiqəsi
            </h3>

            <p>
              Təhsildə Keyfiyyət Təminatı Agentliyi (TKTA) tərəfindən ali təhsil
              müəssisələrində (ATM) aparılan akkreditasiya prosesinin
              təkmilləşdirilməsi və obyektivliyinin təmin olunması məqsədilə
              əsas hədəflərdən biri tələbələrin bu prosesdə fəal iştirakını
              stimullaşdırmaqdır. Bu məqsədlə 15 oktyabr 2024-cü il tarixində
              ATM-lər arasında “Keyfiyyət Elçisi” adlı esse müsabiqəsi elan
              edilmişdir. Layihə tələbələrin təhsildə keyfiyyətin
              formalaşmasında bilavasitə iştirakını təmin etməklə yanaşı,
              onların tənqidi düşüncə və analitik bacarıqlarını inkişaf
              etdirmək, liderlik və təşəbbüskarlıq keyfiyyətlərini gücləndirmək,
              eləcə də karyera baxımından əhəmiyyətli təcrübə qazanmaq imkanı
              yaradaraq, ali təhsil müəssisələrinin fəaliyyətinə obyektiv baxış
              bucağından yanaşmalarını təşviq etmək xarakteri daşıyırdı.
            </p>

            <p>
              Layihənin ilkin mərhələsi olan esse müsabiqəsi üçün onlayn
              müraciət forması TKTA-nın Analitik təhlil şöbəsi tərəfindən
              hazırlanmış, suallar isə Agentliyin aidiyyəti struktur
              bölmələrinin təqdim etdiyi istiqamətlər əsasında
              formalaşdırılmışdır. Müraciət forması dörd açıq tipli sualdan
              ibarət olmuş əvvəlcədən müəyyən edilmiş qiymətləndirmə meyarlarına
              əsasən tərtib edilmişdir. Yekunlaşdırılmış forma Atm-lərin müvafiq
              şöbələrinə göndərilmiş və onların vasitəsilə tələbələrə təqdim
              olunmuşdur.
            </p>

            <p>
              11 noyabr 2024-cü il tarixində başa çatan müsabiqəyə ümumilikdə
              718 tələbə müraciət etmişdir. Müraciətlərin emalı məqsədilə
              məlumat bazası Analitik təhlil şöbəsi tərəfindən sistemdən ixrac
              edilmiş, ilkin təhlil və məlumatların təmizlənməsi aparılmış və
              yekun nəticələr aidiyyəti struktur bölməyə təqdim olunmuşdur.
              Müsabiqənin növbəti mərhələlərinin təşkili həmin struktur bölmə
              tərəfindən davam etdirilmişdir.
            </p>

            <Link href={"https://res.cloudinary.com/dtwyjdkb1/image/upload/v1763414723/Tematik_t%C9%99hlil_Beyn%C9%99lmil%C9%99ll%C9%99%C5%9Fm%C9%99_15.04.2024_t48va5.pdf"}>
              <Card className="h-[27.5rem] w-full p-4 flex flex-col gap-6 items-center justify-center hover:cursor-pointer hover:font-bold text-base">
                <Image
                  src={"https://res.cloudinary.com/dtwyjdkb1/image/upload/v1/Tematik_t%C9%99hlil_Beyn%C9%99lmil%C9%99ll%C9%99%C5%9Fm%C9%99_15.04.2024_t48va5"}
                  alt="document preview"
                  width={150}
                  height={150}
                  className="w-full max-h-[21.25rem] object-cover"
                />

                <span className="text-lg text-center text-textPrimary font-bold font-bold">
                  2023-cü ildə akkreditasiya prosesi keçirilmiş 13 ali təhsil
                  müəssisəsinin beynəlmiləlləşmə istiqaməti üzrə akkreditasiya
                  nəticələrinə dair tematik hesabat
                </span>
              </Card>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
