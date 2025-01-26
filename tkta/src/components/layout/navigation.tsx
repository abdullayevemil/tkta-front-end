import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuSub,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./navigation-link";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <NavigationMenu className="w-full max-w-full">
      <NavigationMenuList className="w-full justify-evenly max-w-full">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/agency">Agentlik</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
              <NavigationMenuSub className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="h-fit font-helvetica w-full flex flex-row justify-left p-0 text-left">
                      <ListItem
                        className="hover:bg-transparent"
                        href="/agency/about"
                        title="Haqqımızda"
                      >
                        Agentlik haqqında məlumat
                      </ListItem>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="left-64 top-0 z-50">
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                        <li>
                          <ListItem
                            href="/agency/about/institutional"
                            title="Daxili keyfiyyət təminatı sistemi"
                          ></ListItem>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuSub>

              <li>
                <ListItem href="/agency/principles" title="Rəhbərlik">
                  Komanda və idarəçilər
                </ListItem>
              </li>

              <li>
                <ListItem href="/agency/structure" title="Struktur">
                  Agentliyin daxili quruluşu
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/services">Fəaliyyət Sahələri</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
              <li>
                <ListItem
                  href="/services/qualifications-recognition"
                  title="Xarici kvalifikasiyaların tanınması"
                >
                  Diplom və sənəd tanınması
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/services/education-recognition"
                  title="Qeyri formal və informal təhsilin tanınması"
                >
                  Sertifikatsız təhsilin təsdiqi
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/services/accreditation"
                  title="Akkreditasiya və lisenziya"
                >
                  Rəsmi təsdiq və qiymətləndirmə
                </ListItem>
              </li>

              <NavigationMenuSub defaultValue="sub1" className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="h-fit font-helvetica w-full flex flex-row justify-left p-0 text-left">
                      <ListItem
                        href="/services/training-methodology"
                        title="Təlim və metodologiya"
                        className="hover:bg-transparent"
                      >
                        Öyrətmə üsul və yanaşmaları
                      </ListItem>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="left-64 top-0 z-50">
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                        <li>
                          <ListItem
                            href="/services/training-methodology/experts-registration"
                            title="Ekspertların qeydiyyatı"
                          ></ListItem>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuSub>

              <NavigationMenuSub defaultValue="sub1" className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="h-fit font-helvetica w-full flex flex-row justify-left p-0 text-left">
                      <ListItem
                        href="/services/analysis"
                        title="Analitik təhlil"
                        className="hover:bg-transparent"
                      >
                        Məlumatın analitik analizi
                      </ListItem>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="z-50 left-64 top-0">
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                        <li>
                          <ListItem
                            href="/services/analysis/thematic"
                            title="Tematik təhlil"
                          ></ListItem>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuSub>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/internationalization"
            legacyBehavior
            passHref
            className="font-helvetica text-base"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-helvetica text-base"
              )}
            >
              Beynəlmiləlləşmə
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/announcements">Elanlar</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
              <li>
                <ListItem href="/announcements/vacancies" title="Vakansiyalar">
                  Agentlikdə mövcud vakansiyalar
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/announcements/qualification-recognition"
                  title="Peşə ixtisasının tanınması üzrə sənəd qəbulu"
                >
                  İxtisas uyğunluğunun təsdiqi üçün sənədlərin qəbulu
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/announcements/cooperation"
                  title="Əməkdaşlıq imkanları"
                >
                  Birgə fəaliyyət perspektivləri
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/reports">Hesabatlar</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[200px] gap-3 p-4 md:w-[150px] md:grid-cols-1 lg:w-[300px]">
              <li>
                <ListItem href="/reports/annual" title="İllik hesabatlar">
                  İllər üzrə hesabatlar
                </ListItem>
              </li>

              <li>
                <ListItem href="/reports/financial" title="Maliyə hesabatları">
                  Rəsmi maliyyə məlumatları
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/reports/monitoring"
                  title="Monitorinq hesabatları"
                >
                  İllik nəzarət hesabatları
                </ListItem>
              </li>

              <NavigationMenuSub defaultValue="sub1" className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="h-fit font-helvetica w-full flex flex-row justify-left p-0 text-left">
                      <ListItem
                        href="/reports/accreditation"
                        title="Akkreditasiya hesabatları"
                        className="hover:bg-transparent"
                      >
                        Rəsmi akkreditasiya sənədləri
                      </ListItem>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="left-0 top-14">
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                        <li>
                          <ListItem
                            href="/reports/accreditation/institutional"
                            title="ATMlərin İnstitusional akkreditasiya hesabatları"
                          ></ListItem>
                        </li>

                        <li>
                          <ListItem
                            href="/reports/accreditation/program"
                            title="ATMlərin Proqram akkreditasiya hesabatları"
                          ></ListItem>
                        </li>

                        <li>
                          <ListItem
                            href="/reports/accreditation/vocational"
                            title="Peşə Təhsili üzrə hesabatlar"
                          ></ListItem>
                        </li>

                        <li>
                          <ListItem
                            href="/reports/accreditation/international"
                            title="Beynəlxalq akkreditasiya hesabatları"
                          ></ListItem>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuSub>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/legislation">Qanunvericilik</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <ListItem
                  href="/legislation/accreditation"
                  title="Qanunlar"
                >
                  Rəsmi təsdiq və qiymətləndirmə
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/legislation/qualifications-recognition"
                  title="AR Prezidentinin fərmanaları"
                >
                  Diplom və sənəd tanınması
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/legislation/unrecognized-universities"
                  title="AR Nazirlər Kabinetinin qərarları"
                >
                  Diplomları tanınmayan universitetlərin siyahısı
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/legislation/rejected-universities"
                  title="Elm və Təhsil Nazirliyinin qərarları"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/legislation/rejected-universities"
                  title="Digər qanun qüvvəli aktlar"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/legislation/rejected-universities"
                  title="Akkreditasiya Məyarları"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/legislation/rejected-universities"
                  title="Akkreditasiya Qaydaları"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/media">Media</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
              <li>
                <ListItem href="/media/news" title="Xəbərlər">
                  Ən son yeniliklər
                </ListItem>
              </li>

              <li>
                <ListItem href="/media/interviews" title="Müsahibələr">
                  Tanınmış şəxslərlə söhbətlər
                </ListItem>
              </li>

              <li>
                <ListItem href="/media/disclosures" title="Açıqlamalar">
                  Rəsmi məlumat və izahlar
                </ListItem>
              </li>

              <li>
                <ListItem href="/media/faq" title="FAQ">
                  Müntəzəm verilən suallar
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-helvetica text-base">
            <Link href="/diploma-recognition">Diplom təsdiqi</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0">
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
              <li>
                <ListItem
                  href="/diploma-recognition/video-instructions"
                  title="Təlimat"
                >
                  Tanıma prosesi ilə bağlı izah
                </ListItem>
              </li>

              <li>
                <ListItem href="/diploma-recognition/apply" title="Müraciət et">
                  Tanıma üçün ərizə göndərilməsi
                </ListItem>
              </li>

              <li>
                <ListItem
                  href="/diploma-recognition/check"
                  title="Dipomunu yoxla"
                >
                  Diplomun tanınma vəziyyətinin araşdırılması
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/contact"
            legacyBehavior
            passHref
            className="font-helvetica text-base"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-helvetica text-base"
              )}
            >
              Əlaqə
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
