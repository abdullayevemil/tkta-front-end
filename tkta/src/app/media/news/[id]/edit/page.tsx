"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { News } from "@/types/news";
import { z } from "zod";
const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  {
    ssr: false,
  }
);

const newsSchema = z.object({
  title: z.string().min(1, "Başlıq mütləqdir."),
  content: z.string().min(1, "Məzmun mütləqdir."),
  headerImage: z.instanceof(File).nullable().optional(),
  galleryImages: z.array(z.instanceof(File)).optional(),
  date: z.date({ required_error: "Tarix mütləqdir." }),
  note: z.string().optional(),
});

export default function EditNewsPage() {
  if (newsSchema) {
  }
  const { id } = useParams();
  const router = useRouter();
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [content, setContent] = useState("");
  const [headerImage, setHeaderImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [errors, setErrors] = useState<
    Partial<Record<keyof z.infer<typeof newsSchema>, string>>
  >({});
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`/api/media/news/${id}`);

        const data = res.data;

        setTitle(data.title);

        setDate(new Date(data.date));

        setContent(data.content);

        setNote(data.note || "");

        const response = await fetch(data.headerimageurl);

        const blob = await response.blob();

        const fileType = blob.type || "image/jpeg";

        const headerImageFile = new File([blob], "header_image.jpeg", {
          type: fileType,
        });

        const files = await Promise.all(
          data.photos.map(async (photo: { url: string }) => {
            const res = await fetch(photo.url);
            const blob = await res.blob();
            return new File([blob], "gallery_image.jpeg", {
              type: blob.type || "image/jpeg",
            });
          })
        );
        setGalleryImages(files);

        setHeaderImage(headerImageFile);
      } catch (err) {
        console.error("Failed to load news:", err);
      }
    };

    if (id) fetchNews();
  }, [id]);

  const handleHeaderDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) setHeaderImage(file);
      e.dataTransfer.clearData();
    }
  };

  const handleGalleryDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files).filter((f) =>
        f.type.startsWith("image/")
      );
      setGalleryImages((prev) => [...prev, ...filesArray]);
      e.dataTransfer.clearData();
    }
  };

  const preventDefault = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null) {
      const fileArray = Array.from(files);
      setGalleryImages((prev) => [...prev, ...fileArray]);
    }
  };

  const validate = () => {
    const newErrors: News = {
      id: 0,
      title: "",
      content: "",
      date: "",
    };

    if (!title) newErrors.title = "Başlıq boş ola bilməz";
    if (!date) newErrors.date = "Tarix seçilməlidir";
    if (!content) newErrors.content = "Məzmun boş ola bilməz";
    setErrors(newErrors);
    return (
      newErrors.id == 0 &&
      newErrors.title == "" &&
      newErrors.content == "" &&
      newErrors.date == ""
    );
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const formData = new FormData();
    formData.append("title", title);
    if (date) formData.append("date", date.toISOString());
    formData.append("content", content);
    formData.append("note", note);
    if (headerImage) formData.append("headerImage", headerImage);
    galleryImages.forEach((img) => formData.append("galleryImages", img));

    try {
      await axios.put(`/api/media/news/${id}`, formData);
      router.push("/media/news");
    } catch (err) {
      console.error("Failed to update news:", err);
    }
  };

  return (
    <div className="flex flex-col gap-12 items-center px-28 w-full py-8 bg-white text-textPrimary font-sans">
      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        XƏBƏRİ REDAKTƏ ET
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 flex flex-col gap-6">
          {/* Başlıq */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="title" className="text-sm font-medium">
              Başlıq
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={cn(
                "mt-1 text-black",
                errors.title && "border-red-500"
              )}
              placeholder="Xəbər başlığını daxil edin"
            />
            {errors.title && (
              <p className="text-red-600 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          {/* Tarix */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="date" className="text-sm font-medium">
              Tarix
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[160px] justify-start text-left rounded-md text-black",
                    !date ? "text-muted-foreground" : "",
                    errors.date && "border-red-500"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd.MM.yyyy") : "Tarix seçin"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto p-2 text-black rounded-lg shadow-lg border border-gray-200 bg-white"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="rounded-md text-black"
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <p className="text-red-600 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          {/* Header Image */}
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              Başlıq Şəkli (tək)
            </Label>
            <div
              onDrop={handleHeaderDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("headerImageInput")?.click()
              }
              className={cn(
                "cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition select-none min-h-[80px]",
                errors.headerImage && "border-red-500"
              )}
            >
              {headerImage ? (
                <Image
                  width={50}
                  height={50}
                  src={URL.createObjectURL(headerImage)}
                  alt="Başlıq"
                  className="max-h-32 object-contain rounded-md shadow-md"
                />
              ) : (
                <p className="text-textPrimary text-center text-sm">
                  Buraya tək şəkli sürüşdürüb buraxın və ya seçmək üçün
                  klikləyin
                </p>
              )}
              <input
                type="file"
                accept="image/*"
                id="headerImageInput"
                onChange={(e) => {
                  if (e.target.files?.[0]) setHeaderImage(e.target.files[0]);
                }}
                className="hidden"
              />
            </div>
            {errors.headerImage && (
              <p className="text-red-600 text-xs mt-1">{errors.headerImage}</p>
            )}
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              Qalereya Şəkilləri (bir neçə)
            </Label>
            <div
              onDrop={handleGalleryDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("galleryImagesInput")?.click()
              }
              className={cn(
                "flex items-center justify-center cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 bg-gray-50 hover:bg-gray-100 transition select-none min-h-[100px]",
                errors.galleryImages && "border-red-500"
              )}
            >
              {galleryImages.length === 0 ? (
                <p className="text-textPrimary text-center text-sm">
                  Buraya bir neçə şəkli sürüşdürüb buraxın və ya seçmək üçün
                  klikləyin
                </p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {galleryImages.map((file, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow-md"
                    >
                      <Image
                        width={50}
                        height={50}
                        src={URL.createObjectURL(file)}
                        alt={`Qalereya ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeGalleryImage(index);
                        }}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-700 transition text-xs"
                        aria-label="Şəkli sil"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                multiple
                id="galleryImagesInput"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {errors.galleryImages && (
              <p className="text-red-600 text-xs mt-1">
                {errors.galleryImages}
              </p>
            )}
          </div>
        </div>

        {/* Məzmun və Qeyd */}
        <div className="md:w-3/5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="content" className="text-sm font-medium">
              Məzmun
            </Label>
            <div
              className={cn(
                "rounded-md border border-gray-300 p-2 text-black",
                errors.content && "border-red-500"
              )}
            >
              <RichTextEditor
                ref={editorRef}
                value={content}
                onChange={setContent}
              />
            </div>
            {errors.content && (
              <p className="text-red-600 text-xs mt-1">{errors.content}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="note" className="text-sm font-medium">
              Qeyd (optional)
            </Label>
            <Textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-gray-300 p-2 text-black resize-none"
              placeholder="Qeyd əlavə edin..."
            />
          </div>
        </div>
      </div>

      <Button
        variant="default"
        type="submit"
        onClick={handleSubmit}
        className="mt-auto bg-textSecondary hover:bg-textPrimary text-white font-semibold py-2 rounded-md shadow-md transition w-fit px-16"
      >
        Xəbəri Yadda Saxla
      </Button>
    </div>
  );
}
