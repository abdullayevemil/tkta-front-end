"use client";

import { use, useEffect, useState } from "react";
import NewsCard from "@/components/home/news-card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, EditIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { News as NewsType } from "@/types/news";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
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
import { getTranslation } from "@/lib/i18n";
import NewsSkeleton from "@/components/news/skeleton";

const ITEMS_PER_PAGE = 9;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default function News({ params }: Props) {
  const { locale } = use(params);

  const t = getTranslation(locale);

  const [searchQuery, setSearchQuery] = useState("");
  const [from, setFrom] = useState<Date | undefined>();
  const [to, setTo] = useState<Date | undefined>();
  const [sort, setSort] = useState<"new" | "old">("new");
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<NewsType[]>([]);
  const [total, setTotal] = useState(0);
  const { data: session, status } = useSession();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  if (status === "loading") {
  }

  const isAdmin = session?.user?.role === "admin";

  async function handleDelete() {
    if (deleteId === null) return;

    try {
      const response = await fetch(`/api/announcements/vacancies/${deleteId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete news");
      }

      toast.success(t.media.news.success.delete);
    } catch {
      toast.success(t.media.news.error.delete);
    } finally {
      setOpen(false);

      setDeleteId(null);
    }
  }

  const fetchNews = async () => {
    const params = new URLSearchParams();

    if (searchQuery) params.append("search", searchQuery);

    if (from) params.append("from", from.toISOString());

    if (to) params.append("to", to.toISOString());

    if (sort) params.append("sort", sort);

    if (page) params.append("page", page.toString());

    const res = await fetch(`/api/announcements/vacancies?${params.toString()}`);

    if (!res.ok) {
      toast.error(t.media.news.error.loading);

      return;
    }

    const data = await res.json();

    setNews(data.vacancies);

    setTotal(data.total);
  };

  useEffect(() => {
    fetchNews();
  }, [searchQuery, from, to, sort, page]);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-10 md:gap-12 items-center">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center w-full px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16">
        VAKANSİYALAR
      </h1>
      <div className="w-full px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <Input
          placeholder={`${t.media.news.search}...`}
          className="w-full flex-1"
          value={searchQuery}
          onChange={(e) => {
            setPage(1);
            setSearchQuery(e.target.value);
          }}
        />
        <div className="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[160px] justify-start text-left",
                  !from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {from ? format(from, "dd.MM.yyyy") : t.media.news.from}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={from}
                onSelect={(date) => {
                  setFrom(date);
                  setPage(1);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[160px] justify-start text-left",
                  !to && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {to ? format(to, "dd.MM.yyyy") : t.media.news.to}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={to}
                onSelect={(date) => {
                  setTo(date);
                  setPage(1);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Select
            value={sort}
            onValueChange={(val) => {
              setSort(val as "new" | "old");
              setPage(1);
            }}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sıralama" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">{t.media.news.newFirst}</SelectItem>
              <SelectItem value="old">{t.media.news.oldFirst}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isAdmin && (
        <div className="w-full px-4 sm:px-8 md:px-16">
          <Link
            href={`/${locale}/announcements/vacancies/create`}
            className="bg-textPrimary w-fit rounded shadow-md text-white px-4 py-2 flex items-center gap-2"
          >
            <span>Vakansiya yarat</span>
            <PlusIcon className="w-4 h-4" />
          </Link>
        </div>
      )}

      {news.length === 0 ? (
        <NewsSkeleton />
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 w-full">
          {news.map((item) => (
            <li key={item.id} className="relative">
              <Link href={`/${locale}/announcements/vacancies/${item.id}`}>
                <NewsCard
                  id={item.id}
                  href={`/${locale}/announcements/vacancies/${item.id}`}
                  title={locale === "az" ? item.title : item.titleenglish}
                  date={new Date(item.date).toISOString().split("T")[0]}
                  headerimageurl={item.headerimageurl}
                  note={locale === "az" ? item.note : item.noteenglish}
                  content=""
                />
              </Link>

              {isAdmin && (
                <div className="absolute top-4 right-4 flex items-center justify-center gap-4">
                  <AlertDialog
                    open={open && deleteId === item.id}
                    onOpenChange={setOpen}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          setDeleteId(item.id);
                          setOpen(true);
                        }}
                      >
                        <span>{t.media.news.delete}</span>

                        <Trash2Icon className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {t.media.news.removeDialogTitle}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {t.media.news.removeDialogContent}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          {t.media.news.removeDialogCancel}
                        </AlertDialogCancel>
                        <Button variant="destructive" onClick={handleDelete}>
                          {t.media.news.removeDialogConfirm}
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Link
                    href={`/announcements/vacancies/${item.id}/edit`}
                    className="flex items-center justify-center gap-2 px-2 py-2 bg-blue-600 text-white rounded-md"
                  >
                    <span className="text-sm">{t.media.news.edit}</span>

                    <EditIcon className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className="flex gap-4 mt-8">
          <Button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            variant="outline"
          >
            {t.previous}
          </Button>
          <span className="self-center">
            {t.page} {page} / {totalPages}
          </span>

          <Button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            variant="outline"
          >
            {t.next}
          </Button>
        </div>
      )}
    </div>
  );
}
