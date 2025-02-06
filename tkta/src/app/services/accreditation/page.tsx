import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Accreditation() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Akkreİtasİya
      </h1>

      <Tabs
        defaultValue="accreditation-process"
        className="w-full px-[112px] flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="accreditation-process"
          >
            Akkreditasiya prosesi
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="regulatory_documents"
          >
            Normativ sənəd və təlimatlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accreditation-process">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              Akkreditasiya prosesi institusional və proqram olmaqla iki növə
              ayrılır.
            </h2>

            <ol className="list-decimal flex flex-col gap-4">
              <li>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold">İnstitusional akkreditasiya</h3>

                  <div>
                    Təhsil müəssisəsinin akkreditasiyası onun fəaliyyətinin
                    qəbul olunmuş dövlət təhsil standartlarına və digər normativ
                    hüquqi aktların tələblərinə uyğunluğunun yoxlanılması
                    məqsədi ilə aparılır. Proses təhsil müəssisəsinin
                    statusunun, hər bir ixtisas (proqram) üzrə təhsilalanların
                    say həddinin müəyyən edilməsi, onun fəaliyyətinin növbəti
                    müddətə uzadılması üçün hüquqi təminat yaradır. Təhsil
                    müəssisəsinin akkreditasiyası Təhsildə Keyfiyyət Təminatı
                    Agentliyi tərəfindən 5 ildən bir həyata keçirilir. Müvafiq
                    keyfiyyət sənədinin – şəhadətnamənin verilməsi ilə başa
                    çatır. Təhsil müəssisələrinin akkreditasiya
                    qiymətləndirməsində istinad edilən{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary italic hover:underline"
                      href="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737958967/documents/e6txsswvt5fa0up7tejh.pdf"
                    >
                      Normativ hüquqi sənədlər
                    </Link>
                  </div>

                  <h4 className="font-bold">
                    Akkreditasiyaya dair dövlət rüsumu
                  </h4>

                  <div>
                    Təhsil müəssisəsinin akkreditasiyasına görə{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary italic hover:underline"
                      href="https://e-qanun.az/framework/2860"
                    >
                      “Dövlət rüsumu haqqında”
                    </Link>{" "}
                    Azərbaycan Respublikasının Qanununda təsbit olunmuş məbləğdə
                    dövlət rüsumu ödənilir. Qanuna əsasən ali təhsil
                    müəssisələrinin institusional akkreditasiyaya dair rüsumun
                    məbləği 20.000 AZN təşkil edir.
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold">Proqram akkreditasiyası</h3>

                  <div>
                    Təhsil müəssisələrinin akkreditasiyasının ikinci növü
                    proqram akkreditasiyasıdır. Proqram akkreditasiyası qüvvədə
                    olan müvafiq təhsil pillələri üzrə təsnifatlara əsasən
                    təşkil olunur. Təhsil müəssisələrində tədris edilən təhsil
                    proqramlarının maddi-texniki və tədris bazasını,
                    təhsilverənlərin keyfiyyət göstəricilərini və
                    təhsilalanların bilik, bacarıq və vərdişlərinin səviyyəsinin
                    əmək bazarının tələblərinə uyğunluğunu və proqramın icrasını
                    qiymətləndirir. Hər bir ixtisas üzrə kadr hazırlığı
                    potensialının və təhsilalanların say həddinin müəyyən
                    olunmasına hüquqi təminat yaradır. Proqram akkreditasiyası
                    üçün dövlət rüsumu nəzərdə tutulmur.
                  </div>

                  <h4 className="font-bold">
                    Təhsil müəssisələrinin akkreditasiyası elektron informasiya
                    altsistemi
                  </h4>

                  <div>
                    Akkreditasiyaya dair müraciətlər yalnız elektron qaydada
                    edilir. Həmin müraciətlər{" "}
                    <span className="font-bold">
                      “Təhsil Mərkəzləşdirilmiş İnformasiya Sistemi”
                    </span>
                    ndə (TMİS) qeydiyyata alınır və hər bir təhsil müəssisəsinə
                    sistemdə şəxsi kabinet açılır. Müraciət Agentliyə daxil
                    olduqdan sonra təhsil müəssisəsinin müraciətdə göstərdiyi
                    əlaqə telefonuna və elektron poçt ünvanına qeydiyyat şifrəsi
                    göndərilir. Müəssisə qeydiyyat şifrəsi vasitəsilə onun üçün
                    açılmış şəxsi kabinetdə olan məlumatları əldə edə və
                    müraciətinin statusunu izləyə bilər.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="regulatory_documents">
          <div className="flex flex-col gap-6">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-textPrimary italic hover:underline"
              href="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737961948/documents/liy0p8o1xwszbaxmxac2.pdf"
            >
              Normativ sənədlər
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
