'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CalendarIcon, EditIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { getTranslation } from "@/lib/i18n";
import { Card } from "../ui/card";
import NewsSkeleton from "../news/skeleton";
import Image from "next/image";

type GalleryItem = {
  id: number;
  title: string;
  titleenglish: string;
  headerphotourl: string;
  date: string;
};

const ITEMS_PER_PAGE = 9;

export function PhotoGallery({ locale }: { locale: string }) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role !== "admin";
  const t = getTranslation(locale);

  const [search, setSearch] = useState("");
  const [from, setFrom] = useState<Date | undefined>();
  const [to, setTo] = useState<Date | undefined>();
  const [sort, setSort] = useState<"new" | "old">("new");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [total, setTotal] = useState(0);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);

  async function fetchGallery() {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (from) params.append("from", from.toISOString().split('T')[0]);
    if (to) params.append("to", to.toISOString().split('T')[0]);
    if (sort) params.append("sort", sort);
    params.append("page", page.toString());

    try {
      const res = await fetch(`/api/media/multimedia/photo-gallery?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setGallery(data.gallery);
      setTotal(data.total);
      console.log(data);  
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
      const res = await fetch(`/api/media/multimedia/photo-gallery/${deleteId}`, {
        method: "DELETE",
      });
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

  return (
    <div className="w-full flex flex-col gap-12 items-center">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <Input
          placeholder={t.media.multimedia.search}
          className="w-full flex-1"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />

        <div className="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-[160px] justify-start text-left ${
                  !from ? "text-muted-foreground" : ""
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {from ? format(from, "dd.MM.yyyy") : t.media.multimedia.from}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={from}
                onSelect={(date) => {
                  setFrom(date || undefined);
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
                className={`w-[160px] justify-start text-left ${
                  !to ? "text-muted-foreground" : ""
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {to ? format(to, "dd.MM.yyyy") : t.media.multimedia.to}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={to}
                onSelect={(date) => {
                  setTo(date || undefined);
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
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">{t.media.multimedia.newFirst}</SelectItem>
              <SelectItem value="old">{t.media.multimedia.oldFirst}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isAdmin && (
        <div className="w-full flex justify-end">
          <Link
            href={`/${locale}/media/multimedia/photo-gallery/create`}
            className="bg-textPrimary rounded shadow-md text-white px-4 py-2 flex items-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            {t.media.multimedia.addPhoto}
          </Link>
        </div>
      )}

      {gallery.length === 0 ? (
        <NewsSkeleton />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {gallery.map((item) => (
            <li key={item.id} className="relative">
              <Card className="w-full h-full flex flex-col bg-transparent">
                <Link href={`/${locale}/media/multimedia/photo-gallery/${item.id}`}>
                  <Image
                    src={item.headerphotourl}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                    loading="lazy"
                    width={900}
                    height={900}
                  />
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
                        <Button variant="destructive" onClick={handleDelete}>
                          {t.media.multimedia.removeDialogConfirm}
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Link
                    href={`/media/multimedia/photo-gallery/${item.id}/edit`}
                    className="flex items-center justify-center gap-2 px-2 py-2 bg-blue-600 text-white rounded-md"
                  >
                    <span className="text-sm">{t.media.multimedia.edit}</span>
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
    </div>
  );
}
