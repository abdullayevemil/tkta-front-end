import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Iternationalization() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        Beynəlmİləlləşmə
      </h1>

      <Tabs defaultValue="general-info" className="w-full px-16 flex flex-col">
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

        <TabsContent value="general-info" className="flex flex-col gap-4 pt-16">
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

        <TabsContent value="employee-exchange" className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              TKTA nümayəndəsi Keyfiyyət təminatı üzrə Bolonya Tematik Qrupunun
              6-cı iclasında iştirak edib
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180877/Picture1_bncgx0.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Təhsildə Keyfiyyət Təminatı Agentliyinin (TKTA) Akkreditasiya və
                lisenziya şöbəsinin baş məsləhətçisi Heydər Rzayev Rumıniyanın
                Konstansa şəhərində baş tutan Keyfiyyət təminatı üzrə Bolonya
                Tematik Qrupunun 6-cı iclasında iştirak edib.
              </p>

              <p className="mb-4">
                Avropa Ali Təhsil Məkanı üzv ölkələrinin təhsil sistemlərinin
                nümayəndələrinin iştirak etdiyi görüşdə heyət keyfiyyət təminatı
                prosesinin rəqəmsallaşdırılması, Avropa universitetlərinin
                keyfiyyət təminatı, ikili proqramların keyfiyyət təminatına
                Avropa yanaşması, Bolonya Prosesi üzrə İcra Hesabatının
                keyfiyyət təminatına həsr olunmuş fəslinin tamamlanması
                vəziyyəti barədə təqdimatlarla tanış olub. Görüşün ikinci
                günündə Tematik Qrupun gələcək prioritet mövzuları barədə
                təqdimatlar ətrafında müzakirələr keçirilib.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              TKTA nümayəndəsi Finlandiya və Estoniyada baş tutan
              “Təhsilverənlərin tədris peşəkarlığının inkişaf etdirilməsi” ilə
              bağlı tədbirdə iştirak edib
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture2_ksenjq.png"
                alt="TKTA logo"
              />

              <p className="mb-4">
                Təhsildə Keyfiyyət Təminatı Agentliyinin (TKTA) Təlim və
                metodologiya şöbəsinin baş məsləhətçisi Vəfadar Rizvanlı 17-20
                sentyabr tarixlərində Finlandiyanın Helsinki və Estoniyanın
                Tallin şəhərlərində baş tutan “Təhsilverənlərin tədris
                peşəkarlığının inkişaf etdirilməsi” təlim proqramında iştirak
                etmişdir. Təlim Finlandiya Respublikasının Təhsil və Mədəniyyət
                Nazirliyi, Estoniya Respublikasının Təhsil və Tədqiqat Nazirliyi
                və Avropa Təlim Fondu (ETF) tərəfindən birgə təşkil olunmuşdur.
              </p>

              <p className="mb-4">
                Şərq Tərəfdaşlığı Proqramına üzv olan ölkələrin təhsil
                sistemlərinin nümayəndələrinin iştirak etdiyi tədbirdə
                iştirakçılar müxtəlif təhsil pillələri üzrə müəllim hazırlığı
                sahəsində Finlandiya və Estoniya təcrübələri ilə yaxından tanış
                olmuş, ümumtəhsil, peşə ixtisas və ali təhsil müəssisələrinə
                sahə səfərlərində iştirak edərək müəssisələrin akademik və
                inzibati heyəti ilə müzakirələr aparmışdır.
              </p>

              <p>
                Tədbirin ikinci günündə Finlandiya Təhsil Qiymətləndirmə Mərkəzi
                (FİNEEC) ilə görüş keçirilmiş, təhsildə keyfiyyət təminatı
                sahəsində Finlandiya təcrübəsi ilə bağlı təqdimat
                dinlənilmişdir.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-full float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture3_bvupyl.jpg"
                alt="TKTA logo"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl w-full float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture4_pb5ahy.jpg"
                alt="TKTA logo"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl w-full float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture5_gfvmvc.jpg"
                alt="TKTA logo"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              Təhsildə Keyfiyyət Təminatı Agentliyinin struktur bölmə rəhbərləri
              Türkiyə Respublikasında işgüzar səfərdə olub
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture6_ixheja.jpg"
                alt="image from tukiye"
              />

              <p className="mb-4">
                16-19 dekabr 2024-cü il tarixlərində Təhsildə Keyfiyyət Təminatı
                Agentliyinin (TKTA) Qeyri-formal və informal təhsilin tanınması
                şöbəsinin (QFİTT) müdiri Elmir Həsənov Türkiyə Respublikasının
                Peşə Kvalifikasiyası Qurumunun (Mesleki Yeterlilik Kurumu-MYK),
                Xarici kvalifikasiyaların tanınması şöbəsinin (XKTŞ) müdiri
                Elnur Xəlilov və adıçəkilən şöbənin əməkdaşı Nigar Cəniyeva
                Türkiyə Respublikası Milli Təhsil Nazirliyinin (MEB) Təlim və
                Metodologiya Şurasının (Talim ve Terbiye Kurulu) və Türkiyə
                Respublikası Ali Təhsil Şurasının (YÖK) təcrübəsi ilə tanış
                olmaq məqsədilə həmin ölkəyə səfər ediblər.
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-right ml-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture7_t34mrb.jpg"
                alt="image from tukiye"
              />

              <p className="mb-4">
                Səfər çərçivəsində MYK-nun sədri, professor Nəcmi İlhan və həmin
                qurumun müxtəlif struktur bölmələrinin əməkdaşları ilə görüşlər
                keçirilib. Görüş zamanı QFİTT-lə bağlı tabe qurumların
                səlahiyyətləri və fəaliyyət istiqamətləri, qeyri-formal təhsilin
                Türkiyənin əmək bazarına inteqrasiyası, qiymətləndirmə və
                tanınma prosesləri, nəzəri və praktiki imtahanların təşkilinə
                dair məsələlər ilə bağlı fikir mübadiləsi aparılıb. Həmçinin,
                tərəflər arasında qarşılıqlı əməkdaşlıq perspektivləri müzakirə
                edilib.
              </p>

              <p className="mb-4">
                Səfər zamanı MEB Təlim və Metodologiya Şurasının xaricdə əldə
                edilmiş tam orta təhsil attestatlarının tanınmasından məsul
                Təhsil siyasəti şöbəsinin müdiri Mustafa Kılıç və tanınma
                şöbəsinin məsul əməkdaşı Dinçer Koçer ilə görüş keçirilib.
                Görüşdə sözügedən təhsil sənədlərinin tanınma proseduru, bu
                prosesin mərhələləri və digər müvafiq məsələlər ətrafında
                müzakirələr aparılıb, eyni zamanda Türkiyənin bu sahədəki
                təcrübəsi yaxından öyrənilib.{" "}
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture8_ptk9lo.jpg"
                alt="image from tukiye"
              />

              <p className="mb-4">
                Daha sonra YÖK-ün tabeliyində fəaliyyət göstərən
                Kvalifikasiyalarının tanınması və ekvivalentliyin müəyyən
                edilməsi şöbəsinin müdiri Ayşə İnan və şöbənin mütəxəssisləri
                ilə görüş keçirilib. Bu görüşdə xarici kvalifikasiyaların
                tanınması, tələb olunan sənədlər və onların həqiqiliyinin
                yoxlanması, ixtisas ekvivalentliyinin müəyyən edilməsi,
                tənzimlənən ixtisaslarla bağlı imtahanların təşkili və digər
                məsələlər müzakirə olunaraq, YÖK-ün təcrübəsi ilə yaxından
                tanışlıq fürsəti yaranıb.
              </p>

              <p className="mb-4">
                Sözügedən səfər, QFİTT və xarici kvalifikasiyaların tanınması
                sahəsində əməkdaşlıq əlaqələrinin qurulmasına və davamlı
                məsləhətləşmələr aparılmaqla iki ölkə arasında təcrübə
                mübadiləsinin həyata keçirilməsinə zəmin yaradıb.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              Təhsildə Keyfiyyət Təminatı Agentliyinin əməkdaşı Sloveniyada
              təcrübə mübadiləsi aparıb
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture2_ksenjq.png"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Təhsildə Keyfiyyət Təminatı Agentliyinin (TKTA) Akkreditasiya və
                lisenziya şöbəsinin əməkdaşı Xanım Quliyeva Sloveniyanın
                Lyublyana şəhərində işgüzar səfər olub. Səfərin əsas məqsədi
                Sloveniyanın Ali Təhsildə Keyfiyyət Təminatı Agentliyinin
                (NAKVIS/SQAA) təcrübəsi ilə tanışlıq və qarşılıqlı əməkdaşlıq
                imkanlarının müzakirəsi olub.
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-right ml-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture9_mvcvvg.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Səfər çərçivəsində o, NAKVIS-in direktoru və agentliyin müxtəlif
                struktur bölmələrinin nümayəndələri ilə görüşlər keçirib.
                Görüşlər zamanı hər iki keyfiyyət təminatı agentliyinin
                akkreditasiya qiymətləndirilməsində rolu, Avropa Ali Təhsil
                Məkanında keyfiyyət təminatı üzrə standartlar və təlimatlardan
                (ESG) irəli gələn tələblərə uyğun fəaliyyətlərin təşkili, eləcə
                də Daxili keyfiyyət təminatı üzrə mövcud metodologiya və
                yanaşmalar ətrafında fikir mübadiləsi aparılıb.
              </p>

              <p className="mb-4">
                Bundan əlavə, NAKVIS/SQAA-nın Avropa Ali Təhsil üzrə Keyfiyyət
                Təminatı Assosiasiyasının (ENQA) tamhüquqlu üzvlüyü ilə bağlı
                son təcrübə öyrənilib və ESG standartlarına uyğunluğun təmin
                edilməsi üzrə həyata keçirilmiş fəaliyyətlərlə tanışlıq baş
                tutub.
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture10_woovuy.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Agentliyin akkreditasiya qiymətləndirilməsi prosesində
                koordinatorluq edən əməkdaşlarının təcrübəsi də peşəkar inkişaf
                məqsədilə nəzərdən keçirilib.
              </p>

              <p className="mb-4">
                Bu səfər, tərəflər arasında təcrübə mübadiləsi və əməkdaşlıq
                imkanlarının müzakirəsinə şərait yaratmaqla yanaşı, gələcək
                birgə fəaliyyətlər üçün güclü zəmin hazırlayıb. Təhsildə
                keyfiyyət təminatı sahəsində beynəlxalq təcrübənin öyrənilməsi
                və tətbiqi Agentliyin davamlı inkişafına xidmət edən əsas
                məqsədlərindən biridir.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              TKTA-nın əməkdaşları Serbiya Respublikasında səfərdə olub
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180878/Picture11_yhvr6j.jpg"
                alt="iamge from serbia"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-right ml-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture12_hutzqb.jpg"
                alt="image from serbia"
              />

              <p className="mb-4">
                27-28 may 2025-ci il tarixlərində SEQA-ESG 2 layihəsi
                çərçivəsində Serbiya Respublikasının Novi Sad şəhərində Serbiya
                Milli Keyfiyyət Təminatı Agentliyinin (NEAQA) ev sahibliyi
                etdiyi növbəti təlim və təcrübə mübadiləsi həyata keçirilib.
              </p>

              <p className="mb-4">
                Tədbirdə Təhsildə Keyfiyyət Təminatı Agentliyinin (TKTA)
                akkreditasiya və lisenziya şöbəsinin aparıcı məsləhətçisi Xanım
                Quliyeva, təlim və metodologiya şöbəsinin böyük məsləhətçisi
                Bəyim Abdulla və analitik təhlil şöbəsinin böyük məsləhətçisi
                Gülnar Tahirli iştirak ediblər. Təlim zamanı Avropa standartları
                və bələdçi sənədinin (ESG) 3.6 (“Daxili keyfiyyət təminatı və
                peşəkar davranış”), ESG 3.4 (“Tematik təhlil”) və ESG 2.1
                (“Daxili keyfiyyət təminatının nəzərə alınması”) standartları
                üzrə qabaqcıl təcrübələr təqdim edilib.{" "}
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture13_i9fsbd.jpg"
                alt="image from serbia"
              />

              <p className="mb-4">
                Tədbir çərçivəsində iştirakçı tərəflər qeyd olunan standartların
                milli səviyyədə akkreditasiya meyarlarında tətbiqi vəziyyəti
                üzrə fikir mübadiləsi aparıb və tematik təhlil üzrə keyfiyyət
                təminatı üzrə agentliklərin ortaq baxışlarının və çağırışlarının
                olduğu müəyyən olub.
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-right ml-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1753180879/Picture14_m9lrjv.jpg"
                alt="image from serbia"
              />

              <p className="mb-4">
                Məlumat üçün bildiririk ki, sözügedən təlim SEQA-ESG 2 layihəsi
                çərçivəsində təşkil olunan sonuncu görüş olub. Qeyd edək ki, bu
                kimi beynəlxalq platformalarda fəal iştirak TKTA-nın ESG
                standartlarına uyğun fəaliyyətini möhkəmləndirmək, həmçinin ali
                təhsildə keyfiyyət təminatı sahəsində müasir yanaşmaları
                gündəlik təcrübəyə inteqrasiya etmək baxımından mühüm əhəmiyyət
                kəsb edir.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="international-events"
          className="flex flex-col gap-20"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              Ali Təhsildə Keyfiyyət Təminatı Agentliklərinin Mərkəzi və Şərqi
              Avropa şəbəkəsinin (CEENQA) Baş Assambleyası öz işini
              yekunlaşdırıb
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293841/1_ymqcmk.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                18 may 2024-cü il tarixində Bakıda keçirilən Mərkəzi və Şərqi
                Avropa Ölkələrinin Keyfiyyət Təminatı Agentlikləri Şəbəkəsinin
                (CEENQA) Baş Assambleyası öz işini yekunlaşdırıb.
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-right ml-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/3_ct0lf2.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Assambleyanın ikinci günündə İdarə Heyətinin üzvləri CEENQA-nın
                yeni strategiyasını və növbəti illərə dair fəaliyyət planını
                müzakirə ediblər.Eyni zamanda İdarə Heyəti tərəfindən qurumun
                yeni prezidenti olaraq Xorvatiyanın Elm və Ali Təhsil
                Agentliyinin direktor müavini Vesna Dodiković-Jurković,
                vitse-prezidenti olaraq isə Beynəlxalq Biznes İdarəetmə
                Akkreditasiyası Fondunun (FIBAA) icraçı direktoru Diane
                Freiberger seçilib.
              </p>

              <p className="mb-4">
                Qeyd edək ki, CEENQA Baş Assambleyasında Almaniya, Estoniya,
                Latviya, Litva, Çexiya, Slovakiya, Macarıstan, Rumıniya,
                Moldova, Sloveniya, Bosniya və Herseqovina, Serbiya,
                Bolqarıstan, Birləşmiş Krallıq, Türkiyə, Ukrayna və
                Qazaxıstandan keyfiyyət təminatı agentliklərinin rəhbərləri,
                eləcə də Avropa Ali Təhsil Məkanında Keyfiyyət Təminatı üzrə
                Assosiasiyayanın (ENQA), Ali Təhsil üzrə Avropa Keyfiyyət
                Təminatı Reyestri (EQAR) və Ali Təhsildə Keyfiyyət Təminatı
                Agentliklərinin Beynəlxalq Şəbəkəsinin (INQAAHE) nümayyəndələri
                iştirak edib.
              </p>

              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/2_ixq1pf.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Tədbirdə həmçinin, növbəti CEENQA Baş Assambleyasının Tallinn
                şəhərində keçirilməsi qərarlaşdırılıb.
              </p>

              <p className="mb-4">
                26 ölkədən 41 agentliyin qoşulduğu təşkilat Avropa ali təhsil
                məkanında keyfiyyət təminatı üzrə standart və təlimatlar (ESG)
                bələdçisinə uyğun daxili və xarici keyfiyyət təminatı sisteminin
                təkmilləşdirilməsinə töhvə verməklə yanaşı, üzv təşkilatlar
                arasında təcrübə mübadiləsi və müştərək layihələrin həyata
                keçirilməsini təşviq etməkdədir.
              </p>

              <p className="mb-4">
                Onu da bildiririk ki, TKTA 2021-ci ilin oktyabr ayından
                CEENQA-nın tam hüquqlu üzvüdür.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <Image
                  width={700}
                  height={700}
                  className="rounded-xl"
                  src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/4_od7czb.jpg"
                  alt="image from bolonya"
                />

                <Image
                  width={700}
                  height={700}
                  className="rounded-xl"
                  src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/5_l3vbki.jpg"
                  alt="image from bolonya"
                />

                <Image
                  width={700}
                  height={700}
                  className="rounded-xl"
                  src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293841/6_mrz4ya.jpg"
                  alt="image from bolonya"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              TKTA nümayəndəsi “Lissabon Tanınma Konvensiyası” üzrə Boloniya
              prosesinin Tematik İşçi Qrupunun 7-ci görüşündə iştirak edib
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/7_finvjl.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Təhsildə Keyfiyyət Təminatı Agentliyinin departament direktoru
                Aysel Kərimli İtaliyanın Roma şəhərində kvalifikasiyaların
                tanınması sahəsində İtaliyanın əsas Milli Məlumat Mərkəzi olan
                CIMEA-nın təşkilatçılığı ilə “Lissabon Tanınma Konvensiyası”
                üzrə Boloniya prosesinin Tematik İşçi Qrupunun 7-ci görüşündə
                iştirak edib.
              </p>

              <p className="mb-4">
                Görüşdə “Alternativ tanınma yolları”, “Avtomatik tanınma”,
                “Rəqəmsal texnologiyanın potensialından tanınma prosesində
                istifadə olunması” kimi mövzular ətrafında detallı müzakirələr
                aparılıb.
              </p>

              <p className="mb-4">
                Görüşün ilk günü Lissabon Tanınma Konvensiyasının həyata
                keçirilməsinə şərait yaradan hüquqi bazanın yaradılması, qaçqın
                və məcburi köçkünlərin kvalifikasiyalarının tanınması,
                kvalifikasiyaların akdemik tanınması kimi mövzular müzakirə
                edilib. Regional tanınma konvensiyalarının əsas prioritetləri
                mövzusuna həsr olunmuş iclasın ikinci günü Tematik İşçi Qrupunun
                ötən il ərzində gördüyü işlərə dair hesabatla yekunlaşıb.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              TKTA-nın nümayəndə heyəti beynəlxalq konfransda iştirak edib
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/8_tedrx3.jpg"
                alt="image from bolonya"
              />

              <p className="mb-4">
                25-26 aprel 2024-cü il tarixlərində Türkiyə Respublikasının
                Ankara şəhərində Türkiyə Ali Təhsildə Keyfiyyət Təminatı
                Şurasının (YÖKAK) və Hacı Bayram Vəli Universitetinin
                təşkilatçılığı ilə “YÖKAK 2024-Keyfiyyət təminatı və
                akkreditasiya” adlı beynəlxalq konfransı keçirilib.
              </p>

              <p className="mb-4">
                Təhsildə Keyfiyyət Təminatı Agentliyinin nümayəndələrinin də
                iştirak etdiyi tədbirdə bir sıra xarici ölkələrin və keyfiyyət
                təminatı sahəsində nüfuzlu beynəlxalq təşkilatların məsul
                şəxsləri yer alıb.
              </p>

              <p className="mb-4">
                Tədbirin açılış mərasimində Türkiyə Respublikası Ali Təhsil
                Şurasının sədri cənab Erol Özvar, Ali Təhsildə Keyfiyyət
                Təminatı Şurasının sədri cənab Ümit Kocabıçak, Avropa Ali Təhsil
                Məkanında Keyfiyyətin Təminatı üzrə Assosiasiyanın (ENQA)
                vitse-prezidenti xanım Doris Herrman çıxış edib, Ali Təhsil üzrə
                Avropa Keyfiyyət Təminatı Reyestri (EQAR) prezidenti cənab
                Stephan Lauwick-in konfransa videomüraciəti yayımlanıb.
              </p>

              <p className="mb-4">
                Çıxış edən məruzəçilər beynəlxalq səviyyədə keyfiyyət təminatı
                prosesinin ümumi vəziyyəti və inkişaf perspektivlərinə toxunub,
                beynəlxalq akademik mobilliyin və beynəlxalq kvalifikasiyaların
                tanınması üçün keyfiyyət təminatının təkmilləşdirilməsinin önəmi
                vurğulanıb.
              </p>

              <p className="mb-4">
                Keyfiyyət təminatında ölkələrin milli təcrübəsi barədə panel
                müzakirələrdə məruzəçi kimi iştirak edən Təhsildə Keyfiyyət
                Təminatı Agentliyinin idarə heyətinin sədri Tural Əhmədov yeni
                dövrdə bir çox informal öyrənmə imkanlarının sürətlə
                genişləndiyini və ənənəvi təhsil müəssisələrinin bu prosesə
                çevik adaptasiyasının önəmini vurğulayıb, həmçinin bir sıra ali
                təhsil müəssisələrinin yerli akkreditasiya və digər xarici
                keyfiyyət təminatı proseslərini keçmələrinə rəğmən həmin
                müəssisələrdə təşkil olunan tədrisin keyfiyyəti və təqdim olunan
                ali təhsil kvalifikasiyaların əmək bazarında rəqabətə davamlı
                olmadığını qeyd edib.
              </p>

              <p className="mb-4">
                Tədbirin ikinci günündə Agentliyin hüquqi məsələlərin
                tənzimlənməsi şöbəsinin müdiri Sabir Mirzəzadə &quot;Keyfiyyət
                təminatının tətbiqi və problemləri&quot; sessiyasında &quot;Xarici ali
                təhsil ixtisaslarının tanınmasında təhsil proqramlarının
                uyğunluğunun qiymətləndirilməsində yeni çətinliklər və həll
                yolları&quot; adlı təqdimatla çıxış edib.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <Image
                width={700}
                height={700}
                className="rounded-xl float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/9_tohx2y.jpg"
                alt="image from bolonya"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293843/10_t6lgzl.jpg"
                alt="image from bolonya"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293842/11_odpv47.jpg"
                alt="image from bolonya"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">
              TKTA-nın rəhbər heyəti Almaniyada işgüzar səfərdə olub
            </h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293843/12_jul9oo.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">
                Almaniyanın Mərkəzi Qiymətləndirmə və Akkreditasiya Agentliyinin
                (ZEvA) təşkilati dəstəyi ilə 17-18 aprel 2024-cü il tarixlərində
                Almaniyanın Hannover şəhərində keçirilən Avropa Ali Təhsil
                Məkanında Keyfiyyətin Təminatı üzrə Assosiasiyanın (ENQA) Baş
                Assambleyasında Təhsildə Keyfiyyət Təminatı Agentliyinin İdarə
                Heyətinin sədri Tural Əhmədov, İdarə heyətinin üzvü, Keyfiyyət
                təminatı departamentinin direktoru İlham Hümbətov və
                Akkreditasiya və lisenziya şöbəsinin müdiri Elmar Mustafayev
                iştirak edib.
              </p>

              <p className="mb-4">
                ENQA Üzvlərinin Forumu 2024 keyfiyyət təminatı agentlikləri və
                təsisatları arasında əməkdaşlığın və Avropa ali təhsil məkanında
                ali təhsil müstəvisində dialoqun təşviq edilməsində mühüm
                tədbirlərdən biridir.
              </p>

              <p className="mb-4">
                Assambleyada transmilli təhsilin keyfiyyət təminatı, keyfiyyət
                təminatında yeni yanaşmalar və ali təhsildə süni intellektin
                inkişaf edən rolu ilə bağlı müzakirələr də daxil olmaqla bir
                neçə mühüm plenar sessiyaslar keçirilib və iştirakçılar arasında
                fikir mübadiləsi aparılıb.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">TKTA-nın nümayəndələri Avropa Təlim Fondunun beynəlxalq tədbirində iştirak edib</h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293843/13_ogovzo.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">Təhsildə Keyfiyyət Təminatı Agentliynin nümayəndələri Avropa Təlim Fondunun (ATF) təşkilatçılığı və Türkiyə Respublikasının Peşə Kvalifikasiyaları Agentliyinin tərəfdaşlığı ilə Ankara şəhərində keçirilən “Qeyri-formal və informal təhsilin tanınması mexanizmlərinin təkmilləşdirilməsi” adlı beynəlxalq tədbirdə iştirak ediblər.</p>

              <p className="mb-4">Tədbirin əsas məqsədi tərəfdaş ölkələrdə qeyri-formal və informal yollar ilə əldə edilən kvalifikasiyaların tanınması mexanizmlərinin təkmilləşdirilməsi istiqamətində şəbəkələşmə qrupunun yaradılması, Avorpa İttifaqına (Aİ) üzv və tərəfdaş ölkələrin ən yaxşı təcrübələrinin öyrənilməsi, qarşılıqlı fikir mübadiləsinin aparılması, Avropa İttifaqı tərəfindən hazırlanmış metodoloji vəsaitlərin müzakirə olunması, eyni zamanda Türkiyə Respublikasının ən yaxşı təcrübələri ilə iştirakçıları yaxından tanış etmək olub.</p>

              <p className="mb-4">Sonda Avropa Təlim Fondunun təşəbbüsü ilə Fondun tərəfdaş ölkələrinin müvafiq qurumlarının iştirakı ilə birgə şəbəkənin yaradılması haqqında ilkin razılıq əldə edilib və gələcək planlar müzakirə olunub.</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <Image
                width={700}
                height={700}
                className="rounded-xl float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293843/14_cektlh.jpg"
                alt="image from bolonya"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293844/15_w0dwsn.jpg"
                alt="image from bolonya"
              />

              <Image
                width={700}
                height={700}
                className="rounded-xl float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293845/16_npuwk5.jpg"
                alt="image from bolonya"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary">TKTA nümayəndələri Avropa Keyfiyyət Təminatı Forumunda iştirak edib</h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1756293845/17_mmq784.jpg"
                alt="iamge from bolonya"
              />

              <p className="mb-4">TKTA-nın İdarə Heyətinin üzvü İlham Hümbətov və Qeyri-formal və informal təhsilin tanınması şöbəsinin müdiri Könül Əhmədova Portuqaliyada baş tutan Avropa Keyfiyyət Təminatı Forumunda (EQAF) iştirak edib.</p>

              <p className="mb-4">Avropa Keyfiyyət Təminatı Forumu ali təhsildə keyfiyyət təminatının beynəlmiləlləşdirilməsinə, transmilli təhsil və əməkdaşlıq sahəsində yaranan problemlərin və imkanların həlli üçün yeni siyasətlərin, tendensiyaların və təcrübələrin araşdırılmasına yönəldilib.</p>

              <p className="mb-4">Səfər çərçivəsində Agentliyin əməkdaşları müxtəlif mövzularda keçirilən plenar müzakirələrdə iştirak edib.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary"></h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src=""
                alt="iamge from bolonya"
              />

              <p className="mb-4"></p>

              <p className="mb-4"></p>

              <p className="mb-4"></p>

              <p className="mb-4"></p>

              <p className="mb-4"></p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary"></h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src=""
                alt="iamge from bolonya"
              />

              <p className="mb-4"></p>

              <p className="mb-4"></p>

              <p className="mb-4"></p>

              <p className="mb-4"></p>

              <p className="mb-4"></p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
