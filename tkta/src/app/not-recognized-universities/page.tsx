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
import { TablePagination } from "@/components/table/pagination";
import ItemsPerPageSelector from "@/components/table/items-per-page";

interface University {
  id: number;
  name: string;
  country: string;
  status: string;
}

const data: University[] = [
  {
    id: 1,
    name: "Beynəlxalq Atlantik Universiteti",
    country: "Amerika Birləşmiş Ştatları",
    status: "Yoxdur",
  },
  {
    id: 2,
    name: "Beynəlxalq Xristian Universiteti",
    country: "Avstriya Respublikası",
    status: "Yoxdur (Hazırda fəaliyyət göstərmir)",
  },
  {
    id: 3,
    name: "Middlesex Universiteti",
    country: "Birləşmiş Ərəb Əmirlikləri",
    status: "Yoxdur",
  },
  {
    id: 4,
    name: "Beynəlxalq Praqa Universiteti",
    country: "Çex Respublikası",
    status: "Yoxdur",
  },
  {
    id: 5,
    name: "EICAR – Paris Beynəlxalq Film və Televiziya Məktəbi",
    country: "Fransa Respublikası",
    status: "Yoxdur",
  },
  {
    id: 6,
    name: "Vatel Otel və Turizm Biznes Məktəbi",
    country: "Fransa Respublikası",
    status: "Yoxdur",
  },
  {
    id: 7,
    name: "Şərqi Avropa İqtisadiyyat və İdarəetmə Universiteti",
    country: "Ukrayna",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 8,
    name: "Laqodexi Elm-Təhsil İnstitutu",
    country: "Ukrayna",
    status: "Yoxdur (Hazırda fəaliyyət göstərmir)",
  },
  {
    id: 9,
    name: "Beynəlxalq Ekologiya və Tibb Akademiyası",
    country: "Ukrayna",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 10,
    name: "Avqustin Voloşin adına Karpat Universiteti",
    country: "Ukrayna",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 11,
    name: "Avropa Universiteti",
    country: "Ukrayna",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 12,
    name: "KROK İqtisadiyyat və Hüquq Universiteti",
    country: "Ukrayna",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 13,
    name: "Regionlararası Heyətin İdarəolunması Akademiyası",
    country: "Ukrayna",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 14,
    name: "EADA Biznes Məktəbi",
    country: "İspaniya Krallığı",
    status: "Yoxdur",
  },
  {
    id: 15,
    name: "Barselona Qlobal Biznes Məktəbi",
    country: "İspaniya Krallığı",
    status: "Yoxdur",
  },
  {
    id: 16,
    name: "Avropa Universiteti Biznes Məktəbi",
    country: "İspaniya Krallığı",
    status: "Yoxdur",
  },
  {
    id: 17,
    name: "Marbella Beynəlxalq Universiteti",
    country: "İspaniya Krallığı",
    status: "Yoxdur",
  },
  {
    id: 18,
    name: "Harbour Space Universiteti",
    country: "İspaniya Krallığı",
    status: "Yoxdur",
  },
  {
    id: 19,
    name: "Roma Biznes Məktəbi",
    country: "İtaliya Respublikası",
    status: "Yoxdur",
  },
  {
    id: 20,
    name: "Maranqoni İnstitutu",
    country: "İtaliya Respublikası",
    status: "Yoxdur",
  },
  {
    id: 21,
    name: "Beynəlxalq Humanitar-Texniki Akademiya",
    country: "Rusiya Federasiyası",
    status: "26.04.2015-ci ilə qədər akkreditasiyası var",
  },
  {
    id: 22,
    name: "Nijeqorod Menecment və Biznes İnstitutu",
    country: "Rusiya Federasiyası",
    status: "26.04.2015-ci ilə qədər akkreditasiyası var",
  },
  {
    id: 23,
    name: "Şərqi Avropa Psixoanaliz İnstitutu",
    country: "Rusiya Federasiyası",
    status: "22.06.2017-ci ilə qədər akkreditasiyası var",
  },
  {
    id: 24,
    name: "Sosial-Humanitar Təhsil və Xidmət İnstitutu",
    country: "Rusiya Federasiyası",
    status:
      "Ali təhsil müəssisəsi 19.12.2017-ci il tarixində fəaliyyətini dayandırıb",
  },
  {
    id: 25,
    name: "Dünya İqtisadiyyatı İnstitutu",
    country: "Rusiya Federasiyası",
    status:
      "2014-cü ilə qədər olub və 2024-cü ildən təkrar akkreditasiyası var",
  },
  {
    id: 26,
    name: "Moskva Humanitar-İqtisad İnstitutu",
    country: "Rusiya Federasiyası",
    status: "Ukrayna filialının akkreditasiyası yoxdur",
  },
  {
    id: 27,
    name: "İsveçrədə Amerika Tətbiqi Elmlər İnstitutu",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 28,
    name: "İsveçrə Ali Təhsil Məktəbi",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 29,
    name: "Avropa Universiteti Biznes Məktəbi",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 30,
    name: "Cenevrə Biznes Məktəbi",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 31,
    name: "Cenevrə Beynəlxalq Universiteti",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 32,
    name: "Biznes və Hotel Menecmenti Məktəbi",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 33,
    name: "Cenevrə Diplomatiya və Beynəlxalq Münasibətlər Universiteti",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 34,
    name: "İsveçrə Montre Biznes Məktəbi",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 35,
    name: "Biznes və Beynəlxalq Münasibətlər Universiteti",
    country: "İsveçrə Konfederasiyası",
    status: "Yoxdur",
  },
  {
    id: 36,
    name: "Beynəlxalq Biznes İnstitutu",
    country: "Çex Respublikası",
    status: "Yoxdur",
  },
  {
    id: 37,
    name: "UniMan Beynəlxalq İdarəetmə və Performans Akademiyası",
    country: "Fransa Respublikası",
    status: "Yoxdur",
  },
  {
    id: 38,
    name: "Biznes, İnnovasiya və Davamlılıq Universiteti",
    country: "Amerika Birləşmiş Ştatları",
    status: "Yoxdur",
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
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
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
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Tanınmayan unİversİtetlər
      </h1>

      <h2 className="text-base text-center px-16">
        <div>
          Təhsildə Keyfiyyət Təminatı Agentliyinə (TKTA) edilən müraciətlərin
          təhlili nəticəsində yerli akkreditasiyası olmadığı üçün ali təhsil
          sənədlərinə imtina verilmiş universitetlərin siyahısı
        </div>

        <div>Müvafiqdir: 23.11.2024**</div>
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

      <div className="w-full px-16 text-center">
        * Siyahı, ali təhsil müəssisəsi üzrə minimum 30 müraciət nəzərə
        alınaraq, edilən müraciətlərdən 30% və ondan artıq imtinaları əhatə
        etməkdədir.
        <div>** Siyahı mütəmadi olaraq yenilənəcəkdir.</div>
      </div>
    </section>
  );
}
