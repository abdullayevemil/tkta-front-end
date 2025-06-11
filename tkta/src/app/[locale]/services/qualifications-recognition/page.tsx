import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import ApplicationForm from "@/assets/images/qualifications-recognition/application-form.png";
import ConnectToBank from "@/assets/images/qualifications-recognition/connect-to-bank.png";
import ProfilePhoto1 from "@/assets/images/qualifications-recognition/profile-photo1.jpeg";
import ProfilePhoto2 from "@/assets/images/qualifications-recognition/profile-photo2.jpeg";
import ProfilePhoto3 from "@/assets/images/qualifications-recognition/profile-photo3.jpeg";

export default function HomePage() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-5xl text-center">
        Xarİcİ kvalİfİkasİyaların tanınması
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList className="justify-evenly">
          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="general-information"
          >
            Ümumi məlumat
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="required-documents"
          >
            Tələb edilən sənədlər
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="recognition-certificate"
          >
            Tanınma haqqında şəhadətnamə
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="legalisation"
          >
            Leqallaşdırma
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="personnel-bank"
          >
            Kadr bankı
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="recongition-types"
          >
            Tanınma növləri
          </TabsTrigger>
        </TabsList>
        <TabsContent className="text-justify" value="general-information">
          <div className="flex flex-col gap-4">
            <div className="font-bold">
              Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust
              tarixli, 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici
              dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması
              Qaydaları”na uyğun olaraq, Təhsildə Keyfiyyət Təminatı Agentliyi
              tərəfindən tam orta, orta ixtisas təhsil pilləsi, bakalavriat
              (əsas (baza ali) tibb təhsili) və magistratura səviyyələri üzrə
              kvalifikasiyaların tanınması həyata keçirilir.
            </div>

            <div>
              Tanınma xidməti ödənişlidir. Azərbaycan Respublikasının Nazirlər
              Kabinetinin 24 dekabr 2020-ci il tarixli, 507 nömrəli Qərarı ilə
              təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid
              kvalifikasiyalarının tanınması xidmətləri ilə əlaqədar digər
              xidmətlərin siyahısı və göstərilən xidmətlərə görə ödəniləcək
              haqların məbləği”nə əsasən ərizəçilər xarici dövlətlərin ali
              təhsilə aid kvalifikasiyalarının tanınması üzrə sənədlərin qəbulu
              və ekspertizasının keçirilməsi üçün 250 AZN, xarici dövlətlərin
              ali təhsilə aid kvalifikasiyalarının tanınması haqqında
              şəhadətnamənin itirilməsi və ya korlanması halında, dublikat
              şəhadətnamənin əldə olunması üçün isə 20 AZN xidmət haqqı
              ödəməlidirlər.
            </div>

            <div>
              Qeydiyyat elektron ərizə sistemi vasitəsilə həyata keçirilir.
              Qeydiyyat zamanı təqdim edilən elektron poçt və mobil nömrə daim
              istifadə edilən olmalıdır. Belə ki, ərizələrlə bağlı yeniliklər bu
              vasitələr üzərindən mütəmadi olaraq bildirilməkdədir.
            </div>

            <div className="font-bold">
              DİQQƏT! Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının
              tanınması üçün yekun təhsil sənədini verən ali təhsil müəssisənin
              təhsil alınan ölkənin səlahiyyətli qurumu tərəfindən akkreditə
              olunması başlıca şərtlərdən hesab edilir. Bu səbəbdən,
              vətəndaşların seçdikləri ali təhsil müəssisəsinin dövlət
              akkreditasiyasına sahib olduğuna əmin olmaları tövsiyə olunur!
            </div>

            <div>
              Qeyd edək ki, ENIC-NARIC (Avropa İnformasiya Mərkəzləri-Milli
              Akademik Tanınma üzrə İnformasiya Mərkəzləri) Şəbəkəsinin{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary italic hover:underline"
                href="https://www.enic-naric.net"
              >
                rəsmi internet səhifəsinin
              </Link>{" "}
              müvafiq ölkə üzrə nəzərdə tutulmuş bölməsinə daxil olmaqla (yaxud
              yerli akkreditasiya orqanlarına müraciət etməklə), həmin ölkə
              tərəfindən tanınan və akkreditə olunan ali təhsil müəssisələrinin
              siyahısını əldə etmək mümkündür.
            </div>

            <div>
              Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması
              üzrə{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary italic hover:underline"
                href="https://apply.enic.edu.az/register/"
              >
                Elektron Ərizə Sistemi
              </Link>
            </div>
          </div>
        </TabsContent>

        <TabsContent className="text-justify" value="required-documents">
          <div className="flex flex-col gap-4">
            <div>Tələb edilən sənədlər</div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Orta ixtisas təhsili:</h4>

              <ul className="list-disc pl-8 flex flex-col gap-2">
                <li className="capitalize">
                  Orta ixtisas təhsili haqqında sənəd (diplom) və ona aid
                  apostilin əsli (orjinal nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  Orta ixtisas təhsili haqqında sənədə əlavə (transkript) və ona
                  aid apostilin əsli (orjinal nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  Orta ixtisas təhsili haqqında sənəd (diplomun) və ona aid
                  apostilin notariat qaydada təsdiq olunmuş Azərbaycan dilinə
                  tərcüməsi (rus, ingilis və türk dilləri istisna olmaqla
                  (orjinal nüsxənin rəngli skan versiyası));
                </li>

                <li className="capitalize">
                  Orta ixtisas təhsili haqqında sənədə əlavə (transkript) və ona
                  aid apostilin notariat qaydada təsdiq olunmuş Azərbaycan
                  dilində tərcüməsi (rus, ingilis və türk dilləri istisna
                  olmaqla (orjinal nüsxənin rəngli skan versiyası));
                </li>

                <li className="capitalize">
                  şəxsiyyət vəsiqəsinin hər iki üzünün (xarici ölkə vətəndaşları
                  - daimi/müvəqqəti yaşama icazəsi) (orjinal nüsxənin rəngli
                  skan versiyası);
                </li>

                <li className="capitalize">
                  ümumvətəndaş (xarici) pasportunun ön səhifəsinin və
                  sərhədkeçməni bildirən bütün möhürlü səhifələri) (orjinal
                  nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  hərbi biletin (orjinal nüsxənin rəngli skan versiyası) və ya
                  hərbi xidmətin qeydiyyatı haqqında arayışın elektron surəti.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Bakalavr:</h4>

              <ul className="list-disc pl-8 flex flex-col gap-2">
                <li className="capitalize">
                  ali təhsil haqqında sənəd (diplom) və ona aid apostilin əsli
                  (orjinal nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  ali təhsil haqqında sənədə əlavə (transkript) və ona aid
                  apostilin əsli (orjinal nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  ali təhsil haqqında sənəd (diplomun) və ona aid apostilin
                  notariat qaydada təsdiq olunmuş Azərbaycan dilinə tərcüməsi
                  (rus, ingilis və türk dilləri istisna olmaqla (orjinal
                  nüsxənin rəngli skan versiyası));
                </li>

                <li className="capitalize">
                  ali təhsil haqqında sənədə əlavə (transkript) və ona aid
                  apostilin notariat qaydada təsdiq olunmuş Azərbaycan dilində
                  tərcüməsi (rus, ingilis və türk dilləri istisna olmaqla
                  (orjinal nüsxənin rəngli skan versiyası));
                </li>

                <li className="capitalize">
                  şəxsiyyət vəsiqəsinin hər iki üzünün (xarici ölkə vətəndaşları
                  - daimi/müvəqqəti yaşama icazəsi) (orjinal nüsxənin rəngli
                  skan versiyası);
                </li>

                <li className="capitalize">
                  ümumvətəndaş (xarici) pasportunun ön səhifəsinin və
                  sərhədkeçməni bildirən bütün möhürlü səhifələri) (orjinal
                  nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  hərbi biletin (orjinal nüsxənin rəngli skan versiyası) və ya
                  hərbi xidmətin qeydiyyatı haqqında arayışın elektron surəti.
                </li>
              </ul>
            </div>

            <div>
              Qeyd: Köçürülmə olduğu halda - tədris müddətində
              müəssisələrarası/müəssisədaxili köçürülməya dair rəsmi arayışın
              elektron surəti (skan) tələb olunur.
            </div>

            <div>
              Qeyd: Bakalavriat səviyyəsinə orta ixtisas təhsili haqqında diplom
              əsasında qəbul olunduğunuz halda – həmin diplomun elektron surəti
              (skan) tələb olunur.
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Magistratura:</h4>

              <ul className="list-disc pl-8 flex flex-col gap-2">
                <li className="capitalize">
                  ali təhsil haqqında sənəd (diplom) və ona aid apostilin əsli
                  (orjinal nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  ali təhsil haqqında sənədə əlavə (transkript) və ona aid
                  apostilin əsli (orjinal nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  ali təhsil haqqında sənəd (diplomun) və ona aid apostilin
                  notariat qaydada təsdiq olunmuş Azərbaycan dilinə
                  tərcüməsi.(rus, ingilis və türk dilləri istisna olmaqla
                  (orjinal nüsxənin rəngli skan versiyası));
                </li>

                <li className="capitalize">
                  ali təhsil haqqında sənədə əlavə (transkript) və ona aid
                  apostilin notariat qaydada təsdiq olunmuş Azərbaycan dilində
                  tərcüməsi (rus, ingilis və türk dilləri istisna olmaqla
                  (orjinal nüsxənin rəngli skan versiyası));
                </li>

                <li className="capitalize">
                  şəxsiyyət vəsiqəsinin hər iki üzünün (xarici ölkə vətəndaşları
                  - daimi/müvəqqəti yaşama icazəsi) (orjinal nüsxənin rəngli
                  skan versiyası);
                </li>

                <li className="capitalize">
                  ümumvətəndaş (xarici) pasportunun ön səhifəsinin və
                  sərhədkeçməni bildirən bütün möhürlü səhifələri) (orjinal
                  nüsxənin rəngli skan versiyası);
                </li>

                <li className="capitalize">
                  hərbi biletin (orjinal nüsxənin rəngli skan versiyası) və ya
                  hərbi xidmətin qeydiyyatı haqqında arayışın elektron surəti;
                </li>

                <li className="capitalize">
                  bakalavriat səviyyəsi üzrə ali təhsil haqqında sənəd (diplom)
                  (orjinal nüsxəsinin rəngli skan versiyası);
                </li>
              </ul>
            </div>

            <h4 className="font-bold uppercase">QEYD:</h4>

            <ol className="list-decimal pl-8 flex flex-col gap-1">
              <li className="capitalize">
                Magistratura təhsil səviyyəsi üzrə müraciət olunubsa, bakalavr
                diplomu xarici ali təhsil müəssisəsi tərəfindən verildikdə, ilk
                öncə həmin diplom üzrə kvalifikasiyanın tanınması üçün müraciət
                olunmalıdır.
              </li>
              <li className="capitalize">
                Tanınma üçün tələb olunan sənədlər elektron ərizə vasitəsilə
                müraciətçinin şəxsi kabinetinə əlavə olunmalıdır. Elektron poçt,
                məktub və ya fiziki qaydada təqdim olunan sənədlər icraata
                götürülmür.{" "}
              </li>
              <li className="capitalize">
                Təhsil haqqında sənəd (diplom) və ona əlavə (transkript) tanınma
                üçün müraciət olunmadan verildiyi ölkədə leqallaşdırılmalıdır.
              </li>
              <li className="capitalize">
                Tələb olunan hər bir sənəd, həcmi 5 MB-dan çox olmamaq şərti ilə
                PDF formatında yüklənilməlidir.
              </li>
              <li className="capitalize">
                Tələb olunan hər bir sənəd səhifələri rəngli və oxunaqlı şəkildə
                yüklənilməlidir.
              </li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="recognition-certificate">
          <div className="flex flex-col gap-4">
            <div>
              Ekspertizanın yekununda müsbət rəylə qiymətləndirilmiş
              ərizəçilərə, müvafiq olaraq elektron şəhadətnamə təqdim olunur.
            </div>

            <div>
              İstifadə rahatlığını təmin etmək çərçivəsində Təhsildə Keyfiyyət
              Təminatı Agentliyi tərəfindən təqdim olunmuş sənədlərin
              həqiqiliyini yoxlamaq məqsədilə istifadəyə verilmiş məlumat
              bazasından xarici ali təhsil ixtisasları Azərbaycan Respublikası
              ərazisində tanınmış müvafiq diplom sahibləri barədə məlumat əldə
              etmək mümkündür.
            </div>

            <div>
              Həmin məlumat bazası vasitəsilə, həmçinin, ekspertiza müddətində
              aidiyyəti yerə təqdim etmələri üçün ərizəçilər tərəfindən əldə
              olunmuş müxtəlif növ elektron arayışların da həqiqiliyini yoxlamaq
              mümkündür.
            </div>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://apply.enic.edu.az/e-reference/"
              className="px-4 py-2 text-white bg-textPrimary hover:bg-textPrimary text-base font-semibold w-fit shadow rounded"
            >
              Sənədini yoxla
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="legalisation">
          <div className="flex flex-col gap-4">
            <div>
              Azərbaycan Respublikası Nazirlər Kabinetinin 03.02.2023-cü il
              tarixli qərarı ilə təsdiq olunmuş “Xarici dövlətlərin ali təhsilə
              aid kvalifikasiyalarının tanınması Qaydaları”nın 2.6-cı bəndinə
              əsasən diplom, diplom əlavəsi və qismət tanınması üçün müraciət
              edilmiş akademik transkript sənədləri Azərbaycan Respublikasının
              1994-cü il 8 fevral tarixli 782 nömrəli Qanunu ilə təsdiq edilmiş
              “Azərbaycan Respublikasının Konsul Nizamnaməsi” ilə müəyyən
              edilmiş qaydada və ya{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary italic hover:underline"
                href="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1745003546/qfitt/cnemhhlkvd90pztqaye2.pdf"
              >
                “Xarici rəsmi sənədlərin leqallaşdırılması tələbini ləğv edən
                Konvensiya”
              </Link>
              nın tələblərinə uyğun olaraq leqallaşdırılmalıdır.
            </div>

            <div>
              Konvensiyanın 5-ci maddəsinə əsasən, apostil möhürü diplom və
              transkriptii imzalamış şəxsin imzasının həqiqiliyini, onun
              vəzifəsini və həmin sənədə vurulmuş möhürün və ya ştampın
              həqiqiliyini təsdiq edir.
            </div>

            <div>
              <span className="font-bold">QEYD:</span> Kovensiyaya qoşulmayan
              xarici ölkələrdə alınan ali təhsil sənədləri, sənədi verən ölkənin
              səlahiyyətli qurumunda müvafiq qanunlara uyğun olaraq təsdiq
              edildikdən sonra Azərbaycan Respublikasının həmin ölkədəki
              səfirliyində (və ya konsulluğunda) leqallaşdırılmalıdır.
            </div>

            <div>
              <span className="font-bold">DİQQƏT!</span> Azərbaycan Respublikası
              Nazirlər Kabinetinin 03.02.2023-cü il tarixli 34 nömrəli Qərarı
              ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid
              kvalifikasiyalarının tanınması Qaydalar”na əsasən Azərbaycan
              gənclərinin dövlət proqramları, Azərbaycan Respublikasının Elm və
              Təhsil Nazirliyi ilə xarici dövlətlərin səlahiyyətli orqanları
              arasında imzalanmış beynəlxalq müqavilələr əsasında tələbə
              mübadiləsinə dair hökumətlərarası təqaüd proqramları, dövlət
              tərəfindən müəyyən edilmiş təhsil qrantı proqramları, o cümlədən
              beynəlxalq müqavilələr çərçivəsində Azərbaycan Respublikası
              ərazisində fəaliyyət göstərən xarici ali təhsil müəssisələri
              tərəfindən verilmiş kvalifikasiyalar üzrə təhsil almış tələbələrin
              ali təhsil sənədlərinin leqallaşdırılmasına/apostil şəhadətnaməsi
              əlavə edilməsinə zərurət yoxdur.
            </div>
          </div>
        </TabsContent>

        <TabsContent value="personnel-bank">
          <ol className="flex flex-col gap-4 list-decimal">
            <li>
              Kadr bankı xaricdə ali təhsil almış tələbələrə ölkəmizin əmək
              bazarına giriş imkanını artırmaq, eyni zamanda, işəgötürənlərin
              işaxtaranlarla daha rahat şəkildə əlaqələndirilməsinə töhvə vermək
              məqsədilə Təhsildə Keyfiyyət Təminatı Agentliyi tərəfindən
              yaradılmışdır.
            </li>

            <li>
              Yalnız xaricdə ali təhsil almış və diplomları ölkə ərazisində
              tanınmış vətəndaşlar sözügedən kadr bankına qoşula bilərlər.
            </li>

            <li>
              Kadr bankına qoşulmaq üçün vətəndaşlar elektron ərizə sistemi
              (http://apply.enic.edu.az) üzrə yaratdıqları kabinetə daxil
              olmalıdırlar.
            </li>

            <li>
              <div>
                Kabinetə daxil olduqdan sonra ərizəçilər “Kadr bankına qoşul”
                düyməsinə sıxmalı, tərcümeyi-hallarını və fotoşəkillərini əlavə
                etdikdən sonra müraciətlərini təsdiq etməlidirlər:
              </div>

              <div className="flex flex-col gap-4 p-5">
                <Image
                  src={ApplicationForm}
                  alt="application form sample"
                  width={700}
                  height={700}
                  className="w-5/6"
                />

                <Image
                  src={ConnectToBank}
                  alt="connect to bank sample"
                  width={700}
                  height={700}
                  className="w-5/6"
                />
              </div>
            </li>

            <li>
              Tərcümeyi-halın formatına dair hər hansı məhdudiyyət yoxdur.
              Bununla belə, təqdim edilən sənədlərin standartlara uyğun qaydada
              hazırlanması işəgötürənlər tərəfindən həmin sənədə baxılması
              zamanı mühüm rol oynayır.
            </li>

            <li>
              <div>
                Fotoşəklin 3x4 formatında olması arzuolunandır, lakin məcburi
                deyil. Təqdim olunan fotoşəkillərin çəkilişi zamanı açıq rəngli
                fonlardan istifadə olunması zəruridir. Nümunə:
              </div>

              <div className="flex flex-row gap-4 jusitfy-evenly p-4">
                <Image
                  className="rounded shadow"
                  src={ProfilePhoto1}
                  alt="profile photo sample"
                  width={159}
                  height={212}
                />

                <Image
                  className="rounded shadow"
                  src={ProfilePhoto2}
                  alt="profile photo sample"
                  width={159}
                  height={212}
                />

                <Image
                  className="rounded shadow"
                  src={ProfilePhoto3}
                  alt="profile photo sample"
                  width={159}
                  height={212}
                />
              </div>
            </li>

            <li>
              Təqdim olunan fotoşəkillər tələblərə uyğun olmadıqları və ya
              keyfiyyətsiz olduqları təqdirdə, kadr bankına qoşulmaq üçün edilən
              müraciətlər geri qaytarılır və müraciətçiyə bu barədə bildiriş
              göndərilir.
            </li>

            <li>
              Şəxsi kabinetinizə daxil ola bilmədikdə və ya şəxsi kabinet
              yaratmaq istədikdə, şəxsiyyət vəsiqənizin elektron surəti ilə
              birlikdə Agentliyin info@tkta.edu.az elektron poçt ünvanına
              müraciət etməyiniz xahiş olunur.
            </li>
          </ol>
        </TabsContent>

        <TabsContent value="recongition-types">
          <ul className="flex flex-col gap-6 text-justify">
            <li>
              <span className="font-bold">Tanınma – </span>
              xarici dövlətlərin səlahiyyətli orqanları tərəfindən verilən və
              verildiyi ölkədə ali təhsil pilləsinə qəbul olunmaq və ya ali
              təhsilin növbəti səviyyələri üzrə təhsilini davam etdirmək və (və
              ya) ixtisasına uyğun əmək fəaliyyəti ilə məşğul olmaq hüququ
              verən, həmçinin şəxsin müvafiq standartlara uyğun bilik, bacarıq,
              səriştə və təcrübəyə malik olduğunu təsdiq edən təhsil haqqında
              sənədlərin (bundan sonra – xarici dövlətlərin ali təhsilə aid
              kvalifikasiyası) Azərbaycan Respublikasının ərazisində qüvvədə
              olmasının təsdiqi
            </li>

            <li>
              <span className="font-bold">Alternativ tanınma – </span>
              xarici dövlətin ali təhsilə aid Azərbaycan Respublikasında mövcud
              olmayan kvalifikasiyanın həmin xarici dövlətdə aid olduğu təhsil
              pilləsindən (səviyyəsindən) daha aşağı pillə (səviyyə) üzrə və ya
              eyni pillə (səviyyə) üzrə, lakin fərqli kvalifikasiyaya uyğun
              olaraq həyata keçirilən akademik tanınma növü
            </li>

            <li>
              <span className="font-bold">Akademik tanınma – </span>xarici
              dövlətin səlahiyyətli orqanları tərəfindən verilmiş ali təhsilə
              aid kvalifikasiyanın sahibinə Azərbaycan Respublikasında təhsilin
              növbəti pilləsində (səviyyəsində) təhsilini davam etdirmək
              hüququnun verilməsi
            </li>

            <li>
              <span className="font-bold">Peşə tanınması – </span>xarici
              dövlətin səlahiyyətli orqanları tərəfindən verilmiş ali təhsilə
              aid kvalifikasiyanın sahibinə Azərbaycan Respublikasının Əmək
              Məcəlləsinə əsasən əmək müqaviləsi bağlanılarkən onun əmək
              funksiyasının xüsusiyyətlərinə uyğun olan peşə hazırlığının və ya
              təhsilin olması zəruri sayılan hallarda işəgötürənə təqdim edilən
              təhsil sənədində qeyd edilən müvafiq peşə fəaliyyəti göstərmək
              hüququnun verilməsi
            </li>

            <li>
              <span className="font-bold">Qismən tanınma – </span>xarici
              dövlətin ali təhsil müəssisəsində təhsil alan şəxsin natamam ali
              təhsilinin qalan hissəsini Azərbaycan Respublikasının ali təhsil
              müəssisələrinin birində davam etdirə bilməsi üçün həyata keçirilən
              akademik tanınma növü
            </li>

            <li>
              <span className="font-bold">Şərti tanınma – </span>ali təhsilin
              bakalavriat (əsas (baza ali) tibb təhsilinə) və magistratura
              səviyyələri üçün müəyyən edilmiş minimal kredit sayından az
              toplayan ərizəçiyə ixtisasına uyğun Azərbaycan Respublikasının ali
              təhsil müəssisələrinin birində mühazirələrdə (praktik
              məşğələlərdə) iştirak etməklə mövcud əhəmiyyətli fərqi aradan
              qaldırmaq hüququ verən akademik tanınma növü.
            </li>
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
