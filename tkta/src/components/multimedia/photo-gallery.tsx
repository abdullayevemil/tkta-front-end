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

type GalleryItem = {
  id: number;
  title: string;
  titleEnglish: string;
  headerimageurl: string;
  date: string;
};

const ITEMS_PER_PAGE = 9;

export function PhotoGallery() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

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
    if (from) params.append("from", from.toISOString());
    if (to) params.append("to", to.toISOString());
    if (sort) params.append("sort", sort);
    params.append("page", page.toString());

    try {
      const res = await fetch(`/api/media/multimedia/photo-gallery?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setGallery(data.gallery);
      setTotal(data.total);
    } catch {
      toast.error("Failed to load gallery");
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
      toast.success("Deleted successfully");
      setAlertOpen(false);
      setDeleteId(null);
      fetchGallery();
    } catch {
      toast.error("Delete failed");
    }
  }

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className="w-full flex flex-col gap-12 items-center">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <Input
          placeholder="Search..."
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
                {from ? format(from, "dd.MM.yyyy") : "From"}
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
                {to ? format(to, "dd.MM.yyyy") : "To"}
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
              <SelectItem value="new">Newest First</SelectItem>
              <SelectItem value="old">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isAdmin && (
        <div className="w-full flex justify-end">
          <Link
            href="/media/photo-gallery/create"
            className="bg-textPrimary rounded shadow-md text-white px-4 py-2 flex items-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            Add Photo
          </Link>
        </div>
      )}

      {gallery.length === 0 ? (
        <p className="text-center mt-16">No photos found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {gallery.map((item) => (
            <li key={item.id} className="relative border rounded-md overflow-hidden">
              <Link href={`/media/photo-gallery/${item.id}`}>
                <img
                  src={item.headerimageurl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <h3 className="p-2 font-semibold text-center truncate" title={item.title}>
                  {item.title}
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  {format(new Date(item.date), "dd.MM.yyyy")}
                </p>
              </Link>

              {isAdmin && (
                <div className="absolute top-2 right-2 flex gap-2">
                  <AlertDialog
                    open={alertOpen && deleteId === item.id}
                    onOpenChange={setAlertOpen}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          setDeleteId(item.id);
                          setAlertOpen(true);
                        }}
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this photo?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button variant="destructive" onClick={handleDelete}>
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Link
                    href={`/media/photo-gallery/${item.id}/edit`}
                    className="bg-blue-600 rounded px-2 py-1 text-white flex items-center"
                  >
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
            Previous
          </Button>
          <span className="self-center">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
