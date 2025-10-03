import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    id: 1,
    title:
      "TKTA tərəfindən hansı təhsil formaları üzrə tanınma həyata keçirilir?",
    answer:
      "Təhsildə Keyfiyyət Təminatı Agentliyi tərəfindən yalnız ənənəvi təlim metodlarına əsaslanan formal qaydada əyani və qiyabi təhsilalma formasında əldə olunmuş kvalifikasiyalara münasibətdə tanınma həyata keçirilir.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 2,
    title:
      "Türkiyə Respublikasında qiyabi təhsil alıram. Məzun olduqdan sonra diplomum tanınacaqmı?",
    answer:
      "Türkiyə Respublikası ali təhsil sistemini tənzimləyən normativ aktlarda, həmçinin tədrisin təşkilində “qiyabi” təhsilalma forması mövcud deyildir. Türkiyədəki ali təhsil müəssisələrində hansısa proqramların bu formada tədrisinin mümkünsüzlüyü nəzərə alınaraq, həmin ölkədə yalnız “əyani” (örgün) formada tədrisin təşkili nəticəsində əldə olunmuş kvalifikasiyaların Azərbaycan Respublikasında tanınması mümkündür və bununla bağlı icraat Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust tarixli 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması Qaydaları” əsasında həyata keçirilir.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 3,
    title:
      "“Əczaçılıq” ixtisası üzrə xaricdə qiyabi formada təhsil almaq istəyirəm. Diplomum tanınacaqmı?",
    answer:
      "Qaydaların 6.2-ci bəndinə əsasən bu Qaydaların əlavəsində nəzərdə tutulan peşələrə aid ixtisasların peşə tanınması zamanı ərizəçinin müvafiq kvalifikasiya üzrə peşə kompetensiyalarının Azərbaycan Respublikasında mövcud olan uyğun kvalifikasiya üzrə nəzərdə tutulmuş peşə kompetensiyalarının tələblərinə uyğunluğu müəyyən edilir. Ərizəçinin bu Qaydaların əlavəsində nəzərdə tutulan tibb və səhiyyə ixtisasları üzrə Azərbaycan Respublikası Səhiyyə Nazirliyinin müəyyən etdiyi tələblərə uyğunluğu isə bu sahədə Azərbaycan Respublikası Nazirlər Kabinetinin müəyyən etdiyi müvafiq qaydaya əsasən müəyyən edilir. Səhiyyə Nazirliyindən daxil olmuş məktuba əsasən, Azərbaycan Respublikasında əczaçı kadrların hazırlanmasının “Dövlət standartı” ilə tənzimləndiyi, Boloniya sisteminə müvafiq olaraq pilləli və əyani təhsil formasında keçirildiyi qeyd edilmiş və “Əczaçılıq” ixtisası üzrə xarici ölkələrdə qiyabi formada təhsil almış ərizəçilərin ali təhsilə aid kvalifikasiyalarının tanınmasının məqsədəuyğun hesab edilmədiyi bildirilmişdır.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 4,
    title:
      "Elektron ərizəmdə 'ödəniş kodu' mövcuddur. Ödəniş kodu nə üçün lazımdır?",
    answer:
      "Elektron ərizə yaradıldıqda hər müraciətçi üçün ayrıca ödəniş kodu yaradılır . Ödəniş kodundan istifadə etməklə siz xidmət haqqını yaxınlıqdakı poçt və ya banka təqdim etməklə ödəyə bilərsiniz.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 5,
    title:
      "Təhsildə Keyfiyyət Təminatı Agentliyi xaricdə təhsil ilə bağlı hansı şirkətlərlə əməkdaşlıq edir?",
    answer:
      'Diqqətinizə çatdırırıq ki, Təhsildə Keyfiyyət Təminatı Agentliyi xaricdə təhsil sahəsində, o cümlədən tanınma prosedurları ilə bağlı heç bir şirkətlə əməkdaşlıq etmir və bu şirkətlərin fəaliyyətlərinə görə heç bir məsuliyyət daşımır. Qeyd edək ki, iddiaçılara hər hansı şirkət və ya şəxslər tərəfindən verilən vəd tanınma müddətində heç bir rol oynamır və belə hallarla rastlaşdığınız təqdirdə Təhsildə Keyfiyyət Təminatı Agentliyinin "Qaynar xətt” xidmətinə (146-8) və ya info@tkta.edu.az ünvanına məlumat verməyiniz xahiş edilir.',
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 6,
    title:
      "Müraciət zamanı qarşılaşdığım suallar və ya problemlərlə bağlı hara müraciət edə bilərəm?",
    answer:
      "Müraciət zamanı yaranmış və ya qarşılaşdığınız hər hansı texniki nasazlıqla bağlı, adınızı, soyadınızı və ata adınızı qeyd etmək şərtilə, info@tkta.edu.az ünvanına və 146-8 çağrı mərkəzinə müraciət etməyiniz xahiş olunur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 7,
    title:
      "Şəxsi kabinetimdə müraciətimin statusu olaraq 'İcraatı dayandırıldı' yazılıb. Bu nə deməkdir",
    answer:
      "Bu status sizin tanınma ilə bağlı təqdim etdiyiniz sənədlərin icraatının dayandırıldığını göstərir. Bu, aşağıdakı səbəblərdən baş verə bilər:  1. Tanınma ilə bağlı müraciətinizlə əlaqədar qərarın qəbul edilməsi üçün əlavə sənəd(lər)in təqdim olunmasına zərurət yaranmışdır. Bu barədə sizə müvafiq məlumat verilmiş, lakin təyin olunan vaxt ərzində müraciətimiz təmin olunmadığından “İnzibati icraat haqqında” Azərbaycan Respublikasının Qanununun 32.5-ci bəndinə əsasən sənədlərinizin icraatı dayandırılmışdır. Tələb olunan əlavə sənəd(lər)i şəxsi kabinetinizə əlavə etmək üçün info@tkta.edu.az elektron poçt ünvanına müraciət edə bilərsiniz. 2. Sənədlərinizin araşdırılması zamanı zərurət yarandığı üçün təhsil aldığınız ali təhsil müəssisəsinə sorğu göndərilmiş və Sizə bu barədə qeydiyyatdan keçərkən təqdim etdiyiniz əlaqə vasitələri ilə məlumat verilmişdir. Sözügedən sorğu cavablandırılanadək müraciətinizin statusu “İcraatı dayandırılmışdır” kimi göstəriləcəkdir.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 8,
    title:
      "Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması haqqında şəhadətnamələrin itirilməsi halında nə etməliyəm?",
    answer:
      "Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması haqqında şəhadətnamələrin itirilməsi halında siz ərizə ilə müvafiq polis idarəsinə müraciət edib arayış əldə etməli, eləcə də “Azərbaycan müəllimi” qəzetində şəhadətnamələrin itirilməsi barədə elan verməlisiniz. Bununla yanaşı bildiririk ki, Azərbaycan Respublikasının Nazirlər Kabinetinin 24 dekabr 2020-ci il tarixli, 507 nömrəli Qərarı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması xidmətləri ilə əlaqədar digər xidmətlərin siyahısı və göstərilən xidmətlərə görə ödəniləcək haqların məbləği”nə əsasən ərizəçilər xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması haqqında şəhadətnamənin itirilməsi və ya korlanması halında, dublikat şəhadətnamənin əldə olunması üçün 20 AZN xidmət haqqı ödəməlidirlər.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 9,
    title:
      "Təqdim etdiyim sənədlər icraata götürüldükdən sonra hansı müddət ərzində müraciətim barədə yekun qərar qəbul olunacaqdır?",
    answer:
      "Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust tarixli, 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması Qaydaları”nın 3.1-ci bəndinə əsasən bu Qaydaların 2.4-cü bəndində qeyd edilən sənədlər Təhsil Mərkəzləşdirilmiş İnformasiya Sisteminə bu Qaydalarla müəyyən edilmiş tələblərə uyğun olaraq daxil edildiyi gündən etibarən ən geci 3 (üç) ay müddətində baxılır. Başqa sözlə, müraciət haqqında yekun qərar təqdim olunan sənədlər icraata götürüldüyü tarixdən başlayaraq 3 ay müddətində qəbul edilir. Bununla belə, sənədlərin araşdırılması ilə əlaqədar müvafiq səlahiyyətli orqanlara və təhsil müəssisələrinə sorğuların göndərilməsindən və digər məsələlərdən asılı olaraq, sənədlərin icra müddəti dəyişə bilər.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 10,
    title:
      "Dövlət Proqramları və hökumətlərarası təqaüd proqramları çərçivəsində təhsil almış tələbələrin ali təhsil sənədlərinin leqallaşdırılmasına ehtiyac varmı?",
    answer:
      "Qaydaların 2.7-ci bəndinə əsasən Azərbaycan gənclərinin dövlət proqramları, Azərbaycan Respublikasının Elm və Təhsil Nazirliyi ilə xarici dövlətlərin səlahiyyətli orqanları arasında imzalanmış beynəlxalq müqavilələr əsasında tələbə mübadiləsinə dair hökumətlərarası təqaüd proqramları, dövlət tərəfindən müəyyən edilmiş təhsil qrantı proqramları, o cümlədən beynəlxalq müqavilələr çərçivəsində Azərbaycan Respublikası ərazisində fəaliyyət göstərən xarici ali təhsil müəssisələri tərəfindən verilmiş kvalifikasiyalar üzrə təhsil almış tələbələrin ali təhsil sənədlərinin leqallaşdırılmasına/“apostil” şəhadətnaməsi/möhürü əlavə edilməsinə zərurət yoxdur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 11,
    title:
      "Xidmətə görə öncəki dövrlərdə artıq ödəniş etmişəm. Buna baxmayaraq, 250 AZN xidmət haqqı ödəməyim tələb olunur. Mən nə etməliyəm?",
    answer:
      "Dövlət rüsumu haqqında Azərbaycan Respublikası Qanununa 19 may 2020-ci il tarixində edilmiş dəyişikliyə əsasən, Qanunun 2.0.18-ci (xarici ölkələrin ali təhsil müəssisələrinin diplomlarının tanınması) və 32-ci (Xarici ölkələrin ali təhsil müəssisələrinin diplomlarının tanınması üçün tutulan dövlət rüsumunun dərəcəsi – 15 manat) bəndləri ləğv olunmuşdur.  Beləliklə, sözügedən Qərarın ləğv olunduğu müddətə qədər ödəniş etmiş müraciətçilərin 250 AZN xidmət haqqı ödəmələrinə ehtiyac yoxdur. Bu səbəbdən, müraciətçilərin etdikləri ödənişə dair qəbzləri elektron ərizələrinə əlavə etmələri tövsiyə olunur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 12,
    title:
      "Xarici ali təhsil ixtisasımın ölkə ərazisində tanınması ilə bağlı xidmətdən imtina etmək istəyirəm. Xidmətə görə ödədiyim məbləği geri almaq üçün nə etməliyəm?",
    answer:
      "Bildiririk ki, elektron ərizə yaradıldığı zaman müraciətçilər ilk olaraq xidmət qaydaları ilə və ödəniləcək 250 AZN xidmət haqqının geri qaytarılmayacağı barədə şərtlərə etiraz etmədiklərini qeyd etməkləri zəruridir. Yalnız bu şərtləri təsdiq etdikdən sonra əməliyyata davam etmək mümkündür. Bu səbəbdən, müraciətçilərə elektron ərizə yaradılan zaman xidmət şərtlərini diqqətlə nəzərdən keçirmələri tövsiyə olunur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 13,
    title:
      "Tanınma üçün müraciət zamanı xidmətə görə ödənişi necə həyata keçirməliyəm?",
    answer:
      "Azərbaycan Respublikasının Nazirlər Kabinetinin 24 dekabr 2020-ci il tarixli, 507 nömrəli Qərarı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması xidmətləri ilə əlaqədar digər xidmətlərin siyahısı və göstərilən xidmətlərə görə ödəniləcək haqların məbləği”nə əsasən ərizəçilər xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması üzrə sənədlərin qəbulu və ekspertizasının keçirilməsi üçün 250 AZN xidmət haqqı ödəməlidirlər.  ​​​​​​​Elektron ərizə yaradıldıqda hər müraciətçi üçün ayrıca ödəniş kodu yaradılır. Ödəniş kodundan istifadə etməklə siz xidmət haqqını yaxınlıqdakı poçt və ya banka təqdim etməklə ödəyə bilərsiniz. Bununla yanaşı, bank kartından istifadə etməklə, ödənişlərinizi onlayn şəkildə də edə bilərsiniz. ",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 14,
    title: "Təhsil sənədinin leqallaşdırılması dedikdə nə nəzərdə tutulur?",
    answer:
      'Tanınma üçün təqdim olunan, xarici ölkələrin müvafiq rəsmi strukturları tərəfindən verilmiş diplomlar və transkriptlər Qaydaların 2.6-cı bəndinə əsasən “Xarici rəsmi sənədlərin leqallaşdırılması tələbini ləğv edən Haaqa Konvensiya"sına uyğun olaraq sənədi verən ölkənin səlahiyyətli qurumu tərəfindən “apostil” şəhadətnaməsi/möhürü ilə leqallaşdırılmalıdır. Konvensiyanın 5-ci maddəsinə əsasən, “apostil” şəhadətnaməsi/möhürü diplom və transkripti imzalamış şəxsin imzasının həqiqiliyini, onun vəzifəsini və həmin sənədə vurulmuş möhürün və ya ştampın həqiqiliyini təsdiq edir. Konvensiyaya müvafiq əlavəyə əsasən, apostilin 2-ci bəndində diplom və transkripti imzalamış şəxsin adı və soyadı, 3-cü bəndində vəzifəsi, 4-cü bəndində isə həmin sənədə vurulmuş möhürün və ya ştampın aid olduğu müəssisənin (ali təhsil müəssisəsinin) adı qeyd olunmalıdır. “Apostil” şəhadətnaməsi/möhürü tanınma üzrə müraciətlər zamanı təqdim olunan təhsil sənədlərinin yalnız əslinə vurulmalı və sənədi imzalamış yüksək səlahiyyətli şəxsin imzası təsdiq olunmalıdır. Sənədlərin “əsli ilə düzdür”, həmçinin notarial qaydada təsdiq olunmuş nüsxələrinə vurulmuş “apostil” şəhadətnaməsi/möhürü qanunvericiliyin tələblərinə uyğun olmadığı üçün icraata götürülmür.',
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 15,
    title: "Tanınma üçün hansı sənədlər tələb olunur?",
    answer:
      'Tələb olunan sənədlərin siyahısı ilə tanış olmaq üçün Kvalifikasiyaların tanınması - Tələb olunan sənədlər" bölməsinə daxil olmağınız və zəruri prosedurları həyata keçirməyiniz xahiş olunur.',
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 16,
    title:
      "Təqdim etdiyim sənədlərin mövcud icra vəziyyəti barədə necə məlumat əldə edə bilərəm?",
    answer:
      "Təqdim etdiyiniz sənədlərin icrasının hansı mərhələdə olması barədə məlumatı şəxsi kabinetinizə və elektron ərizənizdə qeyd etdiyiniz əlaqə nömrənizə göndərilən SMS vasitəsi ilə əldə edə bilərsiniz.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 17,
    title:
      "Təhsil almaq istədiyim xarici ali təhsil müəssisəsinin beynəlxalq reytinq səviyyəsi barədə necə məlumat əldə edə bilərəm?",
    answer:
      "Xarici ali təhsil müəssisələrinin beynəlxalq reytinq cədvəli hər il müxtəlif mənbələr tərəfindən dərc olunur. Belə mənbələrə (“Times Higher Education World University Rankings”, “QS World University Rankings”, “Academic Ranking of World Universities (Shanghai Ranking)” və s.) məxsus məlumatlarla tanış olmaq üçün internet axtarış sistemlərindən istifadə edə bilərsiniz.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 18,
    title:
      "Xaricdə əldə olunmuş ordinatura və rezidentura diplomlarını Azərbaycanda necə tanıtdıra bilərəm?",
    answer:
      "Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust tarixli, 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması Qaydaları”na uyğun olaraq, Təhsildə Keyfiyyət Təminatı Agentliyi tərəfindən yalnız tam orta, orta ixtisas təhsili pilləsi, bakalavriat (əsas (baza ali) tibb təhsili) və magistratura səviyyələri üzrə kvalifikasiyaların tanınması həyata keçirilir. Qeyd edilən təhsil səviyyələri üzrə kvalifikasiyaların tanınması TKTA-nın səlahiyyətləri xaricindədir.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 19,
    title:
      "Xarici kvalifikasiyanın akademik və peşə tanınması dedikdə nə nəzərdə tutulur?",
    answer:
      "Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust tarixli, 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması Qaydaları”na əsasən, tənzimlənən ixtisaslar kateqoriyasına aid olan müəllimlik, mühəndislik, hüquq, tibb və səhiyyə ixtisasları üzrə xarici kvalifikasiyaların tam tanınması TKTA tərəfindən  akademik tanınması barədə müsbət qərar verilən və TKTA-nın sifarişi ilə müvafiq olaraq Azərbaycan Respublikası Dövlət İmtahan Mərkəzi (müəllimlik, mühəndislik, hüquq ixtisasları) və Azərbaycan Respublikası Səhiyyə Nazirliyi (tibb və səhiyyə ixtisasları) tərəfindən keçirilən imtahanlarda uğurlu nəticə göstərən xarici kvalifikasiya sahiblərinə verilir. Müvafiq imtahanlarda iştirak etməyən və ya qeyri-məqbul nəticə göstərənlər isə yalnız akademik tanınma əldə edir. Sözügedən tanınma yalnız Azərbaycan Respublikası ərazisində təhsilin növbəti pilləsi (səviyyəsi) üzrə təhsilini davam etdirmək hüququ verir.  Müraciətçilərə təqdim olunmuş həmin şəhadətnamələrdə də qeyd olunduğu kimi, müvafiq sənəd ixtisas üzrə peşə fəaliyyəti ilə məşğul olmaq hüququ VERMİR. Digər tərəfdən, akademik şəhadətnamə əldə etmiş ərizəçi tam (akademik və peşə) tanınma əldə etmək istədikdə, TKTA-ya elektron qaydada təkrar müraciət edərək Azərbaycan Respublikasının Nazirlər Kabineti tərəfindən müəyyən edilmiş məbləğdə xidmət haqqını ödəməklə təşkil olunan peşə tanınması imtahanında iştirak edir və müvafiq keçid balını topladığı təqdirdə tam tanınma əldə etmiş olur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 20,
    title:
      "Təhsil almaq istədiyim ixtisasın tanınıb-tanınmayacağını necə müəyyən edə bilərəm?",
    answer:
      "Seçdiyiniz ixtisasın Azərbaycan Respublikası Nazirlər Kabinetinin 2020-ci il 17 aprel tarixli 140 nömrəli Qərarı ilə təsdiq edilmiş “Orta ixtisas təhsili üzrə ixtisasların Təsnifatı”, Azərbaycan Respublikası Nazirlər Kabinetinin 2019-cu il 11 fevral tarixli 45 nömrəli Qərarı ilə təsdiq edilmiş “Ali təhsilin bakalavriat (əsas (baza ali) tibb təhsili) səviyyəsi üzrə ixtisasların (proqramların) Təsnifatı” və Azərbaycan Respublikası Nazirlər Kabinetinin 2011-ci il 14 iyun tarixli 95 nömrəli Qərarı ilə təsdiq edilmiş “Ali təhsilin magistratura səviyyəsi üzrə ixtisasların (ixtisaslaşmaların) Təsnifatı” yer almasına diqqət etməyinizi tövsiyə olunur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 21,
    title: "Təhsil aldığım ölkədə neçə ay qalmalıyam?",
    answer:
      "Qaydaların 4.1.4-cü yarımbəndinə əsasən orta ixtisas təhsili, bakalavriat (əsas (baza ali) tibb təhsili) və magistratura səviyyələrinə uyğun kvalifikasiyalara münasibətdə ərizəçinin hər bir tədris ili ərzində müvafiq kvalifikasiya üzrə nəzərdə tutulmuş təhsilin normativ müddətinin azı yarısı qədər təhsil aldığı ölkənin ərazisində olması (tibb və səhiyyə ixtisasları üzrə təhsilin normativ müddətində təhsil aldığı ölkənin ərazisində olması); 4.1.5-ci yarımbəndinə əsasən orta ixtisas təhsili, bakalavriat (əsas (baza ali) tibb təhsili) və magistratura səviyyələrinə uyğun kvalifikasiyalara münasibətdə ərizəçinin tədris müddətinin azı üçdə ikisində ənənəvi təlim metodlarına əsaslanan formal təhsilin əldə olunması (tibb və səhiyyə ixtisasları üzrə təhsilin normativ müddətində ənənəvi təlim metodlarına əsaslanan formal təhsilin əldə olunması) tələb olunur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 22,
    title:
      "Bəzi KİV-lərdə və xaricdə təhsil şirkətlərinin elanlarında ölkə xaricinə çıxmadan “onlayn” şəkildə ali təhsil almaqla bağlı reklamlar görürürəm. Sonda diplomum tanınacaqmı?",
    answer:
      "Bununla bağlı bildiririk ki, tanınma (xarici dövlətlərin ali təhsilə aid kvalifikasiyasının Azərbaycan Respublikasının ərazisində qüvvədə olmasının təsdiqi) Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust tarixli, 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması Qaydaları”na (bundan sonra Qaydalar) əsasən yalnız ənənəvi təlim metodlarına əsaslanan formal qaydada əyani və qiyabi təhsilalma formasında əldə olunmuş kvalifikasiyalara münasibətdə həyata keçirilir. Qaydaların 4.1.4-cü yarımbəndinə əsasən orta ixtisas təhsili, bakalavriat (əsas (baza ali) tibb təhsili) və magistratura səviyyələrinə uyğun kvalifikasiyalara münasibətdə ərizəçinin hər bir tədris ili ərzində müvafiq kvalifikasiya üzrə nəzərdə tutulmuş təhsilin normativ müddətinin azı yarısı qədər təhsil aldığı ölkənin ərazisində olması (tibb və səhiyyə ixtisasları üzrə təhsilin normativ müddətində təhsil aldığı ölkənin ərazisində olması); 4.1.5-ci yarımbəndinə əsasən orta ixtisas təhsili, bakalavriat (əsas (baza ali) tibb təhsili) və magistratura səviyyələrinə uyğun kvalifikasiyalara münasibətdə ərizəçinin tədris müddətinin azı üçdə ikisində ənənəvi təlim metodlarına əsaslanan formal təhsilin əldə olunması (tibb və səhiyyə ixtisasları üzrə təhsilin normativ müddətində ənənəvi təlim metodlarına əsaslanan formal təhsilin əldə olunması) tələb olunur.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 23,
    title:
      "Müraciətdən öncə tələb olunan sənədlər Azərbaycan dilinə tərcümə olunmalıdırmı?",
    answer:
      "Qaydaların 2.5-ci bəndinə əsasən bu Qaydaların 2.4-cü bəndində qeyd edilən sənədlər (türk, rus və ingilis dillərində verilmiş sənədlər istisna olmaqla) Azərbaycan dilinə tərcümə edilməli və notariat qaydasında təsdiq olunmalıdır.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 24,
    title:
      "Şəxsi kabinetimə necə giriş edim və müraciətimin statusuna haradan baxa bilərəm?",
    answer:
      "Şəxsi kabinetinizə SİMA ilə daxil olaraq, müraciətinizin statusunu izləyə bilərsiniz.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 25,
    title:
      "Xarici ali təhsil müəssisəsinin institusional akkreditasiyasının olub-olmamasını necə yoxlaya bilərəm?",
    answer:
      "Təhsil almaq istədiyiniz ali təhsil müəssisəsini seçərkən, təhsil müəsisəsinin (eləcə də, onun digər ölkələrdə fəaliyyət göstərən filiallarının) akkreditasiyasının olmasına diqqət yetirməyiniz tövsiyə olunur. Qaydalara əsasən müvafiq kvalifikasiyaya dair sənədin əldə olunduğu təhsil müəssisəsinin fəaliyyət göstərdiyi ölkədə səlahiyyətli keyfiyyət təminatı qurumu tərəfindən institusional (proqram deyil) akkreditasiyadan keçməsi və dövlət lisenziyasının olması tələb olunur. Bu məqsədlə, ENIC-NARIC (Avropa İnformasiya Mərkəzləri-Milli Akademik Tanınma üzrə İnformasiya Mərkəzləri) Şəbəkəsinin rəsmi internet səhifəsinin (www.enic-naric.net) müvafiq ölkə üzrə nəzərdə tutulmuş bölməsinə daxil olmaqla (yaxud yerli akkreditasiya orqanlarına müraciət etməklə), həmin ölkə tərəfindən tanınan və akkreditə olunan ali təhsil müəssisələrinin siyahısını əldə edə bilərsiniz.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 26,
    title:
      "Təhsil almaq istədiyim universitetin akkreditasiyası var. Buna baxmayaraq, diplomum tanınmaya bilər?",
    answer:
      "Bildiririk ki, hazırda tanınma (xarici dövlətlərin ali təhsilə aid kvalifikasiyasının Azərbaycan Respublikasının ərazisində qüvvədə olmasının təsdiqi)  Azərbaycan Respublikası Prezidentinin 2023-cü il 18 avqust tarixli, 2306 nömrəli Fərmanı ilə təsdiq edilmiş “Xarici dövlətlərin ali təhsilə aid kvalifikasiyalarının tanınması Qaydaları”na əsasən həyata keçirilir. Ali təhsil müəssisəsinin akkreditasiyadan keçməsi və dövlət lisenziyasının olması Qaydaların tanınmaya dair tələblərinin başlıca şərtlərindəndir lakin xaricdə əldə edilmiş diplomun tanınması üçün kifayət deyil. Xaricdə əldə olunmuş kvalifikasiyaların tanınması üçün Qaydaların 4-cü bölməsində qeyd olunan tanınmaya dair tələblərin tam təmin olunması şərtdir. Belə ki, Təhsildə Keyfiyyət Təminatı Agentliyi (TKTA) tərəfindən yalnız ənənəvi təlim metodlarına əsaslanan formal qaydada əyani və qiyabi (qiyabi “Baytarlıq təbabəti” və “Əczaçılıq” ixtisasları istisna olmaqla) təhsilalma formasında əldə olunmuş kvalifikasiyalara münasibətdə tanınma həyata keçirilir. Qaydaların həm 4.1.4-cü, həm də 4.1.5-ci yarımbəndlərinin tələblərinin ödənilməsi üçün şəxsin əyani təhsilama forması üzrə hər tədris ilinə münasibətdə ən az 4 ay və ümumi tədris müddətində illərin cəmi üzrə ən az 21 ay təhsil aldığı ölkədə fiziki olaraq olması şərtdir (tibb və səhiyyə ixtisasları üzrə təhsilin normativ müddətinin bütün dövrü ərzində təhsil aldığı ölkənin ərazisində olması). Bu  halda hər iki bənd üzrə tələblər təmin olunmuş olur. Qiyabi təhsilə gəldikdə isə Qaydaların 4.1.4-cü və 4.1.5-ci yarımbənlərinin tələblərinin ödənilməsi üçün hər tədris ilinə münasibətdə ərizəçinin 25 gün təhsil alacağı ölkədə olması şərtdir. Əlavə olaraq bildiririk ki, qeyd olunan müddətin tədris dövrünü əhatə etməsi zəruridir. Həmçinin seçilən ixtisasın Azərbaycan Respublikası Nazirlər Kabinetinin müvafiq qərarları ilə təsdiq edilmiş bakalavriat və ya magistratura səviyyələri üzrə təsnifatlarda yer alması, tədris müddətində seçilən dərslərin ixtisasla uyğunluq təşkil etməsi və minimum kredit həcminin qarşılanması və s. tələblərin qarşılanması zəruridir. Xüsusilə bildiririk ki, xarici ölkələrdə yerləşən universitetlərə getmədən qiyabi və əyani təhsilalma formaları üzrə “onlayn” qaydada əldə olunmuş xarici kvalifikasiyaların TKTA tərəfindən tanınması mümkün deyil.",
    category: "Kvalifikasiyaların tanınması",
  },
  {
    id: 24,
    title: "Qeyri-formal və informal təhsil nədir?",
    answer:
      "Qeyri-formal təhsil - formal təhsil mühitindən kənarda baş verən, yəni müxtəlif kurslarda, dərnəklərdə, təlim və ya fərdi məşğələlərdə, o cümlədən iş mühitində əldə edilən bilik, bacarıq və səriştələrin məcmusudur. İnformal təhsil - özünütəhsil yolu ilə biliklərə yiyələnmənin formasıdır. Belə ki, gündəlik həyatımızda müxtəlif mənbələrdən maraq dairəmizə, yaxud da ehtiyaclarımıza uyğun olaraq (daha çox təcrübəyə əsaslanan) əldə edilən bütün səriştələr bura aid edilə bilər.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 25,
    title:
      "Test imtahanında neçə sual olur və qiymətləndirilməsi neçə bal üzərindən olur?",
    answer:
      "Peşə ixtisasının hər bir modulu üzrə 10 sual olur. Hər bir düzgün cavab 1 (bir) balla qiymətləndirilir.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 26,
    title:
      "Ərizəçi imtahan nəticələri ilə razılaşmadıqda və ya şikayəti olduğu təqdirdə nəzərə alınırmı?",
    answer:
      "Bəli, qiymətləndirilmə və tanınmanın nəticələri ilə bağlı ərizəçinin şikayətinə baxılması üçün Agentlik tərəfindən Apelyasiya Komissiyası yaradılır və məsələyə yenidən baxılır.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 27,
    title: "İmtahan sualları, əsasən, hansı mövzuları əhatə edir?",
    answer:
      "Suallar ixtisas və baza modullarını əhatə edir. Suallar hazırlanarkən peşə standartları və müvafiq ixtisas üzrə kurikulumlar nəzərə alınaraq hazırlanır. Ərizəçilər qeydiyyat bölməsində hər ixtisas üzrə tərtib edilmiş metodik vəsait hissəsindən müvafiq modullarla tanış ola bilərlər.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 28,
    title: "Formal, informal və qeyri-formal təhsil arasında fərqlər nələrdir?",
    answer:
      "Formal təhsil dövlət təhsil sənədinin verilməsi ilə başa çatan təhsil formasıdır. Ümumi təhsil, ilk peşə təhsili, orta ixtisas təhsili, ali təhsil, yenidənhazırlanma təhsili, təkrar ali və ya orta ixtisas təhsili dövlət təhsil sənədinin verilməsi ilə başa çatdığı üçün formal təhsil hesab edilir. Qeyri-formal təhsil formal təhsil mühitindən kənarda baş verən yəni, müxtəlif kurslarda, dərnəklərdə, təlim və ya fərdi məşğələlərdə, o cümlədən, iş mühitində əldə edilən bilik, bacarıq və səriştələrin məcmusudur. İnformal təhsil isə özünütəhsil yolu ilə biliklərə yiyələnmənin formasıdır. Yəni, gündəlik həyatımızda müxtəlif mənbələrdən maraq dairəmizə, yaxud da ehtiyaclarımıza uyğun olaraq (daha çox təcrübəyə əsaslanan) əldə edilən bütün səriştələr bura aid edilə bilər. Formal təhsildən fərqli olaraq qeyri-formal və informal təhsil dövlət təhsil sənədinin verilməsi ilə müşayiət olunmur.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 29,
    title: "İmtahanlarda keçid balı neçədir?",
    answer:
      "Birinci, yəni nəzəri imtahanda sualların 50 faizindən çoxunu düzgün cavablandıran ərizəçi praktiki imtahana yəni bacarıq, səriştə və təcrübənin qiymətləndirilməsi mərhələsinə buraxılır. Bacarıq, səriştə və təcrübənin qiymətləndirilməsi mərhələsində tapşırığın ən azı 50 faizini düzgün icra edən ərizəçi “məqbul”, 50 faizindən az hissəsini düzgün icra edən ərizəçi isə “qeyri-məqbul” alır.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 30,
    title: "İmtahandan “qeyri-məqbul” aldıqda yenidən imtahan vermək olurmu?",
    answer:
      "Nəzəri imtahan mərhələsində “qeyri-məqbul” aldıqda heç bir məhdudiyyət olmadan ərizəçi yenidən imtahan üçün müraciət edə bilər. Praktiki imtahan, yəni bacarıq, səriştə və təcrübənin qiymətləndirilməsi mərhələsində “qeyri-məqbul” nəticə göstərən ərizəçi isə eyni modul üzrə qiymətləndirilmə üçün Agentliyə 6 (altı) aydan sonra təkrar müraciət edə bilər.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 31,
    title:
      "Peşə təhsili üzrə qeyri-formal və informal təhsil formaları vasitəsilə əldə edilmiş bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması prosesi hansı qaydalarla tənzimlənir?",
    answer:
      "Bu proses Nazirlər Kabinetinin 2020-ci il 5 avqust tarixli qərarı ilə təsdiqlənmiş “Vətəndaşların peşə təhsili üzrə qeyri-formal və informal təhsil formaları vasitəsilə əldə etdikləri bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması məqsədilə imtahanın keçirilməsi və onlara peşə ixtisasını təsdiq edən sənədin verilməsi Qaydası” əsasında həyata keçirilir.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 32,
    title:
      "Peşə təhsili üzrə qeyri-formal və informal təhsil formaları vasitəsilə əldə edilmiş bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması üçün kimlər müraciət edə bilər?",
    answer:
      "Ümumi orta təhsili səviyyəsini ən az 4 (dörd) il əvvəl və ya tam orta təhsil səviyyəsini ən az 2 (iki) il əvvəl bitirərək, müraciət etdiyi müvafiq ixtisas üzrə azı 2 (iki) il qeyri-formal və informal təhsil formaları vasitəsilə bilik, bacarıq, səriştə və təcrübə əldə edən vətəndaşlar qiymətləndirilmə və tanınma üçün müraciət edə bilərlər.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 33,
    title:
      "Hansı ixtisaslar üzrə qeyri-formal və informal təhsilin qiymətləndirilməsi və tanınması həyata keçirilir?",
    answer:
      "Qeyri-formal və informal təhsilin qiymətləndirilməsi və tanınması yalnız peşə təhsili ixtisasları üzrə həyata keçirilir.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 34,
    title:
      "Vətəndaşlar qeyri-formal və informal təhsil formaları vasitəsilə əldə etdikləri bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması üçün nə etməlidirlər?",
    answer:
      "Peşə təhsili üzrə qeyri-formal və informal formaları vasitəsilə əldə edilmiş bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması üçün Təhsildə Keyfiyyət Təminatı Agentliyinin veb saytına daxil olaraq, Kvalifikasiyaların tanınması hissəsinə daxil olub Qeyri-formal və informal təhsilin tanınmasını seçirik. Qiymətləndirmə və tanınma üçün müraciət elektron qaydada həyata keçirilir.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 35,
    title:
      "Peşə təhsili üzrə qeyri-formal və informal təhsil formaları vasitəsilə əldə edilmiş bilik, bacarıq, səriştə və təcrübənin qiymətləndirilməsi və tanınması üçün hansı sənədlər tələb olunur?",
    answer:
      "İlkin baxışın aparılması üçün müvafiq ixtisas üzrə bilik, bacarıq, səriştə və təcrübəni özündə əks etdirən aşağıdakı sənədlərin və materialların qeydiyyatdan keçən zaman təqdim olunması tələb edilir. Şəxsiyyəti təsdiq edən sənədin surəti; Təhsil haqqında dövlət sənədinin surəti (attestat və yaxud diplom); Bilik, bacarıq, səriştə və təcrübəni əks etdirən sənədlər (fotoşəkillər) Əmək kitabçası (olduğu halda); İş təcrübəsi haqqında arayış və müvafiq sertifikatlar (olduğu halda); Məcburi dövlət sosial sığorta şəhadətnaməsi (olduğu halda).",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 36,
    title:
      "İmtahan neçə mərhələdən ibarətdir və kimlər tərəfindən qiymətləndirilir?",
    answer:
      "İmtahanlar ixtisas üzrə təyin edilmiş ekspertlər tərəfindən qiymətləndirilir. İmtahan 2 mərhələdən ibarətdir: Nəzəri və praktiki mərhələ. Birinci, yəni nəzəri imtahanın suallarının 50 faizindən çoxunu düzgün cavablandıran ərizəçi ikinci imtahana, yəni bacarıq, səriştə və təcrübənin qiymətləndirilməsi mərhələsinə buraxılır. Bacarıq, səriştə və təcrübənin qiymətləndirilməsi nəticəsində tapşırığın ən azı 50 faizini düzgün icra edən ərizəçi “məqbul”, 50 faizindən az hissəsini düzgün icra edən ərizəçi isə “qeyri-məqbul” alır.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 37,
    title:
      "Qeyri-formal və informal təhsilin tanınması üçün ödəniş məbləği nə qədərdir?",
    answer:
      "Azərbaycan Respublikası Nazirlər Kabinetinin 25 dekabr 2020-ci il tarixili 508 nömrəli qərarına əsasən müvafiq ixtisas üzrə biliklərin qiymətləndirilməsi üçün 100 AZN , bacarıq, səriştə və təcrübənin qiymətləndirilməsi üçün isə hər modul üzrə 80 AZN məbləğində ödəniş tələb olunur.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 38,
    title:
      "Qeyri-formal və informal təhsilin tanınması zamanı ödəniş hansı mərhələdə həyata keçirilir?",
    answer:
      "Müraciət üçün heç bir ödəniş tələb olunmur. Yalnız ilkin baxış mərhələsindən uğurla keçən ərizəçilərdən müvafiq ixtisas üzrə biliklərin qiymətləndirilməsi üçün 100 AZN məbləğində ödəniş qəbzi, nəzəri biliklərin qiymətləndirilməsi mərhələsindən də uğurla keçərsə bacarıq, səriştə və təcrübənin qiymətləndirilməsi mərhələsi iştirak etmək üçün imtahan veriləcək hər modula görə 80 AZN məbləğində ödəniş qəbzi tələb olunur.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 39,
    title:
      "Qeyri-formal və informal təhsilin tanınması üzrə xidmət haqqını necə ödəyə bilərəm?",
    answer:
      "Təhsildə Keyfiyyət Təminatı Agentliyinin büdcə üzrə hesab rekvizitləri ilə birlikdə istənilən bank filialına yaxınlaşmağınız və ödənişi Nazirliyin hesabına köçürməyiniz, eləcə də, ABB Mobile proqramı vasitəsilə onlayn qaydada ödəniş etməyiniz mümkündür.",
    category: "Qeyri-formal və informal təhsil",
  },
  {
    id: 40,
    title: "Təhsil müəssisəsi üçün akkreditasiyanın əhəmiyyəti nədir?",
    answer:
      "Təhsil müəssisəsi öz fəaliyyətinə və ya tədris etdiyi təhsil proqramlarına hüquqi təminat əldə etmək üçün akkreditasiyadan keçməlidir. Lakin akkreditasiya prosedurundan keçməyin təhsil müəssisəsinə bir sıra digər müsbət təsirləri də var. Bunların sırasına, təhsil müəssisəsinin fəaliyyətinin qiymətləndirilməsi, müəssisədə keyfiyyət təminatı mədəniyyətinin formalaşması və təhsilin keyfiyyətinin Avropa Ali Təhsil Məkanının müddəalarında necə cavab verdiyinin müəyyən edilməsi daxildir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 41,
    title: "Akkreditasiya Meyarları nədir?",
    answer:
      "Akkreditasiya Meyarları təhsil müəssisəsinin fəaliyyətinin və təhsil proqramlarının icrasının dövlət təhsil standartlarına uyğunluğunun qiymətləndirilməsi üzrə ölçülər toplusudur.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 42,
    title: "Akkreditasiya nədir?",
    answer:
      "Təhsil müəssisəsinin akkreditasiyası təhsil müəssisəsinin fəaliyyətinin qəbul olunmuş dövlət təhsil standartlarına və digər normativ hüquqi aktların tələblərinə uyğunluğunun yoxlanılması məqsədilə aparılır və təhsil müəssisəsinin statusunun, hər bir ixtisas (proqram) üzrə təhsilalanların say həddinin müəyyən edilməsi, onun fəaliyyətinin növbəti müddətə uzadılması üçün hüquqi təminat yaradır.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 43,
    title: "Akkreditasiya hansı mərhələlərdən ibarətdir?",
    answer:
      "Təhsil müəssisəsinin akkreditasiyası hazırlıq, qiymətləndirmə, akkreditasiyaya dair qərarın verilməsi mərhələlərdən ibarətdir. Hazırlıq mərhələsində təhsil müəssisəsinə akkreditasiyanın başlanılmasına dair rəsmi məlumatın göndərilməsi, təhsil müəssisəsinin ərizəsinin və akkreditasiya üçün tələb olunan sənədlərin təqdim edilməsi, müraciətin və sənədlərin ilkin qiymətləndirilməsi və Akkreditasiya Komissiyasının yaradılması prosesləri mərhələlərlə həyata keçirilir. Qiymətləndirmə mərhələsində Akkreditasiya Komissiyası tərəfindən təhsil müəssisəsinin institusional fəaliyyətinin və onun təhsil proqramlarının icrasının qiymətləndirilməsi həyata keçirilir. Akkreditasiyaya dair qərarın verilməsi mərhələsində Yekun Hesabatın təhsil müəssisəsi ilə Akkreditasiya Komissiyası arasında müzakirə olunması və akkreditasiya ilə bağlı müvafiq qərarın verilməsi prosesləri mərhələlərlə həyata keçirilir",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 44,
    title: "Akkreditasiya hansı qanunvericilik çərçivəsində icra edilir?",
    answer:
      "Təhsil müəssisələrinin akkreditasiyası Azərbaycan Respublikası Nazirlər Kabinetinin 28 sentyabr 2010-cu il tarixli, 167 nömrəli qərarı ilə təsdiq edilmiş “Təhsil haqqında” Azərbaycan Respublikası Qanunu, “Təhsil müəssisələrinin akkreditasiyası” Qaydaları, Azərbaycan Respublikasının Elm və Təhsil Nazirliyinin Kollegiyasının 30 sentyabr 2022-ci il tarixli KQ-05 nömrəli Qərarı ilə təsdiq edilmiş “Ali təhsil müəssisəsinin institusional akkreditasiyası üzrə qiymətləndirmə meyarları” və “Ali təhsil müəssisəsinin proqram akkreditasiyası üzrə qiymətləndirmə meyarları” adlı müvafiq olaraq 1 və 2 nömrəli əlavələrlə tənzimlənir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 45,
    title:
      "Təhsil aldığım təhsil müəssisəsinin akkreditasiyası haqqında məlumatı necə əldə edə bilərəm?",
    answer:
      "Təhsil müəssisəsinin akkreditasiyası haqqında məlumatı info@tkta.edu.az ünvanına ərizə ilə müraciət etməklə əldə etmək olar.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 46,
    title:
      "Təhsil fəaliyyətinin lisenziyalaşdırılması nədir və kimlər müraciət edə bilər?",
    answer:
      "Azərbaycan Respublikasında dövlət təhsil müəssisələri istisna olmaqla, hər bir təhsil müəssisəsi təhsil fəaliyyəti göstərmək üçün “Lisenziyalar və icazələr haqqında” Azərbaycan Respublikasının Qanununa uyğun olaraq müəyyən edilmiş qaydada lisenziya almalıdır. Belə ki, Azərbaycan Respublikasında hüquqi şəxs kimi dövlət qeydiyyatına alınmış, fəaliyyətinə lisenziya verilmiş və akkreditasiya olunmuş təhsil müəssisəsinin fəaliyyətinə hüquqi təminat verilir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 47,
    title:
      "Ali təhsil müəssisəsi tərəfindən təqdim edilmiş diplomun həqiqiliyi haqqında rəyi necə əldə etmək olar?",
    answer:
      "Azərbaycan Respublikası ərazisində fəaliyyət göstərən ali təhsil müəssisələrində təhsil almış vətəndaşlar və əcnəbilər, info@eatda.edu.az ünvanına e-poçt göndərməklə və ya 146 (daxili 6) telefon nömrəsi ilə əlaqə saxlamaqla Elm və Ali Təhsil üzrə Dövlət Agentliyinə (EATDA) müraciət edə bilərlər. Təhsildə Keyfiyyət Təminatı Agentliyi Azərbaycan Respublikası ərazisində fəaliyyət göstərən ali təhsil müəssisələri tərəfindən təqdim edilmiş diplomlar haqqında rəyi vermir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 48,
    title:
      "Təhsil müəssisəsinin və ya proqramın akkreditasiyası haqqında rəyi necə əldə etmək olar?",
    answer:
      "Azərbaycan Respublikası ərazisində təhsil aldığınız təhsil müəssisəsi və ya proqramın akkreditasiya olunması haqqında rəsmi rəyi almaq məqsədilə nümunəvi Ərizə və ona əlavələrini info@tkta.edu.az ünvanına göndərməklə müraciət etmək olar.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 49,
    title:
      "Təhsil fəaliyyətinin lisenziyalaşdırılması üçün necə müraciət edilir?",
    answer:
      "Təhsil müəssisələrinin fəaliyyətinə lisenziya verilməsi xidmətinin həyata keçirilməsi “ASAN xidmət” mərkəzləri və ya “Lisenziyalar və icazələr” portalı vasitəsilə müraciət edilə bilər. Müraciətin inzibati proseduru haqqında məlumatı www.lisenziya.gov.az səhifəsindən əldə etmək olar.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 50,
    title: "Akkreditasiyaya dair dövlət rüsumu nə qədərdi?",
    answer:
      "Təhsil müəssisəsinin akkreditasiyasına görə “Dövlət rüsumu haqqında” Azərbaycan Respublikasının Qanununda təsbit olunmuş məbləğdə dövlət rüsumu ödənilir. Ətraflı məlumat üçün https://e-qanun.az/framework/2860 linkinə müraciət edə bilərsiz.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 51,
    title:
      "Akkreditasiya zamanı istifadə olunan qanunvericilik toplusu hansılardı?",
    answer:
      "Təhsil Haqqında Azərbaycan Respublikasının Qanunu - Təhsil Müəssisələrinin Akkreditasiya Qaydaları - Akkreditasiya işinin təşkilinə dair Təlimatlar - Hər bir təhsil pilləsi üzrə institusional və proqram akkreditasiya Meyarları - Akkreditasiya Komissiyası haqqında Əsasnamə - Akkreditasiya Şurası haqqında Əsasnamə - Apellyasiya Komissiyası haqqında Əsasnamə - “Ali təhsil müəssisəsinin akkreditasiyası üzrə qiymətləndirmə meyarları”nın təsdiq edilməsi barədə Azərbaycan Respublikası Təhsil Nazirliyinin Kollegiyasının qərarı - Azərbaycan Respublikasının ömürboyu təhsil üzrə Milli Kvalifikasiyalar Çərçivəsi - “Elektron imza və elektron sənəd haqqında” Azərbaycan Respublikasının Qanunu - “Dövlət rüsumu haqqında” Azərbaycan Repuslibkasının Qanunu - Uyğunluğun qiymətləndirilməsi sahəsində akkreditasiya haqqında” Azərbaycan Respublikasinin Qanunu - Akkreditasiya qiymətləndirilməsi xidmətlərinin göstərilməsi haqqında müqavilə formaları",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 52,
    title: "Akkreditasiya hansı təhsil pillələrinə aid edilir?",
    answer:
      "Akkreditasiyadan keçirilməsi nəzərdə tutulan təhsil müəssisələri aşağıdakılardır: Məktəbəqədər təhsil müəssisələri; - Ümumi təhsil müəssisələri; - Məktəbdənkənar təhsil müəssisələri; - Peşə təhsili müəssisələri; - Orta ixtisas təhsili müəssisələri; - Ali təhsil müəssisələri; - Əlavə təhsil müəssisələri; - Təhsil fəaliyyəti həyata keçirən digər müəssisələr.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 53,
    title: "Akkreditasiyanın hansı növləri var?",
    answer:
      "Akkreditasiyanın iki növü mövcuddur: İnstitusional və proqram akkreditasiyası. İnstitusional akkreditasiya təhsil müəssisəsinin ümumi fəaliyyətinin qəbul olunmuş dövlət təhsil standartlarına, digər normativ hüquqi aktların tələblərinə uyğunluğunun yoxlanılması məqsədilə aparılır və təhsil müəssisəsinin statusunun müəyyən edilməsi, hər bir ixtisas üzrə kadr hazırlığı potensialının, təhsilalanların say həddinin müəyyənləşdirilməsi və müəssisənin fəaliyyətinin növbəti müddətə uzadılması üçün hüquqi təminat yaradır. Təhsil proqramının akkreditasiyası qüvvədə olan müvafiq təhsil pillələri üzrə təsnifatlara istinadən təşkil olunaraq, təhsil müəssisələrində tədris edilən təhsil proqramlarının maddi-texniki və tədris bazasını, təhsilverənlərin keyfiyyət göstəricilərini və təhsilalanların bilik, bacarıq və vərdişlərinin səviyyəsinin əmək bazarının tələblərinə uyğunluğunu və proqramın icrasını qiymətləndirərək hər bir ixtisas üzrə kadr hazırlığı potensialının və təhsilalanların say həddinin müəyyən olunmasına hüquqi təminat yaradır.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 54,
    title: "Özünütəhlil və Yekun hesabat nədir?",
    answer:
      "Özünütəhlil hesabatı - Akkreditasiya Meyarları əsasında təhsil müəssisəsinin təhsilin keyfiyyət səviyyəsinin təmin olunmasına dair ümumi fəaliyyəti və ayrı-ayrı təhsil proqramlarının icrası üzrə təhlilini əks etdirən özünüqiymətləndirmə sənədidir. Yekun hesabat Akkreditasiya Komissiyası tərəfindən keçirilən akkreditasiya qiymətləndirilməsinin nəticələrini əks etdirən sənəddir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 55,
    title: "Akkreditasiya qrafiki nədir?",
    answer:
      "Akkreditasiya qrafiki hər təqvim ili üzrə Agentlik tərəfindən hazırlanan və rəsmi internet səhifəsində yerləşdirilən akkreditasiya ardıcılığıdır.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 56,
    title: "Akkreditasiya prosesindən məsul qurum hansıdır?",
    answer:
      "Təhsil müəssisəsinin akkreditasiyası Azərbaycan Respublikası Elm vəTəhsil Nazirliyinin tabeliyində publik hüquqi şəxs statusu olan Təhsildə Keyfiyyət Təminatı Agentliyi tərəfindən həyata keçirilir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 57,
    title: "Proqram akkreditasiyası nədir?",
    answer:
      "Təhsil proqramının akkreditasiyası qüvvədə olan müvafiq təhsil pillələri üzrə təsnifatlara istinadən təşkil olunaraq, təhsil müəssisələrində tədris edilən təhsil proqramlarının maddi-texniki və tədris bazasını, təhsilverənlərin keyfiyyət göstəricilərini və təhsilalanların bilik, bacarıq və vərdişlərinin səviyyəsinin əmək bazarının tələblərinə uyğunluğunu və proqramın icrasını qiymətləndirərək hər bir ixtisas üzrə kadr hazırlığı potensialının və təhsilalanların say həddinin müəyyən olunmasına hüquqi təminat yaradır.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 58,
    title:
      "Lisenziya əldə olunması ilə bağlı əlavə suallar olduğu halda nə etməli?",
    answer:
      "Əlavə suallar olduğu təqdirdə, “ASAN xidmət” mərkəzlərinə müraciət edilə və ya İqtisadiyyat Nazirliyinin Çağrı Mərkəzi (195-2) ilə əlaqə saxlanıla bilər.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 59,
    title:
      "Təhsil müəssisələrinin fəaliyyətinə lisenziya əldə olunması üçün edilmiş müraciətlərə hansı müddətə baxılır?",
    answer:
      "İqtisadiyyat Nazirliyi təqdim olunmuş sənədlərə baxılmasının nəticəsi əsasında ərizənin qeydiyyata alındığı tarixdən 10 iş günündən gec olmayaraq, lisenziyanı verir və ya verilməsindən imtina haqqında inzibati akt qəbul edir. Nəzərə alınmalıdır ki, İqtisadiyyat Nazirliyi “Lisenziyalar və icazələr haqqında” Azərbaycan Respublikası Qanununun 19.6.1-ci maddəsinə uyğun olaraq, Məktəbəqədər təhsil müəssisələrinin fəaliyyətinə lisenziya verilməsi üçün Təhsil Nazirliyinə rəy (razılıq) alınması məqsədi ilə müraciət etdikdə, ona 7 iş günü müddətində baxılaraq cavab verilir. Təhsil Nazirliyinin əsaslandırılmış müraciəti ilə həmin müddət 20 gündən çox olmayan müddətə uzadıla bilər. Bu müddət ərzində rəy (razılıq) bildirilmədikdə, rəy müsbət (razılıq verilmiş) hesab olunur. Təhsil Nazirliyi tərəfindən rəy (razılıq) verilməsi üçün bu Qanunla nəzərdə tutulan müddət lisenziya və icazə verilməsi ilə bağlı ümumi müddətə daxil edilmir. Bu Qanunun 19.6.3-cü maddəsinə uyğun olaraq, lisenziya və icazə verən orqan ekspert və ya mütəxəssisin cəlb olunması ilə bağlı aidiyyəti dövlət orqanına müraciət etdikdə, həmin dövlət orqanı 1 iş günü ərzində öz ekspert və ya mütəxəssisini təqdim etməlidir. Ekspert rəyinin alınması və ya mütəxəssis rəyinin bildirilməsi üçün təyin olunan müddət 5 iş günündən çox olmamalıdır. Bu müddət lisenziya və icazə verilməsi ilə bağlı ümumi müddətə daxil edilmir.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 60,
    title:
      "Təhsil müəssisələrinin fəaliyyətinə lisenziya əldə olunması üçün hansı sənədlər tələb olunur?",
    answer:
      "1. Ərizə. 2. Ərizəyə əlavə olunan sənədlər: 2.1. hüquqi şəxslərin dövlət reyestrindən çıxarışın surəti; 2.2. ərizəçinin vergi ödəyicisi kimi uçota alınması haqqında şəhadətnamənin surəti; 2.3. ərizədə qeyd olunan obyektlərdən hər biri üzərində ərizəçinin mülkiyyət, istifadə və ya icarə hüququnu təsdiq edən sənədin surəti; 2.4. təhsil müəssisəsinin pedaqoji, elmi-pedaqoji işçiləri haqqında məlumat; 2.5. təhsil müəssisəsinin maddi-texniki bazası (yerləşdiyi binanın ümumi və tədris sahəsi, təhsil, təcrübə, qrup, yataq otaqlarının sayı, laboratoriya, kitabxana, idman, musiqi zalı, həkim otağı və izolyator, mətbəx, metodiki kabinet, sanitar qovşağı və s.) və təlim-tərbiyə prosesinin təminatı haqqında ətraflı məlumat (texniki təminat vasitələri, proqram, metodiki təminat, didaktik materiallarla təminat və s.).",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 61,
    title:
      "Təhsil müəssisələrinin fəaliyyətinə lisenziya əldə olunması üçün kimlər müraciət edə bilər?",
    answer:
      "Təşkilati hüquqi formasından asılı olmayaraq, hüquqi şəxs, xarici hüquqi şəxsin filialı və nümayəndəliyi təhsil müəssisələrinin fəaliyyətinə lisenziya alınması üçün səlahiyyətli orqana müraciət edə bilər.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 62,
    title:
      "Təhsil müəssisələrinin fəaliyyətinə lisenziya verilməsinə dair istinad edilən normativ- hüquqi aktlar hansılardır?",
    answer:
      'Təhsil müəssisələrinin fəaliyyətinə lisenziya verilməsinə dair istinad edilən əsas normativ- hüquqi aktlar aşağıdakılardır: - "Lisenziyalar və icazələr haqqında" Azərbaycan Respublikası Qanununun 1 nömrəli əlavəsi - "Lisenziya tələb olunan fəaliyyət növlərinin (dövlət təhlükəsizliyindən irəli gələn hallar istisna olmaqla) siyahısı"nın 5.1-ci maddəsi; -"Təhsil haqqında" Azərbaycan Respublikası Qanununun 16.-cı maddəsi; - "Dövlət rüsumu haqqında" Azərbaycan Respublikası Qanununun 22.0.5.1-ci və 23-cü maddələri; - Azərbaycan Respublikası Prezidentinin 2014-cü il 20 fevral tarixli 111 nömrəli Fərmanı ilə təsdiq edilmiş "Azərbaycan Respublikasının İqtisadiyyat Nazirliyi haqqında Əsasnamə"nin 3.0.66-cı yarımbəndi; - “Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin fəaliyyətinin təmin edilməsi haqqında” Azərbaycan Respublikası Prezidentinin 2012-ci il 5 sentyabr tarixli 706 nömrəli Fərmanının 5.18-ci bəndi; - Azərbaycan Respublikası Prezidentinin 2017-ci il 21 yanvar tarixli 1205 nömrəli Fərmanı ilə təsdiq edilmiş “Lisenziyalar və icazələr” portalı haqqında Əsasnamə”; - Azərbaycan Respublikası Nazirlər Kabinetinin 2002-ci il 7 noyabr tarixli, 174 nömrəli Qərarı ilə təsdiq edilmiş “Fəaliyyət növlərinin xüsusiyyətindən asılı olaraq xüsusi razılıq (lisenziya) verilməsi üçün tələb olunan əlavə şərtlər”in 12.1-ci və 12.2-ci hissələri; - Azərbaycan Respublikası Nazirlər Kabinetinin 2012-ci il tarixli 3 avqust, 171 nömrəli Qərarı ilə təsdiq edilmiş “Təhsil müəssisələrinin tikintisinə, maddi-texniki təchizatına dair vahid normalar, ümumi sanitariya-gigiyena tələbləri, şagird yerləri ilə təminat normativləri”; - Hər bir təhsil pilləsinə dair müvafiq hüquqi-normativ aktlar.',
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 63,
    title: "İnstitusional akkreditasiya nədir?",
    answer:
      "İnstitusional akkreditasiya təhsil müəssisəsinin ümumi fəaliyyətinin qəbul olunmuş dövlət təhsil standartlarına və digər normativ hüquqi aktların tələblərinə uyğunluğunun yoxlanılması məqsədi ilə aparılır və təhsil müəssisəsinin statusunun müəyyən edilməsi, hər bir ixtisas üzrə kadr hazırlığı potensialının və təhsilalanların say həddinin müəyyən olunması və onun fəaliyyətinin növbəti müddətə uzadılması üçün hüquqi təminat yaradır.",
    category: "Akkreditasiya və Lisenziya",
  },
  {
    id: 64,
    title:
      "Təhsil müəssisələrinin fəaliyyətinə lisenziya əldə olunması üçün hara və necə müraciət olunmalıdır?",
    answer:
      "Mövcud qanunvericiliyə əsasən hazırda təhsil müəssisələrinin fəaliyyəti üçün lisenziya Azərbaycan Respublikasının İqtisadiyyat Nazirliyi tərəfindən verilir. İqtisadiyyat Nazirliyi tərəfindən 9 “ASAN xidmət” mərkəzi (5 saylı Bakı, Sumqayıt, Bərdə, Sabirabad, Gəncə, Qəbələ, Masallı, Quba, Mingəçevir), o cümlədən “Lisenziyalar və icazələr” portalı (lisenziya.gov.az) vasitəsilə lisenziyaların verilməsi üçün sahibkarlara xidmətlər göstərilir, ərizələrin qəbulu və lisenziyaların verilməsi həyata keçirilir. “ASAN xidmət” mərkəzlərində sahibkarlara lisenziyaların verilməsi ilə yanaşı vaxt itkisi və əlavə sənədləşmə işləri ilə qarşılaşmamaları üçün lisenziya almaq istəyən sahibkarlara İqtisadiyyat Nazirliyi tərəfindən məsləhət xidmətləri də göstərilməkdədir.",
    category: "Akkreditasiya və Lisenziya",
  },
];

