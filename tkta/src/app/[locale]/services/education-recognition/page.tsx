"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import ItemsPerPageSelector from "@/components/table/items-per-page";
import { TablePagination } from "@/components/table/pagination";

interface Major {
  title: string;
  methodicalMaterial: string;
  registration: string;
  sampleQuestions?: string;
}

const data = [
  {
    title: "Aşpaz",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/1.%20A%C5%9Fpaz.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Avtomobil mühərriklərinin yığıcısı",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/2.%20Avtomobil%20m%C3%BCh%C9%99rrikl%C9%99rinin%20y%C4%B1%C4%9F%C4%B1c%C4%B1s%C4%B1.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Avtomobillərin təmiri çilingəri",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/3.%20Avtomobill%C9%99rin%20t%C9%99miri%20%C3%A7iling%C9%99ri.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Bağban dekorator",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/4.%20Ba%C4%9Fban%20dekorator.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Baytar texniki",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/5.%20Baytar%20texniki.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Bərbər manikürçü-vizajist",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/6.%20B%C9%99rb%C9%99r%20manik%C3%BCr%C3%A7%C3%BC-vizajist.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Bərbər",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/7.%20B%C9%99rb%C9%99r.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Bitkiçilik mütəxəssisi",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/8.%20Bitki%C3%A7ilik%20m%C3%BCt%C9%99x%C9%99ssisi.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Dayə",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/9.%20Day%C9%99.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Dərzi",
    methodicalMaterial:
      "https://tkta.edu.az/files/METOD%C4%B0K%C4%B0%20V%C6%8FSA%C4%B0T/10.%20D%C9%99rzi.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Elektrik qaz qaynaqçısı",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/11.%20Elektrik%20qaz%20qaynaqçısı.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Əməliyyatçı mühasib",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/12.%20Əm%C9%99liyyatçı%20mühasib.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Ərzaq və qeyri-ərzaq malları satıcısı, nəzarətçi xəzinadar",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/13.%20Ərzaq%20v%C9%99%20qeyri-%C9%99rzaq.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Heyvandarlıq mütəxəssisi",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/14.%20Heyvandarlıq%20müt%C9%99x%C9%99ssisi.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "İnşaat ustası",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/15.%20İnşaat%20ustası.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Kargüzar",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/16.%20Kargüzar.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Komputer operatoru",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/17.%20komputer%20operatoru.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Mənzil təsərrüfat xidməti",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/18.%20M%C9%99nzil%20t%C9%99s%C9%99rrüfat%20xidm%C9%99ti.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Mobil telefonların təmiri ustası",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/19.%20Mobil%20telefonların%20t%C9%99miri%20ustası.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Mühafizəçi",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/20.%20Mühafiz%C9%99çi.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Plastik boru qaynaqçısı",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/21.%20Plastik%20boru%20qaynaqçısı.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Poliqrafiya üzrə dizayner",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/22.%20Poliqrafiya%20üzr%C9%99%20dizayner.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Qənnadçı, şirniyyatçı",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/23.%20Q%C9%99nnadçı%2C%20şirniyyatçı.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Tikiş avadanlıqlarının operatoru, tikişçi",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/24.%20Tikiş%20avadanlıqlarının%20operatoru%2Ctikişçi.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Turizm sahəsində iaşə mütəxəssisi",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/25.%20Turizm%20sah%C9%99sind%C9%99%20iaş%C9%99%20müt%C9%99x%C9%99ssisi.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
  {
    title: "Zərgər",
    methodicalMaterial:
      "https://tkta.edu.az/files/METODİKİ%20VƏSAİT/26.%20Z%C9%99rg%C9%99r%20son.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
  },
];

const partners = [
  {
    id: 1,
    url: "partners/mzkds8lwyi12jpg18udv",
  },
  {
    id: 2,
    url: "partners/tpywgiyzgx3ybi1qfq4s",
  },
  {
    id: 3,
    url: "partners/fixv4ggyt5nmm83mcgkl",
  },
  {
    id: 4,
    url: "partners/iqnl4mzcrubovbirnypx",
  },
  {
    id: 5,
    url: "partners/gaq5b15mykteiwawctun",
  },
  {
    id: 6,
    url: "partners/hcy8lt7xvzwr8x6z0idk",
  },
  {
    id: 7,
    url: "partners/kdhdovtf6mqydd85mlzy",
  },
  {
    id: 8,
    url: "partners/ffwrvvcyletlsvmzguz3",
  },
  {
    id: 9,
    url: "partners/rjsz0waxxpt3vck5ceh3",
  },
  {
    id: 10,
    url: "partners/pnr2rxayr3szfilwz7ob",
  },
  {
    id: 11,
    url: "partners/yjtcjprtgb7bfb8qvikc",
  },
  {
    id: 12,
    url: "partners/gdmlfuaa18qh7wlk663n",
  },
  {
    id: 13,
    url: "partners/bjt3mgr3pjjpzfddkuv5",
  },
  {
    id: 14,
    url: "partners/orokex9epxsu3osnl0eu",
  },
  {
    id: 15,
    url: "partners/d7evcczcjn4arot6xapa",
  },
  {
    id: 16,
    url: "partners/jirdfhgj6nlfpxztgovl",
  },
  {
    id: 17,
    url: "partners/xxy3mwzrh9d8sxg9ejpu",
  },
  {
    id: 81,
    url: "partners/ruqztpfmfpzem6tfqn0w",
  },
  {
    id: 19,
    url: "partners/wh2ef9lbu9z4lqpaj0z6",
  },
  {
    id: 20,
    url: "partners/t4brofllwxqj0fw1iupx",
  },
  {
    id: 21,
    url: "partners/fib6tajcem45vwwvwtdh",
  },
  {
    id: 22,
    url: "partners/f5hsq8ztnupn77og6nrl",
  },
  {
    id: 23,
    url: "partners/xya55wvfbvrldtv0goxb",
  },
  {
    id: 24,
    url: "partners/fqtkb2j98kbgaekv3onz",
  },
  {
    id: 25,
    url: "partners/boqjccfjw0tauysde9eu",
  },
  {
    id: 26,
    url: "partners/miaybbh34wkjlbxdxkxp",
  },
  {
    id: 27,
    url: "partners/imvvvpg87peniiyvxgex",
  },
];

const columns: ColumnDef<Major>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "İxtisas",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "methodicalMaterial",
    header: "Metodik Vəsait",
    cell: ({ row }) => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-textPrimary italic hover:underline"
        href={row.getValue("methodicalMaterial")}
      >
        Keçid
      </Link>
    ),
  },
  {
    accessorKey: "registration",
    header: "Qeydiyyat",
    cell: ({ row }) => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-textPrimary italic hover:underline"
        href={row.getValue("registration")}
      >
        Qeydiyyat
      </Link>
    ),
  },
  {
    accessorKey: "sampleQuestions",
    header: "Nümunə test sualları",
    cell: ({ row }) => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-textPrimary italic hover:underline"
        href={row.getValue("sampleQuestions") || "#"}
      >
        Nümunə test sualları
      </Link>
    ),
  },
];

