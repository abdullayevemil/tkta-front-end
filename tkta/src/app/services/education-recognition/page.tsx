import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import Link from "next/link";

export default function EducationRecognition() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        QEYRİ-FORMAL VƏ İNFORMAL TƏHSİLİN TANINMASI
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-[112px] flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger className="w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold" value="general-information">Ümumi məlumat</TabsTrigger>

          <TabsTrigger className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold" value="registration">Qeydiyyat</TabsTrigger>

          <TabsTrigger className="w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold" value="partners">Tərəfdaşlar</TabsTrigger>
        </TabsList>

        <TabsContent value="general-information">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-bold">Qeyri-formal təhsil - </span>formal
                təhsil mühitindən kənarda baş verən yəni, müxtəlif kurslarda,
                dərnəklərdə, təlim və ya fərdi məşğələlərdə, o cümlədən iş
                mühitində əldə edilən bilik, bacarıq və səriştələrin məcmusudur.
              </p>

              <p>
                <span className="font-bold">İnformal təhsil - </span>özünütəhsil
                yolu ilə biliklərə yiyələnmənin formasıdır. Yəni, gündəlik
                həyatımızda müxtəlif mənbələrdən maraq dairəmizə, yaxud da
                ehtiyaclarımıza uyğun olaraq (daha çox təcrübəyə əsaslanan) əldə
                edilən bütün səriştələr bura aid edilə bilər.
              </p>

              <p>
                Qeyri-formal və informal təhsilin tanınması Azərbaycan
                Respublikası Nazirlər Kabinetinin 5 avqust 2020-ci il tarixli
                279 nömrəli qərarı ilə təsdiq edilmiş{" "}
                <Link
                  className="text-textPrimary italic hover:underline"
                  href="https://nk.gov.az/az/senedler/qerarlar/“vatandaslarin-pesa-tahsili-uzra-qeyri-formal-va-informal-tahsil-formalari-vasitasila-alda-etdiklari-4660"
                >
                  Qayda
                </Link>{" "}
                əsasında tənzimlənir. Sözügedən xidmət ödənişlidir,
                vətədaşlardan bununla bağlı Azərbaycan Respublikası Nazirlər
                Kabinetinin 25 dekabr 2020-ci il tarixili 508 nömrəli{" "}
                <Link
                  className="text-textPrimary italic hover:underline"
                  href="https://nk.gov.az/az/senedler/qerarlar/“pesa--tahsili--uzra--qeyri-formal-va--informal--tahsil--formalari-vasitasila--alda--edilmis--bilik--5027"
                >
                  Qərarına
                </Link>{" "}
                əsasən müvafiq ixtisas üzrə biliklərin qiymətləndirilməsi üçün
                100 AZN , bacarıq, səristə və təcrübənin qiymətləndirilməsi üçün
                isə hər modul üzrə 80 AZN məbləğində ödəniş tələb olunur. Yekun
                əldə edilən peşə ixtisasını təsdiq edən sertifikat vətəndaşa
                əmək fəaliyyətinə başlamaq hüququ veririr. Əldə edilən peşə
                ixtisasını təsdiq edən diplom isə ilk peşə təhsili səviyyəsində
                təhsil haqqinda sənədə bərabər tutulur, sahibinə peşə təhsili
                pilləsinin növbəti səviyyəsində təhsilini davam etdirmək və peşə
                ixtisasi üzrə əmək fəaliyyətinə başlamaq hüququ verir.
              </p>
            </div>

            <p>Müraciət qaydaları</p>

            <p>
              Ümumi orta təhsil səviyyəsini ən azı 4 (dörd) il əvvəl və ya tam
              orta təhsil səviyyəsini ən azı 2 (iki) il əvvəl bitirərək,
              müraciət etdiyi müvafiq ixtisas üzrə azı 2 (iki) il qeyri-formal
              və informal təhsil formaları vasitəsilə bilik, bacarıq, səriştə və
              təcrübə əldə edən vətəndaşlar qiymətləndirilmə və tanınma üçün
              Təhsildə Keyfiyyət Təminatı Agentliyinə müraciət edə bilərlər.
            </p>

            <p>
              Qiymətləndirmə və tanınma ilə bağlı prosedur 4 mərhələdən
              ibarətdir :
            </p>

            <ol className="list-[lower-alpha] pl-8 flex flex-col gap-3">
              <li>
                <Link
                  className="text-textPrimary italic hover:underline font-bold"
                  href="https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/viewform?edit_requested=true"
                >
                  Qeydiyyat
                </Link>

                <ul className="list-disc pl-8 flex flex-col gap-2">
                  <li>
                    Qiymətləndirmə və tanınma üçün müraciət elektron qaydada
                    həyata keçirilir. Bütün sənədlər elektron poçt vasitəsilə
                    <span className="font-bold">qfitt@tkta.edu.az</span>{" "}
                    ünvanına göndərilir.
                  </li>

                  <li>
                    Məktub və ya şəxsən təqdim olunan sənədlər icraata
                    götürülmür. Sənədlərin elektron poçtdan kənar vasitələrlə
                    göndərilməsi ərizəçinin müraciətinə baxılmasında ciddi
                    gecikmələrə səbəb ola bilər. Elektron poçt ərizəçi
                    tərəfindən daim istifadə olunan olmalıdır, belə ki,
                    müraciətlə bağlı yeniliklər (ərizənin cari
                    statusu,qiymətləndirmə və tanınmanın keçirilmə vaxtı, yeri
                    və nəticəsi) bu vasitələrdən istifadə edilməklə bildirilir.
                  </li>

                  <li>
                    Elektron poçtda qeyd olunan statusu mütəmadi yoxlamaq hər
                    bir ərizəçinin məsuliyyətidir.
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-bold">Ilkin baxış (müsahibə)</div>

                <ul className="list-disc pl-8 flex flex-col gap-2">
                  <li>
                    İlkin baxış mərhələsində təqdim edilmiş sənədlərin
                    (materialların) qiymətləndirilməsi zamanı zərurət yarandığı
                    təqdirdə ərizəçilərlə müsahibə keçirilir. Müsahibədə
                    aşağıdakı məlumatlar əldə edilir.
                  </li>

                  <li>
                    Müraciət etdiyi sahə üzrə nəzəri və praktiki biliklər
                    barəsində məlumat.
                  </li>

                  <li>
                    Nəzəri və praktiki biliklərin əldə olunması formasına dair
                    məlumat.
                  </li>

                  <li>
                    Nəzəri və praktiki biliklərin tətbiqi imkanları və
                    müddətləri haqqında məlumat.
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-bold">Biliklərin qiymətləndirilməsi</div>

                <ul className="list-disc pl-8 flex flex-col gap-2">
                  <li>
                    Biliyin qiymətləndirilməsi üçün müvafiq ixtisas üzrə test
                    imahanı keçirilir.
                  </li>

                  <li>
                    Test imtahanı kağız daşıyıcıları vasitəsilə və ya komputer
                    vasitəsilə həyata keçirilir.
                  </li>

                  <li>
                    Ərizəçiyə hər bir modul üzrə 10 sual verilir və hər bir
                    düzgün cavab 1 (bir) balla qiymətləndirilir.
                  </li>

                  <li>
                    NƏrizəçiyə sualların cavablandırılması üçün 60 dəqiqə vaxt
                    verilir. Əlilliyi olan şəxslərin imtahan vaxtına 15 dəqiqə
                    əlavə olunur və onların imtahanda iştirakı üçün əlverişli
                    şərait yaradılır.
                  </li>

                  <li>
                    50%-dən çoxunu düzgün cavablandıran ərizəçi bacarıq, səriştə
                    və təcrübənin qiymətləndirilməsi mərhələsinə buraxılır.
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-bold">
                  Bacarıq, səriştə və təcrübənin qiymətləndirilməsi{" "}
                </div>

                <ul className="list-disc pl-8 flex flex-col gap-2">
                  <li>
                    Bacarıq, səriştə və təcrübənin qiymətləndirilməsi üçün
                    müvafiq ixtisas üzrə tapşırıqvermə üsulu ilə praktiki
                    imtahan həyata keçirilir.
                  </li>

                  <li>
                    Praktiki imtahanda tapşırıqların yerinə yetirilməsi üçün
                    vaxt məhdudiyyəti yoxdur. Lakin bəzi ixtisas modullarından
                    asılı olaraq Qiymətləndirmə Komissiyası tərəfindən
                    əvvəlcədən vaxt intervalı müəyyənləşdirilə bilər.
                  </li>

                  <li>
                    Praktiki imtahan Qiymətləndirmə Komissiyası tərəfindən
                    müvafiq qeydlər aparılmaqla qiymətləndirilir. Tapşırıqların
                    ən azı 50%-ni düzgün yerinə yetirən ərizəçinin nəticəsi
                    məqbul hesab edilir.
                  </li>
                </ul>
              </li>
            </ol>

            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Tələb olunan sənədlər</h4>

              <p>
                İlkin baxışın aparılması üçün müvafiq ixtisas üzrə bilik,
                bacarıq, səriştə və təcrübəni özündə əks etdirən aşağıdakı
                sənədlərin və materialların təqdim olunması tələb edilir.
              </p>

              <ul className="list-disc pl-8 flex flex-col gap-2">
                <li>Şəxsiyyəti təsdiq edən sənədin surəti;</li>

                <li>
                  Təhsil haqqında dövlət sənədinin surəti (attestat və yaxud
                  diplom);
                </li>

                <li>
                  Bilik, bacarıq, səriştə və təcrübəni əks etdirən sənədlər
                  (fotoşəkillər);
                </li>

                <li>
                  Bilik, bacarıq, səriştə və təcrübənin ərizəçi tərəfindən
                  yazılı təsviri;
                </li>

                <li>Nümunələr (olduğu halda);</li>

                <li>Əmək kitabçası (olduğu halda);</li>

                <li>
                  İş təcrübəsi haqqında arayış və müvafiq sertifikatlar (olduğu
                  halda);
                </li>

                <li>
                  Məcburi dövlət sosial sığorta şəhadətnaməsi (olduğu halda).
                </li>
              </ul>

              <p className="italic">
                Qeyd: İlkin baxış mərhələsindən uğurla keçən ərizəçilərdən
                müvafiq ixtisas üzrə biliklərin qiymətləndirilməsi üçün 100 AZN
                , bacarıq, səristə və təcrübənin qiymətləndirilməsi üçün isə hər
                modul üçün 80 AZN məbləğində ödəniş qəbzi tələb olunur. Ödənişlə
                bağlı təlimatla{" "}
                <Link
                  className="text-textPrimary italic hover:underline"
                  href="https://tkta.edu.az/files/video/v%C9%99t%C9%99ndaşlar%20üçün%20öd%C9%99niş%20t%C9%99limat%20v%C9%99r%C9%99qi.pdf"
                >
                  buradan
                </Link>{" "}
                tanış ola bilərsiniz.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="registration"></TabsContent>

        <TabsContent value="partners"></TabsContent>
      </Tabs>
    </section>
  );
}