export default function FAQ() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        MÜNTƏZƏM VERİLƏN SUALLAR (FAQ)
      </h1>

      <Tabs
        defaultValue="qualifications-recognition"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="qualifications-recognition"
          >
            Kvalifikasiyaların tanınması
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="informal-education"
          >
            Qeyri-formal və informal təhsil
          </TabsTrigger>

          <TabsTrigger
            className="w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="licence"
          >
            Akkreditasiya və Lisenziya
          </TabsTrigger>
        </TabsList>

        <TabsContent value="qualifications-recognition">
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="w-full">
              {faq
                .filter((q) => q.category === "Kvalifikasiyaların tanınması")
                .map((question) => (
                  <AccordionItem
                    key={question.id}
                    value={`item-${question.id}`}
                  >
                    <AccordionTrigger>{question.title}</AccordionTrigger>

                    <AccordionContent>{question.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="informal-education">
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="w-full">
              {faq
                .filter((q) => q.category === "Qeyri-formal və informal təhsil")
                .map((question) => (
                  <AccordionItem
                    key={question.id}
                    value={`item-${question.id}`}
                  >
                    <AccordionTrigger>{question.title}</AccordionTrigger>

                    <AccordionContent>{question.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="licence">
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="w-full">
              {faq
                .filter((q) => q.category === "Akkreditasiya və Lisenziya")
                .map((question) => (
                  <AccordionItem
                    key={question.id}
                    value={`item-${question.id}`}
                  >
                    <AccordionTrigger>{question.title}</AccordionTrigger>

                    <AccordionContent>{question.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