export default function EducationRecognition() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    manualPagination: false,
    onPaginationChange: setPagination,
    pageCount: data.length / pagination.pageSize,
  });

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      

      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        QEYRİ-FORMAL VƏ İNFORMAL TƏHSİLİN TANINMASI
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="general-information"
          >
            Ümumi məlumat
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="registration"
          >
            Qeydiyyat
          </TabsTrigger>

          <TabsTrigger
            className="w-1/4 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="video-tutorial"
          >
            Video bələdçi
          </TabsTrigger>

          <TabsTrigger
            className="w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="partners"
          >
            Tərəfdaşlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general-information">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-textPrimary">
                  Qeyri-formal və İnformal Təhsilin Tanınması
                </h2>
                Qeyri-formal və informal təhsilin tanınması Azərbaycan
                Respublikası Nazirlər Kabinetinin 5 avqust 2020-ci il tarixli
                279 nömrəli qərarı ilə təsdiq edilmiş &quot;Qayda&quot; əsasında
                tənzimlənir. Azərbaycan Respublikası Nazirlər Kabinetinin 25
                dekabr 2020-ci il tarixili 508 nömrəli Qərarına əsasən müvafiq
                ixtisas üzrə biliklərin qiymətləndirilməsi üçün 100 AZN,
                bacarıq, səriştə və təcrübənin qiymətləndirilməsi üçün isə hər
                modul üzrə 80 AZN məbləğində ödəniş tələb olunur.
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-textPrimary">
                  Sertifikat və ya diplomun üstünlükləri?
                </h2>
                Əldə edilən peşə ixtisasını təsdiq edən sertifikat və ya diplom
                vətəndaşa əmək fəaliyyətinə başlamaq, eyni zamanda ərizəçiyə
                verilən diplom ilk peşə təhsili səviyyəsində təhsil haqqında
                sənədə bərabər tutulur və Azərbaycan Respiblikası Nazirlər
                Kabinetinin 2019-cu il 16 aprel tarixli 173 nömrəli Qərarı ilə
                təsdiq edilmiş &quot;Peşə təhsili pilləsinin bi səviyyəsindən növbəti
                səviyyəsinə keçid Qaydası&quot;na uyğun olaraq peşə təhsili
                pilləsinin növbəti səviyyəsində təhsilini davam etdirmək hüququ
                verir.
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-textPrimary">
                  Kimlər müraciət edə bilər?
                </h2>
                Ümumi orta təhsilini 4 il, tam orta təhsilini isə 2 ildən əvvəl
                bitirən və müvafiq ixtisas üzrə ən azı 2 il qeyri-formal və ya
                informal yolla təhsil əldə etmiş şəxslər.
              </div>
            </div>

            <h2 className="font-bold text-textPrimary">
              Qiymətləndirilmə və Tanınma Prosesinin Mərhələləri:
            </h2>

            <ol className="list-decimal pl-8 flex flex-col gap-3">
              <li>
                <div>Sənəd Qəbulu:</div>

                <div>
                  Müraciətçi qeydiyyat linki vasitəsilə tələb olunan sənədləri
                  təqdim qeydiyyatdan keçir
                </div>
              </li>

              <li>
                <div>Sənədlərə Baxış:</div>

                <div>
                  Təqdim olunan sənədlərin tələblərə uyğunluğu yoxlanılır.
                </div>
              </li>

              <li>
                <div>Biliyin Qiymətləndirilməsi:</div>

                <div>
                  Nəzəri biliklər test imtahanı vasitəsilə qiymətləndirilir.
                </div>
              </li>

              <li>
                <div>Bacarıq və Təcrübənin Qiymətləndirilməsi:</div>

                <div>
                  Praktiki tapşırıqlar vasitəsilə ərizəçinin bacarıq və
                  təcrübəsi qiymətləndirilir.
                </div>
              </li>

              <li>
                <div>Peşə İxtisasını Təsdiq Edən Sənədin Verilməsi:</div>

                <div>
                  Nəzəri və praktiki mərhələləri uğurla tamamlayan şəxslərə peşə
                  ixtisasını təsdiq edən sənəd (sertifikat və ya diplom)
                  verilir.
                </div>
              </li>
            </ol>

            <p>
              Daha ətraflı məlumat üçün qfitt@tkta.edu.az ünvanı ilə əlaqə
              saxlaya, eləcə də{" "}
              <Link
                className="text-textPrimary italic hover:underline"
                href="/services/education-recognition/detailed-information"
              >
                keçidlərdən
              </Link>{" "}
              tanış ola bilərsiniz.
            </p>

            {/* <div className="flex flex-col gap-1">
              <h4 className="font-bold">Tələb olunan sənədlər</h4>

              <p>
                İlkin baxışın aparılması üçün müvafiq ixtisas üzrə bilik,
                bacarıq, səriştə və təcrübəni özündə əks etdirən aşağıdakı
                sənədlərin və materialların təqdim olunması tələb edilir.
              </p>

              <ul className="list-disc pl-8 flex flex-col gap-2">
                <li>Şəxsiyyəti təsdiq edən sənədin surəti;</li>

                <li>
                  Təhsil haqqında dövlət sənədinin surəti (attestat və yaxud
                  diplom);
                </li>

                <li>
                  Bilik, bacarıq, səriştə və təcrübəni əks etdirən sənədlər
                  (fotoşəkillər);
                </li>

                <li>
                  Bilik, bacarıq, səriştə və təcrübənin ərizəçi tərəfindən
                  yazılı təsviri;
                </li>

                <li>Nümunələr (olduğu halda);</li>

                <li>Əmək kitabçası (olduğu halda);</li>

                <li>
                  İş təcrübəsi haqqında arayış və müvafiq sertifikatlar (olduğu
                  halda);
                </li>

                <li>
                  Məcburi dövlət sosial sığorta şəhadətnaməsi (olduğu halda).
                </li>
              </ul>

              <p className="italic">
                Qeyd: İlkin baxış mərhələsindən uğurla keçən ərizəçilərdən
                müvafiq ixtisas üzrə biliklərin qiymətləndirilməsi üçün 100 AZN
                , bacarıq, səristə və təcrübənin qiymətləndirilməsi üçün isə hər
                modul üçün 80 AZN məbləğində ödəniş qəbzi tələb olunur. Ödənişlə
                bağlı təlimatla{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textPrimary italic hover:underline"
                  href="https://tkta.edu.az/files/video/v%C9%99t%C9%99ndaşlar%20üçün%20öd%C9%99niş%20t%C9%99limat%20v%C9%99r%C9%99qi.pdf"
                >
                  buradan
                </Link>{" "}
                tanış ola bilərsiniz.
              </p>
            </div> */}
          </div>
        </TabsContent>

        <TabsContent value="registration">
          <div className="flex flex-col gap-2">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            <div className="flex items-center justify-end space-x-2 py-4">
              <ItemsPerPageSelector
                pageSize={pagination.pageSize}
                pageIndex={pagination.pageIndex}
                onChange={setPagination}
              />

              <TablePagination
                currentPage={pagination.pageIndex}
                setCurrentPage={setPagination}
                itemsPerPage={pagination.pageSize}
                pagesCount={Math.ceil(data.length / pagination.pageSize)}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="video-tuorial"></TabsContent>

        <TabsContent value="partners">
          <div className="flex flex-col gap-6">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {partners.map((partner) => (
                  <CarouselItem
                    key={partner.id}
                    className="basis-1/5 flex items-center justify-center"
                  >
                    <Link href="">
                      <CldImage
                        src={partner.url}
                        width="200"
                        alt="image"
                        height="200"
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="font-semibold text-base text-justify">
              Qeyri-formal və informal təhsilin tanınması prosesində
              göstərdiyiniz dəstəyə və səmərəli fəaliyyətinizə görə Sizə
              təşəkkür edir, əməkdaşlığımızdan məmnunluq duyduğumuzu bildiririk!
            </div>

            <Link
              className="text-textPrimary italic hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScqsn5AIQ8Vw05vr6O18rTDk3jm99gWmJozic-pEu73Zitxpg/viewform"
            >
              Agentliklə əməkdaşlıq üçün bu link vasitəsilə müraciət edə
              bilərsiniz.
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
