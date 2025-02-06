"use client";

import Image from "next/image";
import HeaderImage from "@/assets/images/qualifications-recognition/header-image.png";
import * as React from "react";
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
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface University {
  id: number;
  country: string;
  name: string;
  rejectionPercentage: number;
}

const data: University[] = [
  {
    id: 1,
    country: "Gürcüstan",
    name: "Avropa Tədris Universiteti",
    rejectionPercentage: 100,
  },
  {
    id: 2,
    country: "Ukrayna",
    name: "Şərqi Avropa İqtisadiyyat və İdarəetmə Universiteti",
    rejectionPercentage: 99,
  },
  {
    id: 3,
    country: "Gürcüstan",
    name: "Gürcüstan Yeni Universiteti",
    rejectionPercentage: 98,
  },
  {
    id: 4,
    country: "Ukrayna",
    name: "Avqustin Voloşin adına Karpat Universiteti",
    rejectionPercentage: 93,
  },
  {
    id: 5,
    country: "Rusiya Federasiyası",
    name: "Sankt-Peterburq Xarici İqtisadi Əlaqələr, İqtisadiyyat və Hüquq İnstitutu",
    rejectionPercentage: 92,
  },
  {
    id: 6,
    country: "Rusiya Federasiyası",
    name: "Cənubi Rusiya Humanitar İnstitutu",
    rejectionPercentage: 86,
  },
  {
    id: 7,
    country: "Rusiya Federasiyası",
    name: "Dərbənd Humanitar İnstitutu",
    rejectionPercentage: 85,
  },
  {
    id: 8,
    country: "Rusiya Federasiyası",
    name: "Müasir Humanitar Akademiya",
    rejectionPercentage: 83,
  },
  {
    id: 9,
    country: "Rusiya Federasiyası",
    name: "Sankt-Peterburq Dövlət Mülki Aviasiya Universiteti",
    rejectionPercentage: 81,
  },
  {
    id: 10,
    country: "Rusiya Federasiyası",
    name: "Dünya İqtisadiyyatı İnstitutu",
    rejectionPercentage: 79,
  },
  {
    id: 11,
    country: "Rusiya Federasiyası",
    name: "Dağıstan Təhsil və Mədəniyyət Akademiyası",
    rejectionPercentage: 78,
  },
  {
    id: 12,
    country: "Rusiya Federasiyası",
    name: "İvanovo Dövlət Universiteti",
    rejectionPercentage: 76,
  },
  {
    id: 13,
    country: "Gürcüstan",
    name: "Avropa Universiteti",
    rejectionPercentage: 76,
  },
  {
    id: 14,
    country: "Gürcüstan",
    name: "Millenium Tədris Universiteti",
    rejectionPercentage: 73,
  },
  {
    id: 15,
    country: "Gürcüstan",
    name: "Gürcüstan Beynəlxalq Tədris Universiteti",
    rejectionPercentage: 72,
  },
  {
    id: 16,
    country: "Ukrayna",
    name: "Avropa Universiteti",
    rejectionPercentage: 71,
  },
  {
    id: 17,
    country: "Gürcüstan",
    name: "Tbilisi Açıq Tədris Universiteti",
    rejectionPercentage: 66,
  },
  {
    id: 18,
    country: "Rusiya Federasiyası",
    name: "Moskva Sahibkarlıq və Hüquq İnstitutu",
    rejectionPercentage: 66,
  },
  {
    id: 19,
    country: "Rusiya Federasiyası",
    name: "Rusiya Dövlət Turizm və Xidmət Universiteti",
    rejectionPercentage: 60,
  },
  {
    id: 20,
    country: "Rusiya Federasiyası",
    name: "Cənub Federal Universiteti",
    rejectionPercentage: 60,
  },
  {
    id: 21,
    country: "Ukrayna",
    name: "T.Şevçenko adına Luqansk Milli Universiteti",
    rejectionPercentage: 58,
  },
  {
    id: 22,
    country: "Rusiya Federasiyası",
    name: "Sankt Peterburq Dövlət Mülki Aviasiya Universiteti",
    rejectionPercentage: 58,
  },
  {
    id: 23,
    country: "Rusiya Federasiyası",
    name: "Maliyyə və Hüquq İnstitutu",
    rejectionPercentage: 55,
  },
  {
    id: 24,
    country: "Ukrayna",
    name: "Milli Aerokosmik Universiteti 'Xarkov Aviasiya İnstitutu'",
    rejectionPercentage: 55,
  },
  {
    id: 25,
    country: "Rusiya Federasiyası",
    name: "Dərbənd İncəsənət və Mədəniyyət İnstitutu",
    rejectionPercentage: 55,
  },
  {
    id: 26,
    country: "Ukrayna",
    name: "Poltava İqtisadiyyat və Ticarət Universiteti",
    rejectionPercentage: 53,
  },
  {
    id: 27,
    country: "Gürcüstan",
    name: "Gürcüstan Kənd Təsərrüfatı Universiteti",
    rejectionPercentage: 52,
  },
  {
    id: 28,
    country: "Rusiya Federasiyası",
    name: "'Sinergiya' Moskva Maliyyə-Sənaye Universiteti",
    rejectionPercentage: 52,
  },
  {
    id: 29,
    country: "Gürcüstan",
    name: "Tbilisi Humanitar Tədris Universiteti",
    rejectionPercentage: 51,
  },
  {
    id: 30,
    country: "Rusiya Federasiyası",
    name: "Moskva Politexnik Universiteti",
    rejectionPercentage: 51,
  },
  {
    id: 31,
    country: "Ukrayna",
    name: "Regionlararası Heyətin İdarəolunması Akademiyası",
    rejectionPercentage: 50,
  },
  {
    id: 32,
    country: "Ukrayna",
    name: "Xarkov Dövlət Qida Texnologiyası və Ticarət Universiteti",
    rejectionPercentage: 50,
  },
  {
    id: 33,
    country: "Gürcüstan",
    name: "Suxişvili Tədris Universiteti",
    rejectionPercentage: 50,
  },
  {
    id: 34,
    country: "Rusiya Federasiyası",
    name: "Rusiya Dövlət Sosial Universiteti",
    rejectionPercentage: 49,
  },
  {
    id: 35,
    country: "Ukrayna",
    name: "Milli Aviasiya Universitetinin Uçuş Akademiyası",
    rejectionPercentage: 48,
  },
  {
    id: 36,
    country: "Rusiya Federasiyası",
    name: "Dağıstan Dövlət Universiteti",
    rejectionPercentage: 47,
  },
  {
    id: 37,
    country: "Ukrayna",
    name: "'KROK' İqtisadiyyat və Hüquq Universiteti",
    rejectionPercentage: 46,
  },
  {
    id: 38,
    country: "Rusiya Federasiyası",
    name: "Rostov Dövlət İqtisad Universiteti",
    rejectionPercentage: 46,
  },
  {
    id: 39,
    country: "Rusiya Federasiyası",
    name: "Rusiya Təhsil Akademiyasının Smolnı İnstitutu",
    rejectionPercentage: 45,
  },
  {
    id: 40,
    country: "Ukrayna",
    name: "Xarkov Milli Avtomobil - Yol Universiteti",
    rejectionPercentage: 42,
  },
  {
    id: 41,
    country: "Rusiya Federasiyası",
    name: "Moskva Dövlət Avtomobil - Yol Texniki Universiteti",
    rejectionPercentage: 42,
  },
  {
    id: 42,
    country: "Rusiya Federasiyası",
    name: "M.M.Cambulatov adına Dağıstan Dövlət Aqrar Universiteti",
    rejectionPercentage: 41,
  },
  {
    id: 43,
    country: "Ukrayna",
    name: "Sumı Dövlət Universiteti",
    rejectionPercentage: 41,
  },
  {
    id: 44,
    country: "Rusiya Federasiyası",
    name: "Moskva Dövlət Maşınqayırma Universiteti",
    rejectionPercentage: 41,
  },
  {
    id: 45,
    country: "Gürcüstan",
    name: "Qafqaz Beynəlxalq Universiteti",
    rejectionPercentage: 41,
  },
  {
    id: 46,
    country: "Rusiya Federasiyası",
    name: "Dağıstan Dövlət Pedaqoji Universiteti",
    rejectionPercentage: 40,
  },
  {
    id: 47,
    country: "Rusiya Federasiyası",
    name: "Rusiya Dövlət Humanitar Universiteti",
    rejectionPercentage: 36,
  },
  {
    id: 48,
    country: "Rusiya Federasiyası",
    name: "Moskva Humanitar-İqtisad İnstitutu",
    rejectionPercentage: 35,
  },
  {
    id: 49,
    country: "Ukrayna",
    name: "Mariupol Dövlət Universiteti",
    rejectionPercentage: 32,
  },
  {
    id: 50,
    country: "Ukrayna",
    name: "Kiyev Milli Texnologiyalar və Dizayn Universiteti",
    rejectionPercentage: 31,
  },
  {
    id: 51,
    country: "Rusiya Federasiyası",
    name: "Cəzaların İcrası Federal Xidmətinin Hüquq və İdarəetmə Akademiyası",
    rejectionPercentage: 31,
  },
  {
    id: 52,
    country: "Ukrayna",
    name: "O.M.Beketov adına Xarkov Milli Şəhər İqtisadiyyatı Universiteti",
    rejectionPercentage: 31,
  },
  {
    id: 53,
    country: "Ukrayna",
    name: "O.Qonçar adına Dnepropetrovsk Milli Universiteti",
    rejectionPercentage: 30,
  },
  {
    id: 54,
    country: "Rusiya Federasiyası",
    name: "Don Dövlət Texniki Universiteti",
    rejectionPercentage: 30,
  },
];

