import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import Link from "next/link";

export default function ExpertsRegistration() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Ekspertların Qeydİyyatı
      </h1>

      <div className="px-16 flex flex-col gap-4 text-justify">
        <div>
          Azərbaycan Respublikası Prezidentinin 29 dekabr 2019-cu il tarixli 907
          nömrəli Fərmanı ilə təsdiq edilmiş “Təhsildə Keyfiyyət Təminatı
          Agentliyinin Nizamnaməsi”nin və Azərbaycan Respublikası Nazirlər
          Kabinetinin 14 dekabr 2020-ci il tarixli 493 nömrəli qərarı ilə
          təsdiqlənmiş “Təhsil müəssisələrinin akkreditasiyası Qaydaları”nın
          müvafiq müddəalarına uyğun olaraq təhsil müəssisələrinin
          akkreditasiyasının həyata keçirilməsi nəzərdə tutulub.
        </div>

        <div>
          Təhsil müəssisələrinin akkreditasiya qiymətləndirilməsi Agentlik
          tərəfindən yaradılan və ödənişli əsaslarla fəaliyyət göstərən
          sertifikatlaşdırılmış ekspertlərdən ibarət olan Akkreditasiya
          Komissiyası tərəfindən həyata keçirilir.
        </div>

        <div>
          Akkreditasiya Komissiyası üçün ekspertlərin hazırlıq prosesi Təlim və
          metodologiya şöbəsi tərəfindən aparılır. Bugünə qədər ekspert bankına
          1000-dən çox namizəd müraciət edib. Təlimlər 3 moduldan ibarətdir və
          interaktiv tədris metodları əsasında təşkil edilir. Təlimlərdə “Ali
          təhsil müəssisəsinin institusional akkreditasiyası üzrə qiymətləndirmə
          Meyarları” və “Ali təhsil müəssisəsinin proqram akkreditasiyası üzrə
          qiymətləndirmə Meyarları” və keyfiyyət təminatı ilə bağlı digər
          məsələlər haqqında geniş məlumat verilir və gələcəkdə təhsil
          müəssisələrinin akkreditasiya prosesinə cəlb olunacaq ekspertlərin
          mövcud sahədə bilik və bacarıqlarının artırılmasına dəstək göstərilir.
        </div>

        <h3 className="font-bold">Vəzifə öhədliyi</h3>

        <div>
          Akkreditasiya Komissiyasının fəaliyyətində iştirak etmək və müvafiq
          qanunvericiliyin tələblərinə uyğun olaraq təhsil müəssisələrinin
          fəaliyyətinin və təhsil proqramlarının icrasının qiymətləndirilməsini
          apararaq tələb olunan keyfiyyətdə Yekun Hesabatın hazırlanmasında
          iştirak etmək.
        </div>

        <h3 className="font-bold">Məsuliyyəti</h3>

        <ol className="list-decimal pl-6 flex flex-col gap-3">
          <li>
            Akkreditasiya prosesinə hazırlıq mərhələsində Agentlik tərəfindən
            təşkil olunan müvafiq təlimlərdə iştirak etmək;
          </li>

          <li>
            Təhsil müəssisəsinin Özünütəhlil Hesabatını və əlavə olunan digər
            müvafiq sənədləri təhlil etmək;
          </li>

          <li>
            Təhsil müəssisəsinin Özünütəhlil Hesabatında və əlavə olunan digər
            müvafiq sənədlərdə göstərilən məlumatların məsafədən və ya yerində
            qiymətləndirməsini həyata keçirmək;
          </li>

          <li>
            Təhsil müəssisəsinin fəaliyyətində maraqlı şəxslər (tələbələr,
            məzunlar, müəssisənin işçi heyəti, işəgötürənlər və s.) ilə
            müsahibələr keçirmək;
          </li>

          <li>Yekun Hesabatı hazırlayıb Agentliyə təqdim etmək;</li>

          <li>
            Akkreditasiya qiymətləndirilməsi zamanı qanunauyğunsuzluq aşkar
            etdikdə, bu barədə Agentliyə məlumat vermək;
          </li>

          <li>
            Əsas prosessual məsələlərin müzakirəsinə dair sənədləşməni təmin
            etmək;
          </li>

          <li>
            Yekun Hesabatın elektron surətini müzakirə üçün “Təhsil
            Mərkəzləşdirilmiş İnformasiya Sistemi”ndə (TMİS) “Təhsil
            müəssisələrinin akkreditasiyası” elektron informasiya altsisteminə
            yükləmək və təsdiq olunmuş surətini Agentliyə təqdim etmək;
          </li>

          <li>
            Akkreditasiya proses ilə bağlı razılaşdırılmış son icra tarixlərinə
            riayət etmək;
          </li>

          <li>
            Təhsil müəssisəsinin apellyasiya şikayəti zamanı dinləmələrdə
            iştirak etmək və Komissiyanın fəaliyyəti barədə Apellyasiya
            Komissiyasına hesabat vermək;
          </li>

          <li>
            Apellyasiya Komissiyasının qərarına əsasən Yekun Hesabata müvafiq
            dəyişikliklər etmək və bu barədə Agentliyi məlumatlandırmaq.
          </li>
        </ol>

        <h4 className="font-bold">Namizədə olan tələblər</h4>

        <ol className="list-decimal pl-6 flex flex-col gap-3">
          <li>Ali təhsilli;</li>
          
          <li>
            Ali və ya orta ixtisas təhsili sahəsində minimum 3 (üç) il iş
            təcrübəsi;
          </li>
          
          <li>Daxili keyfiyyət təminatı sahəsində məlumatlı olması;</li>
          
          <li>
            Strateji planlama və innovasiya, elmi fəaliyyətin təşkili, maliyyə
            və insan resurslarının idarə olunması, tədrisin təşkili və idarə
            olunması kimi sahələrin ən azı biri üzrə təcrübəsinin olması;
          </li>
          
          <li>Yüksək səviyyədə Azərbaycan dili biliyi;</li>
          
          <li>
            Microsoft Office proqramlarını (xüsusilə{" "}
            <span className="font-bold">“Power Point”</span> və{" "}
            <span className="font-bold">“Excel”</span>) yüksək səviyyədə bilmək
            və internet resurslarından istifadə bacarığı;
          </li>
          
          <li>Effektiv şifahi və yazılı peşəkar kommunikasiya bacarığı;</li>
          
          <li>Analitik, strateji düşünmə və problem həlletmə bacarığı;</li>
          
          <li>Monitorinq və qiymətləndirmə bacarığı;</li>
          
          <li>Təşkilatçılıq bacarığı.</li>
        </ol>

        <h4 className="font-bold">Qeyd</h4>

        <ol className="list-decimal pl-6 flex flex-col gap-3">
          <li>
            Seçilmiş ekspertlər xidməti müqavilə əsasında fəaliyyətə cəlb
            olunacaqdır.
          </li>

          <li>
            Akkreditasiya Komissiyasının fəaliyyətində iştirak etməyə haqq
            qazanmış namizədlərə təlimlərin keçirilməsi və onların
            sertifikatlaşdırılması planlaşdırılır.
          </li>
        </ol>

        <div>
          Ekspert bankına üzv olmaq üçün link vasitəsi ilə qeydiyyatdan keçin.
        </div>

        <div className="font-bold">
          QEYD: Yalnız yuxarıda qeyd edilən tələblərə uyğun olan namizədlərlə
          əlaqə saxlanılacaqdır.
        </div>

        <h2 className="text-textPrimary text-xl font-semibold text-center">
          Təhsil müəssisələrinə təlim və metodoloji dəstək xidmətləri
        </h2>

        <div>
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
            dəstək göstərir. Bu zamana qədər 20-dən çox ali təhsil müəssisəsinə
            və 4-dən çox orta ixtisas təhsili müəssisəsinə daxili və xarici
            keyfiyyət təminatı ilə əlaqəli müxtəlif təlimlər təşkil olunub və
            iştirakçılar sertifikatla təltif olunublar. Onu da qeyd etmək
            lazımdır ki, şöbənin metodiki dəstək fəaliyyəti çərçivəsində 1 ali
            təhsil müəssisəsinə metodiki və 1 ali təhsil müəssisəsinə qrant
            layihəsi çərivəsində xarici keyfiyyət təminatı nöqteyi-nəzərdən
            dəstək göstərilib.
          </div>

          <div>
            Təlim və metodologiya şöbəsi keyfiyyət təminatı mövzusunda fərdlərin
            səriştələrinin artırılması məqsədi ilə xarici ölkələrdən
            mütəxəssislər cəlb etməklə konfrans, müşavirə, seminar, təlim və
            digər tədbirlər təşkil edir.
          </div>

          <div>
            Şöbə institusional və proqram akkreditasiya qiymətləndirilməsi
            aparacaq Akkreditasiya Komissiyalarının sədr və üzvləri üçün
            məlumatlandırıcı sessiyalar təşkil edir.
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
      </div>
    </section>
  );
}
