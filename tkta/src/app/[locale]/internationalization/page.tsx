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

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-textPrimary"></h2>

            <div className="text-justify tracking-wide leading-7 text-base">
              <Image
                width={700}
                height={700}
                className="rounded-xl w-1/5 float-left mr-8"
                src=""
                alt="image from bolonya"
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