const columns: ColumnDef<University>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "№",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "country",
    header: "Ölkə",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("country")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ali təhsil müəssisəsi
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "rejectionPercentage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          İmtina
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">
        {row.getValue("rejectionPercentage")}%
      </div>
    ),
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
    },
  });

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        İmtİna alan unİversİtetlər
      </h1>

      <h2 className="text-base text-center px-16">
        <div>
          Təhsildə Keyfiyyət Təminatı Agentliyinə (TKTA) edilən müraciətlərin
          təhlili nəticəsində Qaydaların 4-cü maddəsində qeyd olunan tanınma
          üzrə ümumi tələblərə cavab vermədiyi üçün ali təhsil sənədlərinə ən
          çox imtina verilmiş universitetlərin siyahısı
        </div>

        <div>Müvafiqdir: 21.05.2024**</div>
      </h2>

      <div className="w-full px-16">
        <div className="flex items-center py-4">
          <Input
            placeholder="Ada görə..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Sütunlar <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
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
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Əvvəlki
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Növbəti
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full px-16 text-center">
        * Siyahı, ali təhsil müəssisəsi üzrə minimum 30 müraciət nəzərə
        alınaraq, edilən müraciətlərdən 30% və ondan artıq imtinaları əhatə
        etməkdədir.
        <div>** Siyahı mütəmadi olaraq yenilənəcəkdir.</div>
      </div>
    </section>
  );
}
