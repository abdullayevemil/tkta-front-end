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
import { LanguageSelector } from "./language-selector";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="flex flex-row justify-between w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              Agentlik
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem href="/about" title="Haqqımızda">
                  Agentlik haqqında qısa məlumat
                </ListItem>

                <ListItem href="/principles" title="Rəhbərlik">
                  Komanda və idarəçilər
                </ListItem>

                <ListItem href="/structure" title="Struktur">
                  Agentliyin daxili quruluşu
                </ListItem>

                <ListItem href="/internationalization" title="Beynəlmiləlləşmə">
                  Qlobal əlaqə və əməkdaşlıq
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              Xidmətlər
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem href="/accreditation" title="Akkreditasiya">
                  Rəsmi təsdiq və qiymətləndirmə
                </ListItem>

                <ListItem
                  href="/qualifications-recognition"
                  title="Kvalifikasiyaların tanınması"
                >
                  Diplom və sənəd tanınması
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              Normativ hüquqi baza
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/accreditation" title="Qanunlar">
                  Rəsmi təsdiq və qiymətləndirmə
                </ListItem>

                <ListItem
                  href="/qualifications-recognition"
                  title="AR Prezidentinin fərmanaları"
                >
                  Diplom və sənəd tanınması
                </ListItem>

                <ListItem
                  href="/unrecognized-universities"
                  title="AR Nazirlər Kabinetinin qərarları"
                >
                  Diplomları tanınmayan universitetlərin siyahısı
                </ListItem>

                <ListItem
                  href="/rejected-universities"
                  title="Elm və Təhsil Nazirliyinin qərarları"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>

                <ListItem
                  href="/rejected-universities"
                  title="Digər qanun qüvvəli aktlar"
                >
                  Ən çox imtina alan universitetlərin siyahısı
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              Hesabatlar
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[150px] md:grid-cols-1 lg:w-[300px]">
                <ListItem
                  href="/accreditation"
                  title="İllik hesabatlar"
                ></ListItem>

                <ListItem
                  href="/qualifications-recognition"
                  title="Maliyə hesabatları"
                ></ListItem>

                <NavigationMenuSub defaultValue="sub1" className="w-full">
                  <NavigationMenuList className="w-full">
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuTrigger className="font-helvetica w-full flex flex-row justify-left">
                        Akkreditasiya hesabatları
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                          <ListItem
                            href="/about"
                            title="ATMlərin İnstitusional akkreditasiya hesabatları"
                          ></ListItem>

                          <ListItem
                            href="/principles"
                            title="ATMlərin Proqram akkreditasiya hesabatları"
                          ></ListItem>

                          <ListItem
                            href="/structure"
                            title="Peşə Təhsili üzrə hesabatlar"
                          ></ListItem>

                          <ListItem
                            href="/internationalization"
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
              Elanlar
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem href="/news" title="Vakansiyalar">
                  Agentlikdə mövcud vakansiyalar
                </ListItem>

                <ListItem
                  href="/Interviews"
                  title="Peşə ixtisasının tanınması üzrə sənəd qəbulu"
                >
                  İxtisas uyğunluğunun təsdiqi üçün sənədlərin qəbulu
                </ListItem>

                <ListItem href="/Interviews" title="Əməkdaşlıq imkanları">
                  Birgə fəaliyyət perspektivləri
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              Media
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem href="/news" title="Xəbərlər">
                  Ən son yeniliklər
                </ListItem>

                <ListItem href="/Interviews" title="Müsahibələr">
                  Tanınmış şəxslərlə söhbətlər
                </ListItem>

                <ListItem href="/disclosures" title="Açıqlamalar">
                  Rəsmi məlumat və izahlar
                </ListItem>

                <ListItem href="/faq" title="FAQ">
                  Müntəzəm verilən suallar
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/docs"
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

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-helvetica text-base">
              Diplom təsdiqi
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                <ListItem
                  href="/diploma-recognition/video-instructions"
                  title="Video təlimat"
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
        </NavigationMenuList>
      </NavigationMenu>
      <LanguageSelector />
    </nav>
  );
}
