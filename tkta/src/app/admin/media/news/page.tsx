"use client";
import { RichTextEditorHandle } from "@/components/ui/rich-text-editor";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
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
const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  {
    ssr: false,
  }
);

function AddNewsPage() {
  const editorRef = useRef<RichTextEditorHandle>(null);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [content, setContent] = useState("");
  const [headerImage, setHeaderImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [date, setDate] = useState<Date | undefined>();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const headerImageUrl = headerImage ? headerImage.name : null;
    const newsData = {
      title,
      content,
      headerImageUrl,
      galleryImages: galleryImages.map((f) => f.name),
      date,
    };

    console.log("News data:", newsData);
    alert("News submitted! Check console.");
  };

  return (
    <main className="px-28 max-w-full py-8 bg-white text-textPrimary font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-2/5 flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 text-black"
              placeholder="Enter news title"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="date" className="text-sm font-medium">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[160px] justify-start text-left rounded-md text-black",
                    !date ? "text-muted-foreground" : ""
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd.MM.yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto p-2 text-black rounded-lg shadow-lg border border-gray-200 bg-white"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => setDate(date)}
                  initialFocus
                  className="rounded-md text-black"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Header Image */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium mb-1 block">
              Header Image (single)
            </Label>
            <div
              onDrop={handleHeaderDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("headerImageInput")?.click()
              }
              className="cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition select-none min-h-[80px]"
            >
              {headerImage ? (
                <Image width={50} height={50}
                  src={URL.createObjectURL(headerImage)}
                  alt="Header"
                  className="max-h-32 object-contain rounded-md shadow-md"
                />
              ) : (
                <p className="text-textPrimary text-center text-sm">
                  Drag & drop a single image here, or click to select
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
          </div>

          {/* Gallery Images */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium mb-1 block">
              Gallery Images (multiple)
            </Label>
            <div
              onDrop={handleGalleryDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("galleryImagesInput")?.click()
              }
              className="flex items-center justify-center cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 bg-gray-50 hover:bg-gray-100 transition select-none min-h-[100px]"
            >
              {galleryImages.length === 0 ? (
                <p className="text-textPrimary text-center text-sm">
                  Drag & drop multiple images here, or click to select
                </p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {galleryImages.map((file, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow-md"
                    >
                      <Image width={50} height={50}
                        src={URL.createObjectURL(file)}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeGalleryImage(index);
                        }}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-700 transition text-xs"
                        aria-label="Remove image"
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
                    const filesArray = Array.from(e.target.files).filter((f) =>
                      f.type.startsWith("image/")
                    );
                    setGalleryImages((prev) => [...prev, ...filesArray]);
                  }
                }}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-3/5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium mb-1">Content</Label>

            <div className="min-h-[212px] border border-gray-200 rounded-md overflow-hidden text-black">
              <RichTextEditor
                value={content}
                onChange={setContent}
                ref={editorRef}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Note
            </Label>
            <Input
              id="note"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
              className="mt-1 text-black"
              placeholder="Enter note if any"
            />
          </div>
        </div>
      </div>

      {/* Submit button below columns, centered */}
      <div className="mt-8 flex justify-center">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-1/3 bg-textSecondary hover:bg-textPrimary text-white font-semibold py-2 rounded-md shadow-md transition"
        >
          Submit News
        </Button>
      </div>
    </main>
  );
}

export default AddNewsPage;
