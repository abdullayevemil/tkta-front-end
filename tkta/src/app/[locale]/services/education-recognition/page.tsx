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
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175480/1._20A_C5_9Fpaz_b0pv0b.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=YAMajgA33HjN",
  },
  {
    title: "Avtomobil mühərriklərinin yığıcısı",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175497/2._20Avtomobil_20m_C3_BCh_C9_99rrikl_C9_99rinin_20y_C4_B1_C4_9F_C4_B1c_C4_B1s_C4_B1_m8gcei.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=GJUreE89WZZh",
  },
  {
    title: "Avtomobillərin təmiri çilingəri",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175514/3._20Avtomobill_C9_99rin_20t_C9_99miri_20_C3_A7iling_C9_99ri_si3ba3.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=6cE47JPgHgJS",
  },
  {
    title: "Bağban dekorator",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175530/4._20Ba_C4_9Fban_20dekorator_axbvos.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=2WWYzWKRLyt6",
  },
  {
    title: "Baytar texniki",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175549/5._20Baytar_20texniki_hcvhth.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=6v6g483xn3g9",
  },
  {
    title: "Bərbər manikürçü-vizajist",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175568/6._20B_C9_99rb_C9_99r_20manik_C3_BCr_C3_A7_C3_BC-vizajist_g7irzo.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=AVhuc77CZLBk",
  },
  {
    title: "Bərbər",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175583/7._20B_C9_99rb_C9_99r_n8rbxh.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions:
      "https://qfitt.testportal.net/exam/start.html?t=hZdUg34huj9Z&testIndex=true",
  },
  {
    title: "Bitkiçilik mütəxəssisi",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175599/8._20Bitki_C3_A7ilik_20m_C3_BCt_C9_99x_C9_99ssisi_xxa2vk.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=jn8jzPfNPq2s",
  },
  {
    title: "Dayə",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175616/9._20Day_C9_99_tlnlqj.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=5PYip6D2EgS8",
  },
  {
    title: "Dərzi",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175634/10._20D_C9_99rzi_p1tnsf.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=EU29NTM7pqZS",
  },
  {
    title: "Elektrik qaz qaynaqçısı",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175647/11._20Elektrik_20qaz_20qaynaq%C3%A7%C4%B1s%C4%B1_e7beum.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=EedfVYMhuqeA",
  },
  {
    title: "Əməliyyatçı mühasib",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175662/12._20%C6%8Fm_C9_99liyyat%C3%A7%C4%B1_20m%C3%BChasib_pojn34.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=AQGA4hxYDKWc",
  },
  {
    title: "Ərzaq və qeyri-ərzaq malları satıcısı, nəzarətçi xəzinadar",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175686/13._20%C6%8Frzaq_20v_C9_99_20qeyri-_C9_99rzaq_zshewa.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=cx7AD52ydutk",
  },
  {
    title: "Heyvandarlıq mütəxəssisi",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175702/14._20Heyvandarl%C4%B1q_20m%C3%BCt_C9_99x_C9_99ssisi_z40n3w.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=iemqVK3eVDsi",
  },
  {
    title: "İnşaat ustası",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175720/15._20%C4%B0n%C5%9Faat_20ustas%C4%B1_xzliif.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "ttps://qfitt.testportal.net/test.html?t=XQYd8aWu37y2",
  },
  {
    title: "Kargüzar",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175956/16._20Karg%C3%BCzar_cr664i.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=ygqTJ3WmmG2A",
  },
  {
    title: "Komputer operatoru",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175972/17._20komputer_20operatoru_g5dvqv.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=gkbmAEFmqFcE",
  },
  {
    title: "Mənzil təsərrüfat xidməti",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765175989/18._20M_C9_99nzil_20t_C9_99s_C9_99rr%C3%BCfat_20xidm_C9_99ti_mb6irr.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=ZmVQdG9Ja2Nh",
  },
  {
    title: "Mobil telefonların təmiri ustası",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176004/19._20Mobil_20telefonlar%C4%B1n_20t_C9_99miri_20ustas%C4%B1_jbq8zb.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=CBtwM6dX7VMF",
  },
  {
    title: "Mühafizəçi",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176023/20._20M%C3%BChafiz_C9_99%C3%A7i_esffmv.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=5Xt9NDaR5G9X",
  },
  {
    title: "Plastik boru qaynaqçısı",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176048/21._20Plastik_20boru_20qaynaq%C3%A7%C4%B1s%C4%B1_a3q9am.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=Ruc8kw8YqZ7A",
  },
  {
    title: "Poliqrafiya üzrə dizayner",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176064/22._20Poliqrafiya_20%C3%BCzr_C9_99_20dizayner_r7b80d.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=hYatS7TeaaJ7",
  },
  {
    title: "Qənnadçı, şirniyyatçı",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176078/23._20Q_C9_99nnad%C3%A7%C4%B1_2C_20%C5%9Firniyyat%C3%A7%C4%B1_dry4av.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=tLeL66yd88Xg",
  },
  {
    title: "Tikiş avadanlıqlarının operatoru, tikişçi",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176105/24._20Tiki%C5%9F_20avadanl%C4%B1qlar%C4%B1n%C4%B1n_20operatoru_2Ctiki%C5%9F%C3%A7i_pqg5wv.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=q4Q5X4UFUK2e",
  },
  {
    title: "Turizm sahəsində iaşə mütəxəssisi",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176122/25._20Turizm_20sah_C9_99sind_C9_99_20ia%C5%9F_C9_99_20m%C3%BCt_C9_99x_C9_99ssisi_lvumcr.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=vJSWJdidvfrW",
  },
  {
    title: "Zərgər",
    methodicalMaterial:
      "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765176140/26._20Z_C9_99rg_C9_99r_20son_swf5zc.pdf",
    registration:
      "https://docs.google.com/forms/d/1uTK38oUMXg218EraNbOagrmIaDqZ7AkL0kGggRWqpbo/edit",
    sampleQuestions: "https://qfitt.testportal.net/test.html?t=ybyKNxpM9Y6e",
  },
  {
    title: "Təmirçi-çilingər",
    methodicalMaterial: "",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSclfuaGFZErqohmUrLwpOPvmIOpUtqRhmFVDZQn5jduWg4VJQ/viewform?usp=dialog",
    sampleQuestions: "",
  },
  {
    title: "Qrafik dizayner",
    methodicalMaterial: "",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSclfuaGFZErqohmUrLwpOPvmIOpUtqRhmFVDZQn5jduWg4VJQ/viewform?usp=dialog",
    sampleQuestions: "",
  },
  {
    title: "Arıçı",
    methodicalMaterial: "",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSclfuaGFZErqohmUrLwpOPvmIOpUtqRhmFVDZQn5jduWg4VJQ/viewform?usp=dialog",
    sampleQuestions: "",
  },
  {
    title: "Kombi və kondisioner ustası",
    methodicalMaterial: "",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSclfuaGFZErqohmUrLwpOPvmIOpUtqRhmFVDZQn5jduWg4VJQ/viewform?usp=dialog",
    sampleQuestions: "",
  },
  {
    title: "Mebel ustası",
    methodicalMaterial: "",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSclfuaGFZErqohmUrLwpOPvmIOpUtqRhmFVDZQn5jduWg4VJQ/viewform?usp=dialog",
    sampleQuestions: "",
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
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "number",
    header: "№",
    cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
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
      <h1 className="uppercase text-4xl text-center w-full px-4 md:px16 pt-16">
        QEYRİ-FORMAL VƏ İNFORMAL TƏHSİLİN TANINMASI
      </h1>

      <Tabs
        defaultValue="general-information"
        className="w-full px-4 md:px16 flex flex-col gap-16"
      >
        <TabsList className="flex flex-col md:flex-row justify-evenly relative">
          <TabsTrigger
            className="w-full md:w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
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
            className="w-full md:w-1/3 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="partners"
          >
            Tərəfdaşlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general-information">
          <div className="flex flex-col gap-4 text-justify">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-bold text-textPrimary">
                  Qeyri-formal təhsil
                </h2>
                <p>
                  Formal təhsil mühitindən kənarda, müxtəlif kurslarda,
                  dərnəklərdə, təlimlərdə və ya iş mühitində əldə edilən bilik,
                  bacarıq və səriştələrin məcmusudur.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-textPrimary">İnformal təhsil</h2>
                <p>
                  Gündəlik həyatımızda özünütəhsil yolu ilə, maraq dairəmizə və
                  ehtiyaclarımıza uyğun əldə edilən bilik və bacarıqlardır. Bu,
                  əsasən təcrübəyə əsaslanan səriştələrdir.
                </p>
              </div>

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
                təsdiq edilmiş &quot;Peşə təhsili pilləsinin bi səviyyəsindən
                növbəti səviyyəsinə keçid Qaydası&quot;na uyğun olaraq peşə
                təhsili pilləsinin növbəti səviyyəsində təhsilini davam etdirmək
                hüququ verir.
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-textPrimary">
                  QFİTT-in fəaliyyəti ilə linkə keçid edərək tanış ola
                  bilərsiniz
                </h2>
                <Link
                  className="p-4 text-textPrimary border-2 font-semibold w-fit rounded-xl"
                  target="_blank"
                  href="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765375064/T%C9%99qdimat_2__compressed_iyqruy.pdf"
                >
                  Təqdimat
                </Link>
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
