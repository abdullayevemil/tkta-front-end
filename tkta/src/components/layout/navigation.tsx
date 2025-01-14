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
    <nav className="flex flex-row justify-between w-full gap-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              <Link href="/agency">Agentlik</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <NavigationMenuSub defaultValue="sub1" className="w-full">
                  <NavigationMenuList className="w-full">
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuTrigger className="font-helvetica w-full flex flex-row justify-left">
                        <Link href="/agency/about">Haqqımızda</Link>
                      </NavigationMenuTrigger>

                      <NavigationMenuContent className="left-64 top-0">
                        <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                          <ListItem
                            href="/agency/about/institutional"
                            title="Daxili keyfiyyət təminatı sistemi"
                          ></ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenuSub>

                <ListItem href="/agency/principles" title="Rəhbərlik">
                  Komanda və idarəçilər
                </ListItem>

                <ListItem href="/agency/structure" title="Struktur">
                  Agentliyin daxili quruluşu
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/agency/internationalization"
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
              <Link href="/services">Fəaliyyət Sahələrimiz</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem
                  href="/services/qualifications-recognition"
                  title="Xarici kvalifikasiyalarin tanınması"
                >
                  Diplom və sənəd tanınması
                </ListItem>

                <ListItem
                  href="/services/education-recognition"
                  title="Qeyri formal və informal təhsilin tanınması"
                >
                  Sertifikatsız təhsilin təsdiqi
                </ListItem>

                <ListItem
                  href="/services/accreditation"
                  title="Akkreditasiya və lisenziya"
                >
                  Rəsmi təsdiq və qiymətləndirmə
                </ListItem>

                <ListItem
                  href="/services/training-methodology"
                  title="Təlim və metodologiya"
                >
                  Öyrətmə üsul və yanaşmaları
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              <Link href="/announcements">Elanlar</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem href="/announcements/vacancies" title="Vakansiyalar">
                  Agentlikdə mövcud vakansiyalar
                </ListItem>

                <ListItem
                  href="/announcements/qualification-recognition"
                  title="Peşə ixtisasının tanınması üzrə sənəd qəbulu"
                >
                  İxtisas uyğunluğunun təsdiqi üçün sənədlərin qəbulu
                </ListItem>

                <ListItem
                  href="/announcements/cooperation"
                  title="Əməkdaşlıq imkanları"
                >
                  Birgə fəaliyyət perspektivləri
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              <Link href="/reports">Hesabatlar</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[200px] gap-3 p-4 md:w-[150px] md:grid-cols-1 lg:w-[300px]">
                <ListItem
                  href="/reports/annual"
                  title="İllik hesabatlar"
                ></ListItem>

                <ListItem
                  href="/reports/financial"
                  title="Maliyə hesabatları"
                ></ListItem>

                <NavigationMenuSub defaultValue="sub1" className="w-full">
                  <NavigationMenuList className="w-full">
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuTrigger className="font-helvetica w-full flex flex-row justify-left">
                        <Link href="/reports/accreditation">
                          Akkreditasiya hesabatları
                        </Link>
                      </NavigationMenuTrigger>

                      <NavigationMenuContent className="left-0">
                        <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                          <ListItem
                            href="/reports/accreditation/institutional"
                            title="ATMlərin İnstitusional akkreditasiya hesabatları"
                          ></ListItem>

                          <ListItem
                            href="/reports/accreditation/program"
                            title="ATMlərin Proqram akkreditasiya hesabatları"
                          ></ListItem>

                          <ListItem
                            href="/reports/accreditation/vocational"
                            title="Peşə Təhsili üzrə hesabatlar"
                          ></ListItem>

                          <ListItem
                            href="/reports/accreditation/international"
                            title="Beynəlxalq akkreditasiya hesabatları"
                          ></ListItem>
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
              <Link href="/normative-legal-framework">
                Normativ hüquqi baza
              </Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[600px]">
                <ListItem
                  href="/normative-legal-framework/accreditation"
                  title="Qanunlar"
                >
                  Rəsmi təsdiq və qiymətləndirmə
                </ListItem>

                <ListItem
                  href="/normative-legal-framework/qualifications-recognition"
                  title="AR Prezidentinin fərmanaları"
                >
                  Diplom və sənəd tanınması
                </ListItem>

                <ListItem
                  href="/normative-legal-framework/unrecognized-universities"
                  title="AR Nazirlər Kabinetinin qərarları"
                >
                  Diplomları tanınmayan universitetlərin siyahısı
                </ListItem>

                <ListItem
                  href="/normative-legal-framework/rejected-universities"
                  title="Elm və Təhsil Nazirliyinin qərarları"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>

                <ListItem
                  href="/normative-legal-framework/rejected-universities"
                  title="Digər qanun qüvvəli aktlar"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              <Link href="/media">Media</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem href="/media/news" title="Xəbərlər">
                  Ən son yeniliklər
                </ListItem>

                <ListItem href="/media/interviews" title="Müsahibələr">
                  Tanınmış şəxslərlə söhbətlər
                </ListItem>

                <ListItem href="/media/disclosures" title="Açıqlamalar">
                  Rəsmi məlumat və izahlar
                </ListItem>

                <ListItem href="/media/faq" title="FAQ">
                  Müntəzəm verilən suallar
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              <Link href="/diploma-recognition">Diplom təsdiqi</Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="left-0">
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem
                  href="/diploma-recognition/video-instructions"
                  title="Təlimat"
                >
                  Tanıma prosesi ilə bağlı izah
                </ListItem>

                <ListItem href="/diploma-recognition/apply" title="Müraciət et">
                  Tanıma üçün ərizə göndərilməsi
                </ListItem>

                <ListItem
                  href="/diploma-recognition/check"
                  title="Dipomunu yoxla"
                >
                  Diplomun tanınma vəziyyətinin araşdırılması
                </ListItem>
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
    </nav>
  );
}
