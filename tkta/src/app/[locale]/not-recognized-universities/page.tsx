"use client";

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
    country: "Amerika Birləşmiş Ştatları",
    name: "Beynəlxalq Atlantik Universiteti",
    status: "Yoxdur",
  },
  {
    id: 2,
    country: "Avstriya Respublikası",
    name: "Beynəlxalq Xristian Universiteti",
    status: "Yoxdur (Hazırda fəaliyyət göstərmir)",
  },
  {
    id: 3,
    country: "Birləşmiş Ərəb Əmirlikləri",
    name: "Middlesex Universiteti (Middlesex University Dubai)",
    status: "09.01.2025-ci il tarixindən etibarən akkreditasiyası var",
  },
  {
    id: 4,
    country: "Çex Respublikası",
    name: "Beynəlxalq Praqa Universiteti (International Prague University)",
    status: "Yoxdur",
  },
  {
    id: 5,
    country: "Fransa Respublikası",
    name: "EICAR – Paris Beynəlxalq Film və Televiziya Məktəbi (EICAR – The International Film & Television School Paris)",
    status: "Yoxdur",
  },
  {
    id: 6,
    country: "Fransa Respublikası",
    name: "Vatel Otel və Turizm Biznes Məktəbi (Vatel Hotel & Tourism Business School)",
    status: "Yoxdur",
  },
  {
    id: 7,
    country: "Ukrayna",
    name: "Şərqi Avropa İqtisadiyyat və İdarəetmə Universiteti (East European University of Economics and Management)",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 8,
    country: "Ukrayna",
    name: "Laqodexi Elm-Təhsil İnstitutu (Learning-Scientific Institute of Lagodekhi)",
    status: "Yoxdur (Hazırda fəaliyyət göstərmir)",
  },
  {
    id: 9,
    country: "Ukrayna",
    name: "Beynəlxalq Ekologiya və Tibb Akademiyası (The International Academy of Ecology and Medicine)",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 10,
    country: "Ukrayna",
    name: "Avqustin Voloşin adına Karpat Universiteti (Augustine Voloshyn Carpathian University)",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 11,
    country: "Ukrayna",
    name: "Avropa Universiteti (European University)",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 12,
    country: "Ukrayna",
    name: "“KROK” İqtisadiyyat və Hüquq Universiteti (KROK University of Economics and Law)",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 13,
    country: "Ukrayna",
    name: "Regionlararası Heyətin İdarəolunması Akademiyası (Interregional Academy of Personnel Management)",
    status: "Gürcüstan filialının akkreditasiyası yoxdur",
  },
  {
    id: 14,
    country: "İspaniya Krallığı",
    name: "EADA Biznes Məktəbi (EADA International Management Development Center)",
    status: "Yoxdur",
  },
  {
    id: 15,
    country: "İspaniya Krallığı",
    name: "Barselona Qlobal Biznes Məktəbi (Global Business School Barcelona)",
    status: "Yoxdur",
  },
  {
    id: 16,
    country: "İspaniya Krallığı",
    name: "Avropa Universiteti Biznes Məktəbi (EU Business School)",
    status: "Yoxdur",
  },
  {
    id: 17,
    country: "İspaniya Krallığı",
    name: "Marbella Beynəlxalq Universiteti (Marbella International University Centre)",
    status: "Yoxdur",
  },
  {
    id: 18,
    country: "İspaniya Krallığı",
    name: "Harbour Space Universiteti (Harbour Space University)",
    status: "Yoxdur",
  },
  {
    id: 19,
    country: "İtaliya Respublikası",
    name: "Roma Biznes Məktəbi (Rome Business School)",
    status: "Yoxdur",
  },
  {
    id: 20,
    country: "İtaliya Respublikası",
    name: "Maranqoni İnstitutu (Istituto Marangoni)",
    status: "Yoxdur",
  },
  {
    id: 21,
    country: "Rusiya Federasiyası",
    name: "Beynəlxalq Humanitar-Texniki Akademiya",
    status: "26.04.2015-ci ilə qədər akkreditasiyası var",
  },
  {
    id: 22,
    country: "Rusiya Federasiyası",
    name: "Nijeqorod Menecment və Biznes İnstitutu",
    status: "26.04.2015-ci ilə qədər akkreditasiyası var",
  },
  {
    id: 23,
    country: "Rusiya Federasiyası",
    name: "Şərqi Avropa Psixoanaliz İnstitutu",
    status: "22.06.2017-ci ilə qədər akkreditasiyası var",
  },
  {
    id: 24,
    country: "Rusiya Federasiyası",
    name: "Sosial-Humanitar Təhsil və Xidmət İnstitutu",
    status: "19.12.2017-ci il tarixində fəaliyyətini dayandırıb",
  },
  {
    id: 25,
    country: "Rusiya Federasiyası",
    name: "Dünya İqtisadiyyatı İnstitutu",
    status: "2014-cü ilə qədər olub, 2024-cü ildən təkrar akkreditasiyası var",
  },
  {
    id: 26,
    country: "Rusiya Federasiyası",
    name: "Moskva Humanitar-İqtisad İnstitutu",
    status: "Ukrayna filialının akkreditasiyası yoxdur",
  },
  {
    id: 27,
    country: "İsveçrə Konfederasiyası",
    name: "İsveçrədə Amerika Tətbiqi Elmlər İnstitutu (American University in Switzerland)",
    status: "Yoxdur",
  },
  {
    id: 28,
    country: "İsveçrə Konfederasiyası",
    name: "İsveçrə Ali Təhsil Məktəbi (Swiss School of Higher Education)",
    status: "Yoxdur",
  },
  {
    id: 29,
    country: "İsveçrə Konfederasiyası",
    name: "Avropa Universiteti Biznes Məktəbi (EU Business School - European University)",
    status: "Yoxdur",
  },
  {
    id: 30,
    country: "İsveçrə Konfederasiyası",
    name: "Cenevrə Biznes Məktəbi (Geneva Business School)",
    status: "Yoxdur",
  },
  {
    id: 31,
    country: "İsveçrə Konfederasiyası",
    name: "Cenevrə Beynəlxalq Universiteti (International University in Geneva)",
    status: "Yoxdur",
  },
  {
    id: 32,
    country: "İsveçrə Konfederasiyası",
    name: "Biznes və Hotel Menecmenti Məktəbi (Business & Hotel Management School)",
    status: "Yoxdur",
  },
  {
    id: 33,
    country: "İsveçrə Konfederasiyası",
    name: "Cenevrə Diplomatiya və Beynəlxalq Münasibətlər Universiteti (Geneva School of Diplomacy & International Relations)",
    status: "Yoxdur",
  },
  {
    id: 34,
    country: "İsveçrə Konfederasiyası",
    name: "İsveçrə Montre Biznes Məktəbi (Swiss Montreux Business School)",
    status: "Yoxdur",
  },
  {
    id: 35,
    country: "İsveçrə Konfederasiyası",
    name: "Biznes və Beynəlxalq Münasibətlər Universiteti (University of Business and International Studies)",
    status: "Yoxdur",
  },
  {
    id: 36,
    country: "İsveçrə Konfederasiyası",
    name: "Glion Ali Təhsil Universiteti (Glion Institute of Higher Education)",
    status: "Yoxdur",
  },
  {
    id: 37,
    country: "İsveçrə Konfederasiyası",
    name: "Vebster Universiteti (Webster University)",
    status: "Yoxdur",
  },
  {
    id: 38,
    country: "Çex Respublikası",
    name: "Beynəlxalq Biznes İnstitutu (International Business Institute)",
    status: "Yoxdur",
  },
  {
    id: 39,
    country: "Fransa Respublikası",
    name: "UniMan Beynəlxalq İdarəetmə və Performans Akademiyası",
    status: "Yoxdur",
  },
  {
    id: 40,
    country: "Amerika Birləşmiş Ştatları",
    name: "Biznes, İnnovasiya və Davamlılıq Universiteti (UBIS - University of Business Innovation and Sustainability)",
    status: "Yoxdur",
  },
  {
    id: 41,
    country: "İtaliya Respublikası",
    name: "Florensiya Dizayn Beynəlxalq İnstitutu (The Florence Institute of Design International)",
    status: "Yoxdur",
  },
  {
    id: 42,
    country: "Birləşmiş Ərəb Əmirlikləri",
    name: "SAE Yaradıcı Media İnstitutu (SAE Creative Media Institute)",
    status: "09.01.2025-ci il tarixindən etibarən akkreditasiyası var",
  },
  {
    id: 43,
    country: "İsveçrə Konfederasiyası",
    name: "İsveçrə Cenevrə Biznes İnstitutu (Swiss Geneva Business Institute)",
    status: "Yoxdur",
  },
  {
    id: 44,
    country: "İsveçrə Konfederasiyası",
    name: "İsveçrə Cenevrə Biznes İnstitutu (Swiss Geneva Business Institute)",
    status:
      "“Antalya International College of Tourism” ilə tərəfdaşlıq çərçivəsində proqram - lisenziyası və akkreditasiyası yoxdur",
  },
  {
    id: 45,
    country: "İspaniya Krallığı",
    name: '"Les Roçhes" Beynəlxalq Otel İdarəetmə Məktəbi (Les Roches: Escuela Internacional de Dirección Hotelera y Turismo)',
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
      <h1 className="uppercase text-4xl text-center w-full px-4 md:px-16 pt-16">
        Tanınmayan unİversİtetlər
      </h1>

      <h2 className="text-base text-center px-4 md:px-16">
        <div>
          Təhsildə Keyfiyyət Təminatı Agentliyinə (TKTA) edilən müraciətlərin
          təhlili nəticəsində yerli akkreditasiyası olmadığı üçün ali təhsil
          sənədlərinə imtina verilmiş universitetlərin siyahısı
        </div>

        <div>Müvafiqdir: 25.09.2025*</div>
      </h2>

      <div className="w-full px-4 md:px-16">
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
        <div className="flex flex-col md:flex-row items-center justify-end space-x-2 py-4">
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

      <div className="w-full px-4 md:px-16 text-center">
        * Siyahı, ali təhsil müəssisəsi üzrə minimum 30 müraciət nəzərə
        alınaraq, edilən müraciətlərdən 30% və ondan artıq imtinaları əhatə
        etməkdədir.
        <div>** Siyahı mütəmadi olaraq yenilənəcəkdir.</div>
      </div>
    </section>
  );
}
