"use client";

import { RichTextEditorHandle } from "@/components/ui/rich-text-editor";
import dynamic from "next/dynamic";
import React, { use, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { getTranslation } from "@/lib/i18n";

const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  {
    ssr: false,
  }
);

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const newsSchema = z.object({
  title: z.string().min(1, "Başlıq mütləqdir."),
  titleEnglish: z.string().min(1, "Başlıq mütləqdir."),
  content: z.string().min(1, "Məzmun mütləqdir."),
  contentEnglish: z.string().min(1, "Məzmun mütləqdir."),
  headerImage: z.any().nullable().optional(),
  galleryImages: z.array(z.any()).optional(),
  date: z.date({ required_error: "Tarix mütləqdir." }),
  note: z.string().optional(),
});

function AddNewsPage({ params }: Props) {
  const { locale } = use(params);

  const t = getTranslation(locale);

  const editorRef = useRef<RichTextEditorHandle>(null);

  const [title, setTitle] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [contentEnglish, setContentEnglish] = useState("");
  const [note, setNote] = useState("");
  const [noteEnglish, setNoteEnglish] = useState("");
  const [content, setContent] = useState("");
  const [headerImage, setHeaderImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [errors, setErrors] = useState<
    Partial<Record<keyof z.infer<typeof newsSchema>, string>>
  >({});

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = newsSchema.safeParse({
      title,
      titleEnglish,
      content,
      contentEnglish,
      headerImage,
      galleryImages,
      date,
      note,
      noteEnglish,
    });

    if (!result.success) {
      const fieldErrors: Partial<Record<string, string>> = {};
      result.error.errors.forEach(({ path, message }) => {
        const key = path[0] as string;
        fieldErrors[key] = message;
      });
      setErrors(fieldErrors);
      return;
    }

    const newsData = new FormData();
    newsData.append("title", title);
    newsData.append("titleEnglish", titleEnglish);
    newsData.append("content", content);
    newsData.append("contentEnglish", contentEnglish);
    newsData.append("note", note);
    newsData.append("noteEnglish", noteEnglish);
    if (headerImage) newsData.append("headerImage", headerImage);
    if (galleryImages.length > 0) {
      galleryImages.forEach((file) => {
        newsData.append("galleryImages", file);
      });
    }
    if (date) newsData.append("date", date.toISOString());

    await fetch("/api/media/interviews", {
      method: "POST",
      body: newsData,
    }).then((res) => {
      if (res.ok) {
        toast.success(t.media.interviews.success.create);
      } else {
        toast.error(t.media.interviews.error.create);
      }
    });
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center px-4 sm:px-8 md:px-16 w-full py-8 bg-white text-textPrimary font-sans">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center w-full px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16">
        {t.media.interviews.create.title}
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <Label htmlFor="title" className="text-sm font-medium">
              {t.media.interviews.create.titlePlaceholder}
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
              placeholder={t.media.interviews.create.titleInputPlaceholder}
            />
            {errors.title && (
              <p className="text-red-600 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="titleEnglish" className="text-sm font-medium">
              {t.media.interviews.create.titleEnglish}
            </Label>
            <Input
              id="titleEnglish"
              type="text"
              value={titleEnglish}
              onChange={(e) => setTitleEnglish(e.target.value)}
              required
              className={cn(
                "mt-1 text-black",
                errors.titleEnglish && "border-red-500"
              )}
              placeholder={t.media.interviews.create.titleEnglishInputPlaceholder}
            />
            {errors.titleEnglish && (
              <p className="text-red-600 text-xs mt-1">{errors.titleEnglish}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="date" className="text-sm font-medium">
              {t.media.interviews.create.datePlaceholder}
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
                x
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => setDate(date)}
                  initialFocus
                  className="rounded-md text-black"
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <p className="text-red-600 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              {t.media.interviews.create.headerImage}
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
                  {t.media.interviews.create.headerImageDescription}
                </p>
              )}

              <input
                type="file"
                accept="image/*"
                id="headerImageInput"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setHeaderImage(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
            </div>
            {errors.headerImage && (
              <p className="text-red-600 text-xs mt-1">{errors.headerImage}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              {t.media.interviews.create.images}
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
                  {t.media.interviews.create.imagesDescription}
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
                onChange={(e) => {
                  if (e.target.files) {
                    setGalleryImages((prev) => [
                      ...prev,
                      ...Array.from(e.target.files ?? []),
                    ]);
                  }
                }}
                className="hidden"
              />
            </div>
            {errors.galleryImages && (
              <p className="text-red-600 text-xs mt-1">
                {errors.galleryImages}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="note" className="text-sm font-medium">
             {t.media.interviews.create.note}
            </Label>
            <Textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-gray-300 p-2 text-black resize-none"
              placeholder={t.media.interviews.create.noteInputPlaceholder}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="note" className="text-sm font-medium">
              {t.media.interviews.create.noteEnglish}
            </Label>
            <Textarea
              id="note"
              value={noteEnglish}
              onChange={(e) => setNoteEnglish(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-gray-300 p-2 text-black resize-none"
              placeholder= {t.media.interviews.create.noteInputEnglishPlaceholder}
            />
          </div>
        </div>

        <div className="md:w-3/5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="content" className="text-sm font-medium">
              {t.media.interviews.create.contentPlaceholder}
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
            <Label htmlFor="contentEnglish" className="text-sm font-medium">
              {t.media.interviews.create.contentEnglish}
            </Label>
            <div
              className={cn(
                "rounded-md border border-gray-300 p-2 text-black",
                errors.contentEnglish && "border-red-500"
              )}
            >
              <RichTextEditor
                ref={editorRef}
                value={contentEnglish}
                onChange={setContentEnglish}
              />
            </div>
            {errors.contentEnglish && (
              <p className="text-red-600 text-xs mt-1">
                {errors.contentEnglish}
              </p>
            )}
          </div>
        </div>
      </div>

      <Button
        variant={"default"}
        type="submit"
        onClick={handleSubmit}
        className="mt-auto bg-textSecondary hover:bg-textPrimary text-white font-semibold py-2 rounded-md shadow-md transition w-fit px-8 sm:px-12 md:px-16"
      >
        {t.media.interviews.create.submit}
      </Button>
    </div>
  );
}

export default AddNewsPage;
