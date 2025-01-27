import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import Link from "next/link";

export default function Accreditation() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center w-full px-[112px]">
        Təlim və metodologiya
      </h1>

      <div className="px-16 flex flex-col gap-4 text-justify">
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
          dəstək göstərir. Bu zamana qədər 20-dən çox ali təhsil müəssisəsinə və
          4-dən çox orta ixtisas təhsili müəssisəsinə daxili və xarici keyfiyyət
          təminatı ilə əlaqəli müxtəlif təlimlər təşkil olunub və iştirakçılar
          sertifikatla təltif olunublar. Onu da qeyd etmək lazımdır ki, şöbənin
          metodiki dəstək fəaliyyəti çərçivəsində 1 ali təhsil müəssisəsinə
          metodiki və 1 ali təhsil müəssisəsinə qrant layihəsi çərivəsində
          xarici keyfiyyət təminatı nöqteyi-nəzərdən dəstək göstərilib.
        </div>

        <div>
          Təlim və metodologiya şöbəsi keyfiyyət təminatı mövzusunda fərdlərin
          səriştələrinin artırılması məqsədi ilə xarici ölkələrdən mütəxəssislər
          cəlb etməklə konfrans, müşavirə, seminar, təlim və digər tədbirlər
          təşkil edir. Şöbə institusional və proqram akkreditasiya
          qiymətləndirilməsi aparacaq Akkreditasiya Komissiyalarının sədr və
          üzvləri üçün məlumatlandırıcı sessiyalar təşkil edir.
        </div>

        <div>
          Müvafiq qanunvericiliyə uyğun olaraq hər bir təhsil səviyyəsi və
          pilləsi üzrə tədris aparan tabeliyindən, təşkilati hüquqi formasından
          və mülkiyyətindən asılı olmadan bütün təhsil müəssisələrini müvafiq
          istiqamətlər üzrə təlim xidmətlərinin göstərilməsinə dair əməkdaşlığa
          dəvət edirik. Əməkdaşlıq etmək arzusunda olan və (və ya) daha ətraflı
          məlumat almaq üçün{" "}
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
    </section>
  );
}
