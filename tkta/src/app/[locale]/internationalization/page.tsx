"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EditIcon, Trash2Icon } from "lucide-react";
import { getTranslation } from "@/lib/i18n";
import { Card } from "@/components/ui/card";
import NewsSkeleton from "@/components/news/skeleton";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

type GalleryItem = {
  id: number;
  title: string;
  titleenglish: string;
  headerphotourl: string;
  date: string;
  type: string;
};

const ITEMS_PER_PAGE = 9;

export default function Iternationalization({ params }: Props) {
  const { locale } = use(params);

  const { data: session } = useSession();

  const isAdmin = session?.user?.role === "admin" || session?.user?.role === "superadmin";

  const t = getTranslation(locale);

  const [search] = useState("");

  const [from] = useState<Date | undefined>();

  const [to] = useState<Date | undefined>();

  const [sort] = useState<"new" | "old">("new");

  const [page, setPage] = useState(1);
  const [page1, setPage1] = useState(1);

  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const [gallery1, setGallery1] = useState<GalleryItem[]>([]);

  const [total, setTotal] = useState(0);

  const [total1, setTotal1] = useState(0);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [alertOpen, setAlertOpen] = useState(false);

  async function fetchGallery() {
    const params = new URLSearchParams();

    if (search) params.append("search", search);

    if (from) params.append("from", from.toISOString().split("T")[0]);

    if (to) params.append("to", to.toISOString().split("T")[0]);

    if (sort) params.append("sort", sort);

    params.append("page", page.toString());

    try {
      const res = await fetch(
        `/api/media/multimedia/photo-gallery?${params.toString()}&type=2`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();

      setGallery(data.gallery);

      setTotal(data.total);

      const res1 = await fetch(
        `/api/media/multimedia/photo-gallery?${params.toString()}&type=1`
      );

      if (!res1.ok) throw new Error("Failed to fetch");

      const data1 = await res1.json();

      setGallery1(data1.gallery);

      setTotal1(data1.total);
    } catch {
      toast.error(t.media.multimedia.error.loading);
    }
  }

  useEffect(() => {
    fetchGallery();
  }, [search, from, to, sort, page]);

  async function handleDelete() {
    if (!deleteId) return;

    try {
      const res = await fetch(
        `/api/media/multimedia/photo-gallery/${deleteId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      toast.success(t.media.multimedia.success.delete);

      setAlertOpen(false);

      setDeleteId(null);

      fetchGallery();
    } catch {
      toast.error(t.media.multimedia.error.delete);
    }
  }

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const totalPages1 = Math.ceil(total1 / ITEMS_PER_PAGE);

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-4xl text-center w-full px-4 md:px-16 pt-16">
        Beynəlmİləlləşmə
      </h1>

      <Tabs
        defaultValue="general-info"
        className="w-full px-4 md:px-16 flex flex-col"
      >
        <TabsList className="flex flex-col md:flex-row justify-evenly relative">
          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="general-info"
          >
            Ümumi məlumat
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="international-events"
          >
            Xarici tədbirlər
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
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
          {gallery.length === 0 ? (
            <NewsSkeleton />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {gallery.map((item) => {
                return (
                  <li key={item.id} className="relative">
                    <Card className="w-full h-full flex flex-col bg-transparent">
                      <Link
                        href={`/${locale}/media/multimedia/photo-gallery/${item.id}`}
                      >
                        <div className="h-3/5 w-full h-32 sm:h-40 md:h-48 lg:h-[16rem] flex justify-center items-center bg-gray-100 rounded-t-xl overflow-hidden">
                          <Image
                            src={item.headerphotourl}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                            width={900}
                            height={900}
                          />
                        </div>

                        <div className="p-4 flex flex-col gap-3">
                          <h3
                            className="font-bold text-base line-clamp-2"
                            title={item.title}
                          >
                            {locale === "az" ? item.title : item.titleenglish}
                          </h3>

                          <p className="text-right text-xs text-textSecondary w-full">
                            {format(new Date(item.date), "dd.MM.yyyy")}
                          </p>
                        </div>
                      </Link>
                    </Card>

                    {isAdmin && (
                      <div className="absolute top-4 right-4 flex items-center justify-center gap-4">
                        <AlertDialog
                          open={alertOpen && deleteId === item.id}
                          onOpenChange={setAlertOpen}
                        >
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              onClick={() => {
                                setDeleteId(item.id);
                                setAlertOpen(true);
                              }}
                            >
                              <span>{t.media.multimedia.delete}</span>
                              <Trash2Icon className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                {t.media.multimedia.removeDialogTitle}
                              </AlertDialogTitle>

                              <AlertDialogDescription>
                                {t.media.multimedia.removeDialogContent}
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel>
                                {t.media.multimedia.removeDialogCancel}
                              </AlertDialogCancel>

                              <Button
                                variant="destructive"
                                onClick={handleDelete}
                              >
                                {t.media.multimedia.removeDialogConfirm}
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <Link
                          href={`/${locale}/media/multimedia/photo-gallery/${item.id}/edit`}
                          className="flex items-center justify-center gap-2 px-2 py-2 bg-blue-600 text-white rounded-md"
                        >
                          <span className="text-sm">
                            {t.media.multimedia.edit}
                          </span>
                          <EditIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {totalPages > 1 && (
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                {t.previous}
              </Button>

              <span className="self-center">
                {t.page} {page} of {totalPages}
              </span>

              <Button
                variant="outline"
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                {t.next}
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent
          value="international-events"
          className="flex flex-col gap-20"
        >
          {gallery.length === 0 ? (
            <NewsSkeleton />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {gallery1.map((item) => {
                return (
                  <li key={item.id} className="relative">
                    <Card className="w-full h-full flex flex-col bg-transparent">
                      <Link
                        href={`/${locale}/media/multimedia/photo-gallery/${item.id}`}
                      >
                        <div className="h-3/5 w-full h-32 sm:h-40 md:h-48 lg:h-[16rem] flex justify-center items-center bg-gray-100 rounded-t-xl overflow-hidden">
                          <Image
                            src={item.headerphotourl}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                            width={900}
                            height={900}
                          />
                        </div>

                        <div className="p-4 flex flex-col gap-3">
                          <h3
                            className="font-bold text-base line-clamp-2"
                            title={item.title}
                          >
                            {locale === "az" ? item.title : item.titleenglish}
                          </h3>
                          <p className="text-right text-xs text-textSecondary w-full">
                            {format(new Date(item.date), "dd.MM.yyyy")}
                          </p>
                        </div>
                      </Link>
                    </Card>

                    {isAdmin && (
                      <div className="absolute top-4 right-4 flex items-center justify-center gap-4">
                        <AlertDialog
                          open={alertOpen && deleteId === item.id}
                          onOpenChange={setAlertOpen}
                        >
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              onClick={() => {
                                setDeleteId(item.id);
                                setAlertOpen(true);
                              }}
                            >
                              <span>{t.media.multimedia.delete}</span>

                              <Trash2Icon className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                {t.media.multimedia.removeDialogTitle}
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                {t.media.multimedia.removeDialogContent}
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>
                                {t.media.multimedia.removeDialogCancel}
                              </AlertDialogCancel>
                              <Button
                                variant="destructive"
                                onClick={handleDelete}
                              >
                                {t.media.multimedia.removeDialogConfirm}
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <Link
                          href={`/${locale}/media/multimedia/photo-gallery/${item.id}/edit`}
                          className="flex items-center justify-center gap-2 px-2 py-2 bg-blue-600 text-white rounded-md"
                        >
                          <span className="text-sm">
                            {t.media.multimedia.edit}
                          </span>
                          <EditIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {totalPages1 > 1 && (
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                disabled={page1 === 1}
                onClick={() => setPage1((p) => p - 1)}
              >
                {t.previous}
              </Button>
              <span className="self-center">
                {t.page} {page1} of {totalPages1}
              </span>
              <Button
                variant="outline"
                disabled={page1 === totalPages1}
                onClick={() => setPage1((p) => p + 1)}
              >
                {t.next}
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
