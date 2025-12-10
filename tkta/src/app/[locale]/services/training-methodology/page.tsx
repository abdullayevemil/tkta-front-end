import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function TrainingAndMethodology() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-4xl text-center w-full px-4 md:px-16 pt-16">
        TƏLİM VƏ METODOLOGİYA
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-4 md:px-16 flex flex-col gap-16 text-justify"
      >
        <TabsList className="flex flex-col md:flex-row justify-evenly relative">
          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="general-information"
          >
            Ümumi məlumat
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="support"
          >
            Təlim və metodoloji dəstək
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="documentation"
          >
            Metodoloji sənədlər
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="expert-preparation"
          >
            Ekspert hazırlığı və qeydiyyatı
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="qualification-ambassador"
          >
            Keyfiyyət elçisi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general-information">
          <div className="flex flex-col gap-4 text-justify">
            <div>
              Təhsildə Keyfiyyət Təminatı Agentliyi öz{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary italic hover:underline"
                href="https://e-qanun.az/framework/44056"
              >
                Nizamnaməsinə
              </Link>{" "}
              uyğun olaraq təhsil müəssisələrinin akkreditasiyasının həyata
              keçirilməsi üçün tövsiyələr hazırlayır və təlimlər təşkil edir.
              Agentlik həmçinin təhsil müəssisələrində daxili keyfiyyət təminatı
              sistemlərinin qurulması və inkişaf etdirilməsi ilə bağlı metodiki
              dəstək göstərir. Bu zamana qədər 20-dən çox ali təhsil
              müəssisəsinə və 4-dən çox orta ixtisas təhsili müəssisəsinə daxili
              və xarici keyfiyyət təminatı ilə əlaqəli müxtəlif təlimlər təşkil
              olunub və iştirakçılar sertifikatla təltif olunublar. Onu da qeyd
              etmək lazımdır ki, şöbənin metodiki dəstək fəaliyyəti çərçivəsində
              1 ali təhsil müəssisəsinə metodiki və 1 ali təhsil müəssisəsinə
              qrant layihəsi çərivəsində xarici keyfiyyət təminatı
              nöqteyi-nəzərdən dəstək göstərilib.
            </div>

            <div>
              Təlim və metodologiya şöbəsi keyfiyyət təminatı mövzusunda
              fərdlərin səriştələrinin artırılması məqsədi ilə xarici ölkələrdən
              mütəxəssislər cəlb etməklə konfrans, müşavirə, seminar, təlim və
              digər tədbirlər təşkil edir. Şöbə institusional və proqram
              akkreditasiya qiymətləndirilməsi aparacaq Akkreditasiya
              Komissiyalarının sədr və üzvləri üçün məlumatlandırıcı sessiyalar
              təşkil edir.
            </div>

            <div>
              Müvafiq qanunvericiliyə uyğun olaraq hər bir təhsil səviyyəsi və
              pilləsi üzrə tədris aparan tabeliyindən, təşkilati hüquqi
              formasından və mülkiyyətindən asılı olmadan bütün təhsil
              müəssisələrini müvafiq istiqamətlər üzrə təlim xidmətlərinin
              göstərilməsinə dair əməkdaşlığa dəvət edirik. Əməkdaşlıq etmək
              arzusunda olan və (və ya) daha ətraflı məlumat almaq üçün{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary italic hover:underline"
                href="mailto:info@tkta.edu.az"
              >
                info@tkta.edu.az
              </Link>{" "}
              elektron poçt ünvanı vasitəsilə əlaqə saxlaya bilərsiniz.
            </div>
          </div>
        </TabsContent>

        <TabsContent value="support">
          <div className="flex flex-col gap-4 text-justify">
            <p>
              Təhsildə Keyfiyyət Təminatı Agentliyi (TKTA) öz{" "}
              <Link
                href="https://e-qanun.az/framework/44056"
                className="text-textPrimary italic"
              >
                Nizamnaməsinə
              </Link>{" "}
              uyğun olaraq təhsil müəssisələrinin akkreditasiyasının həyata
              keçirilməsi üçün metodoloji dəstək materialları hazırlayır və
              çoxmodullu təlimlər təşkil edir. Agentlik həmçinin təhsil
              müəssisələrində daxili keyfiyyət təminatı sistemlərinin qurulması
              və inkişaf etdirilməsi ilə bağlı metodiki dəstək göstərir. Bu
              vaxta qədər onlarla ali təhsil müəssisəsinə, 6 peşə təhsili
              müəssisəsinə və 4 orta ixtisas təhsili müəssisəsinə daxili və
              xarici keyfiyyət təminatı ilə əlaqəli müxtəlif təlimlər təşkil
              olunub və iştirakçılar sertifikatla təltif olunublar.
            </p>

            <p>
              Təlim və metodologiya şöbəsi dünyada tətbiq edilən qabaqcıl təhsil
              ənənələrinin təhsil sistemimizə tətbiqi və təhsildə keyfiyyət
              təminatı mövzusunda fərdlərin səriştələrinin artırılması məqsədi
              ilə xarici ölkələrdən də mütəxəssislər cəlb etməklə konfrans,
              müşavirə, seminar, təlim və digər tədbirlər təşkil edir.
            </p>

            <p>
              Şöbə öz fəaliyyəti çərçivəsində institusional və proqram
              akkreditasiya qiymətləndirilməsini həyata keçirən akkreditasiya
              komissiyalarının sədr və üzvləri üçün məlumatlandırıcı sessiyalar
              təşkil edir.
            </p>

            <p>
              Müvafiq qanunvericiliyin tələblərinə uyğun olaraq hər bir təhsil
              səviyyəsi və pilləsi üzrə tədris aparan tabeliyindən, təşkilati
              hüquqi formasından və mülkiyyətindən asılı olmayaraq bütün təhsil
              müəssisələrini müvafiq istiqamətlər üzrə təlim xidmətlərindən
              yararlanmaq üçün bizimlə əməkdaşlığa dəvət edirik. Əməkdaşlıq
              etmək arzusunda olanlar və ya ətraflı məlumat almaq istəyənlər
              <Link href="mailto:info@tkta.edu.az">info@tkta.edu.az</Link>{" "}
              elektron poçt ünvanı vasitəsilə əlaqə saxlaya bilər.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="documentation"></TabsContent>

        <TabsContent value="expert-preparation">
          <div className="fw-full flex flex-col gap-6 text-justify">
            <div className="w-full flex flex-col gap-3 text-justify">
              <h2 className="text-lg text-center font-semibold text-textPrimary">
                Ali təhsil müəssisələri üçün ekspert təlimləri
              </h2>

              <p>
                Azərbaycan Respublikası Prezidentinin 29 dekabr 2019-cu il
                tarixli 907 nömrəli Fərmanı ilə təsdiq edilmiş “Təhsildə
                Keyfiyyət Təminatı Agentliyinin Nizamnaməsi”nin və Azərbaycan
                Respublikası Nazirlər Kabinetinin 14 dekabr 2020-ci il tarixli
                493 nömrəli qərarı ilə təsdiqlənmiş “Təhsil müəssisələrinin
                akkreditasiyası Qaydaları”nın müvafiq müddəalarına uyğun olaraq
                ölkədə fəaliyyət göstərən təhsil müəssisələrinin akkreditasiya
                qiymətləndirilməsinin həyata keçirilməsi nəzərdə tutulur.{" "}
              </p>
              <p>
                Təhsil müəssisələrinin akkreditasiya qiymətləndirilməsi Təhsildə
                Keyfiyyət Təminatı Agentliyi (TKTA) tərəfindən təşkil edilən və
                ödənişli əsaslarla fəaliyyət göstərən sertifikatlaşdırılmış
                müstəqil ekspertlərdən ibarət Akkreditasiya Komissiyası
                tərəfindən həyata keçirilir.
              </p>
              <p>
                Akkreditasiya komissiyaları üçün ekspertlərin seçilməsi və
                təlimlərə cəlb edilməsi Agentliyin Təlim və metodologiya şöbəsi
                tərəfindən ira edilir. Bugünə qədər ali təhsil müəssisələrinin
                akkreditasiya qiymətləndirilməsi üçün təşkil edilən ekspert
                bankına 1000-dən çox namizəd müraciət edib. Təlimlər 3 moduldan
                ibarətdir və interaktiv tədris metodları əsasında təşkil edilir.
                Təlimlərdə “Ali təhsil müəssisəsinin institusional
                akkreditasiyası üzrə qiymətləndirmə Meyarları” və “Ali təhsil
                müəssisəsinin proqram akkreditasiyası üzrə qiymətləndirmə
                Meyarları” və keyfiyyət təminatı ilə bağlı digər məsələlər
                haqqında geniş məlumat verilir və gələcəkdə ali təhsil
                müəssisələrinin akkreditasiya prosesinə cəlb olunacaq
                ekspertlərin mövcud sahədə bilik və bacarıqlarının artırılmasına
                dəstək göstərilir.{" "}
              </p>
            </div>

            <div className="w-full flex flex-col gap-3 text-justify">
              <h2 className="text-lg text-center font-semibold text-textPrimary">
                Ekspertin vəzifə öhədliyi
              </h2>

              <p>
                Akkreditasiya Komissiyasının fəaliyyətində iştirak etmək və
                müvafiq qanunvericiliyin tələblərinə uyğun olaraq təhsil
                müəssisələrinin fəaliyyətinin və təhsil proqramlarının icrasının
                obyektiv və qərəzsiz qiymətləndirərək tələb olunan keyfiyyətdə
                Yekun Hesabatın hazırlanmasında iştirak etmək.
              </p>
            </div>

            <div className="w-full flex flex-col gap-3 text-justify">
              <h2 className="text-lg text-center font-semibold text-textPrimary">
                Ekspertin məsuliyyəti
              </h2>

              <ol className="list-decimal list-inside flex flex-col gap-2">
                <li>
                  Akkreditasiya prosesinə hazırlıq mərhələsində Agentlik
                  tərəfindən təşkil olunan müvafiq təlimlərdə iştirak etmək
                </li>

                <li>
                  Təhsil müəssisəsinin Özünütəhlil Hesabatını və əlavə olunan
                  digər müvafiq sənədləri təhlil etmək
                </li>

                <li>
                  Təhsil müəssisəsinin Özünütəhlil Hesabatında və əlavə olunan
                  digər müvafiq sənədlərdə göstərilən məlumatların məsafədən və
                  ya yerində qiymətləndirməsini həyata keçirmək
                </li>

                <li>
                  Təhsil müəssisəsinin fəaliyyətində maraqlı şəxslər (tələbələr,
                  məzunlar, müəssisənin işçi heyəti, işəgötürənlər və s.) ilə
                  müsahibələr keçirmək
                </li>

                <li>Yekun Hesabatı hazırlayıb Agentliyə təqdim etmək</li>

                <li>
                  Akkreditasiya qiymətləndirilməsi zamanı qanunazidd
                  fəaliyyətlər aşkar etdikdə, bu barədə Agentliyə məlumat vermək
                </li>

                <li>
                  Əsas prosessual məsələlərin müzakirəsinə dair sənədləşməni
                  təmin etmək
                </li>

                <li>
                  Yekun Hesabatın elektron surətini müzakirə üçün “Təhsil
                  Mərkəzləşdirilmiş İnformasiya Sistemi”ndə (TMİS) “Təhsil
                  müəssisələrinin akkreditasiyası” elektron informasiya
                  altsisteminə yükləmək və təsdiq olunmuş surətini Agentliyə
                  təqdim etmək
                </li>

                <li>
                  Akkreditasiya proses ilə bağlı razılaşdırılmış son icra
                  tarixlərinə riayət etmək
                </li>

                <li>
                  Təhsil müəssisəsinin apellyasiya şikayəti zamanı dinləmələrdə
                  iştirak etmək və Komissiyanın fəaliyyəti barədə Apellyasiya
                  Komissiyasına hesabat vermək
                </li>

                <li>
                  Apellyasiya Komissiyasının qərarına əsasən Yekun Hesabata
                  müvafiq dəyişikliklər etmək və bu barədə Agentliyi
                  məlumatlandırmaq
                </li>
              </ol>
            </div>

            <div className="w-full flex flex-col gap-3 text-justify">
              <h2 className="text-lg text-center font-semibold text-textPrimary">
                Namizədə olan tələblər
              </h2>

              <ol className="list-decimal list-inside flex flex-col gap-2">
                <li>Ali təhsilli</li>

                <li>
                  Ali və ya orta ixtisas təhsili sahəsində minimum 3 (üç) il iş
                  təcrübəsi
                </li>

                <li>Daxili keyfiyyət təminatı sahəsində məlumatlı olması</li>

                <li>
                  Strateji planlama və innovasiya, elmi fəaliyyətin təşkili,
                  maliyyə və insan resurslarının idarə olunması, tədrisin
                  təşkili və idarə olunması kimi sahələrin ən azı biri üzrə
                  təcrübəsinin olması
                </li>

                <li>Yüksək səviyyədə Azərbaycan dili biliyi</li>

                <li>
                  Microsoft Office proqramlarını (xüsusilə “Power Point” və
                  “Excel”) yüksək səviyyədə bilmək və internet resurslarından
                  istifadə bacarığı
                </li>

                <li>
                  Effektiv şifahi və yazılı peşəkar kommunikasiya bacarığı
                </li>

                <li>Analitik, strateji düşünmə və problem həlletmə bacarığı</li>

                <li>Monitorinq və qiymətləndirmə bacarığı</li>

                <li>Təşkilatçılıq bacarığı</li>
              </ol>

              <h3 className="font-bold">Qeyd: </h3>

              <ol>
                <li>
                  Seçilmiş ekspertlər xidməti müqavilə əsasında fəaliyyətə cəlb
                  olunurlar
                </li>

                <li>
                  Akkreditasiya Komissiyasının fəaliyyətində iştirak etməyə haqq
                  qazanmış namizədlərə əlavə təlimlər keçirilir və onlar
                  sertifikatlaşdırılır
                </li>
              </ol>

              <p>
                Ekspert bankına üzv olmaq istəyənlər{" "}
                <Link
                  className="text-textPrimary italic hover:underline"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdqy9L670YACFnFtuezrOl9MO6x4ut-h6UIcR-DAvyIMWEUuQ/viewform"
                  target="blank"
                  rel="noopener"
                >
                  link
                </Link>{" "}
                vasitəsi ilə qeydiyyatdan keçə bilər.
              </p>

              <p className="font-bold">
                QEYD: Yalnız yuxarıda qeyd edilən tələblərə uyğun olan
                namizədlərlə əlaqə saxlanılacaqdır.
              </p>
            </div>

            <div className="w-full flex flex-col gap-3 text-justify">
              <h2 className="text-lg text-center font-semibold text-textPrimary">
                Peşə təhsil müəssisələri üçün ekspert təlimləri
              </h2>

              <p>
                2024-cü ilin II rübündən etibarən Agentlik peşə təhsil
                müəssisələrinin akkreditasiya prosesinə başlayıb. Bu məqsədlə
                Agentlik ekspertlərin hazırlıq prosesinə başlayıb. Ekspertlərin
                təlimi Təlim və metodologiya şöbəsi tərəfindən aparılır. Qısa
                müddət ərzində ekspert bankına 200-dən çox namizəd müraciət
                edib.
              </p>

              <p>
                Müsahibə əsasında seçilən namizədlər təlimdə iştirak etmək
                hüququ qazanır. Təlim iki moduldan ibarətdir:
              </p>

              <p>
                I modul çərçivəsində iştirakçılara “Peşə təhsili müəssisəsinin
                institusional akkreditasiyası üzrə qiymətləndirmə meyarları” və
                “Proqram akkreditasiyası üzrə qiymətləndirmə meyarları”, ümumi
                akkreditasiya prosesi, Akkreditasiya Komissiyasının
                səlahiyyətləri, hüquqları və vəzifələri haqqında ətraflı məlumat
                təqdim olunur.
              </p>

              <p>
                II modul isə simulyasiya əsaslı praktiki məşğələlər şəklində
                təşkil edilir. Bu mərhələdə məqsəd namizədlərin bu sahədə nəzəri
                biliklərini artırmaq və praktiki səriştələrini inkişaf etdirmək,
                akkreditasiya qiymətləndirılməsi zamanı qarşılaşdıqları müxtəlif
                situasiyaları effektiv həll etmək bacarığı qazandırmaqdır.
              </p>

              <h3 className="font-semibold">Namizədlərin vəzifə öhdəliyi:</h3>

              <p>
                Akkreditasiya Komissiyasının fəaliyyətində iştirak etmək və
                müvafiq qanunvericiliyin tələblərinə uyğun olaraq peşə təhsil
                müəssisələrinin fəaliyyətinin və təhsil proqramlarının icrasının
                qiymətləndirilməsini apararaq tələb olunan keyfiyyətdə Yekun
                Hesabatın hazırlanmasında iştirak etmək.
              </p>

              <h3 className="font-semibold">Namizədlər üçün tələblər:</h3>

              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>Ali təhsilli</li>
                <li>
                  Peşə təhsili sahəsində mövcud qanunvericilik, dövlət
                  proqramları, qaydalar və tənzimləmələr haqqında biliklər
                </li>

                <li>
                  Peşə təhsili sahəsində minimum 3 il iş təcrübəsi (rəhbər
                  vəzifədə çalışmaq və peşə təhsili sahəsində pedaqoji təcrübə
                  arzuolunandır)
                </li>

                <li>
                  Peşə təhsili müəssisələrində keyfiyyətin qiymətləndirilməsi
                  sahəsində beynəlxalq təcrübəni araşdırmaq bacarığı
                </li>

                <li>
                  Azərbaycan dilində peşəkar şifahi və yazılı kommunikasiya
                  bacarığı;
                </li>

                <li>Analitik düşünmə və problem həlletmə bacarığı;</li>

                <li>
                  Statistik məlumatların toplanması, təhlili və
                  qiymətləndirilməsi bacarığı
                </li>

                <li>Təşkilatçılıq bacarığı</li>

                <li>Komandada işləmək bacarığı</li>

                <li>Zərurət olduqda, ölkə üzrə ezamiyyətdə olmaq imkanı</li>

                <li>Minimum yaş həddi 25 yaş</li>
              </ul>

              <p>
                Peşə təhsil müəssisələrinin akkreditasiya qiymətləndirilməsini
                icra etmək üçün təşkil olunan ekspert bankına üzv olmaq
                istəyənlər{" "}
                <Link
                  href="https://forms.office.com/r/9vudjSgfZc"
                  className="italic text-textPrimary hover:underline"
                >
                  link
                </Link>{" "}
                vasitəsi ilə qeydiyyatdan keçə bilərlər.
              </p>

              <p className="font-bold">
                QEYD: Yalnız yuxarıda qeyd edilən tələblərə uyğun olan
                namizədlərlə əlaqə saxlanılacaqdır.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="qualification-ambassador">
          <div className="flex flex-col gap-4 text-justify">
            <p>
              Təhsildə keyfiyyətin artırılması və tələbələrin bu prosesdə fəal
              iştirakını təmin etmək məqsədilə TKTA-nın Təlim və metodologiya
              şöbəsi “Keyfiyyət elçisi” adlı yeni təlimə başlayıb.
            </p>

            <p>
              Keyfiyyətli tədris prosesinin təşkilində tələbələr təkcə bilik
              alan tərəf deyil, eyni zamanda təhsildə keyfiyyət tələblərinin
              formalaşması, tədris prosesinin təkmilləşdirilməsi və
              institusional mühitin müasirləşdirilməsində fəal iştirak edən əsas
              maraqlı tərəflərdən biridir. Onların keyfiyyət mədəniyyətinə
              verdikləri töhfə və tənqidi düşünmə bacarıqları təhsil
              müəssisələrinin davamlı inkişafına zəmin yaradır.{" "}
            </p>

            <p>
              Təlim çərçivəsində müxtəlif universitetlərdən seçilmiş tələbələr
              ali təhsil müəssisələrinin qiymətləndirilməsində tətbiq edilən
              institusional və proqram akkreditasiya meyarları ilə yaxından
              tanış olublar.
            </p>

            <p>
              “Keyfiyyət elçisi” təlim proqramına qoşulmaq istəyən təhsilalanlar
              TKTA-nın ildə bir dəfə ölkədə fəaliyyət göstərən bütün ali təhsil
              müəssisələrini məlumatlandırmaqla təşkil etdiyi “Ali təhsil
              müəssisələrində keyfiyyət mədəniyyətinin formalaşmasında
              təhsilalanların rolu” mövzusunda esse müsabiqəsində iştirak
              etməlidirlər. Müsabiqədə essesi uğurlu hesab edilən namizədlər
              Agentliyin Təlim və metodologiya şöbəsi tərəfindən təşkil edilən
              məlumatlandırıcı birinci modul (onlayn) təliminə qoşulur və
              təlimin sonunda qrup halında akkreditasiya qiymətləndirilməsi
              mövzusunda tapşırıq verilir.
            </p>

            <p>
              İkinci modulunda isə tələbələr simulyasiya görüşünə dəvət edilərək
              birinci modul təlimi zamanı onlara verilmiş tapşırığın həllini
              təqdim edirlər. İştirakçılar təhsil müəssisələrində mövcud
              vəziyyəti institusional akkreditasiya qiymətləndirmə meyarlarında
              əks olunan indikatorlar əsasında təhlil etməli, təqdim olunan
              suallara əsaslandırılmış cavablar verməli və əldə etdikləri
              nəticələri təqdim etməlidirlər. Təqdimat mərhələsində tələbələr
              şərti ali təhsil müəssisəsi üzrə verilmiş konkret nümunələr
              əsasında qiymətləndirmə apararaq təhsil müəssisələrində keyfiyyət
              siyasətinin optimal təşkili üçün perspektiv fəaliyyətin
              konturlarını müəyyənləşdirməyə çalışırlar. Beləliklə, tələbələr
              əldə etdikləri akademik bilikləri real təcrübə ilə əlaqələndirir,
              müasir təhsil standartlarını dərindən dərk edərək keyfiyyətli
              təhsil mühitinin təmin olunmasında fəal mövqe tutmalarına imkan
              verir.
            </p>

            <p>
              İkinci modulu uğurla başa vuran təhsilalanlar sertifikatlaşdırılır
              və onların təhsil aldıqları universitetlərində “Keyfiyyət elçisi”
              qismində fəaliyyət göstərərək keyfiyyətli təhsil mühitinin
              təşkilinə və ali təhsil müəssisələrinin institusional və proqram
              akkreditasiya qiymətləndirilməsini aparacaq akkreditasiya
              komissiyalarının tərkibində müstəqil bir üzv kimi çalışmağa cəlb
              edilirlər.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <Image
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759169651/WhatsApp_Image_2025-08-20_at_09.01.11_klgpog.jpg"
                alt=""
                width={1200}
                height={1200}
                className="w-full rounded-xl"
              />

              <Image
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759169651/WhatsApp_Image_2025-08-20_at_09.01.12_1_g5yeaq.jpg"
                alt=""
                width={1200}
                height={1200}
                className="w-full rounded-xl"
              />

              <Image
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759169652/WhatsApp_Image_2025-08-20_at_09.01.12_swofyd.jpg"
                alt=""
                width={1200}
                height={1200}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
