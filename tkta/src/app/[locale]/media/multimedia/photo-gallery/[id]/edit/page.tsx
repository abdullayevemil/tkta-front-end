"use client";

import { useEffect, useState, use } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { getTranslation } from "@/lib/i18n";

interface PhotoGalleryImage {
  id: number;
  url: string;
}

interface PhotoGallery {
  id: number;
  title: string;
  titleenglish: string;
  headerphotourl: string;
  date: string;
  images: PhotoGalleryImage[];
}

export default function EditPhotoGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = getTranslation(locale);
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [headerPhoto, setHeaderPhoto] = useState<File | null>(null);
  const [headerPreviewUrl, setHeaderPreviewUrl] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<PhotoGalleryImage[]>([]);
  const [imagesToRemove, setImagesToRemove] = useState<number[]>([]);
  const [errors, setErrors] = useState<{
    title: string;
    titleEnglish: string;
    date: string;
  }>({ title: "", titleEnglish: "", date: "" });
  const [loading, setLoading] = useState(false);

  // Fetch photo gallery details on load
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`/api/media/multimedia/photo-gallery/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const gallery: PhotoGallery = await res.json();
        
        setTitle(gallery.title || "");
        setTitleEnglish(gallery.titleenglish || "");
        setDate(new Date(gallery.date));
        setExistingImages(gallery.images || []);
        setHeaderPreviewUrl(gallery.headerphotourl);
      } catch {
        toast.error(t.media.multimedia.error.loading);
      }
    };

    if (id) fetchGallery();
  }, [id, t.media.multimedia.error.loading]);

  useEffect(() => {
    if (!headerPhoto) return;
    const url = URL.createObjectURL(headerPhoto);
    setHeaderPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [headerPhoto]);

  useEffect(() => {
    const urls = images.map(file => URL.createObjectURL(file));
    setImagePreviewUrls(urls);
    return () => urls.forEach(url => URL.revokeObjectURL(url));
  }, [images]);

  const handleHeaderDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setHeaderPhoto(file);
    }
  };

  const handleImagesDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith("image/")
    );
    setImages(prev => [...prev, ...files]);
  };

  const handleHeaderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setHeaderPhoto(file);
    }
  };

  const handleImagesSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => 
      file.type.startsWith("image/")
    );
    setImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (imageId: number) => {
    setImagesToRemove(prev => [...prev, imageId]);
    setExistingImages(prev => prev.filter(img => img.id !== imageId));
  };

  const preventDefault = (e: React.DragEvent) => e.preventDefault();

  const handleSubmit = async () => {
    setErrors({ title: "", titleEnglish: "", date: "" });

    if (!title || !titleEnglish || !date) {
      const newErrors = { title: "", titleEnglish: "", date: "" };
      if (!title) newErrors.title = t.media.multimedia.create.formErrors.titleRequired;
      if (!titleEnglish) newErrors.titleEnglish = t.media.multimedia.create.formErrors.titleEnglishRequired;
      if (!date) newErrors.date = t.media.multimedia.create.formErrors.dateRequired;
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("titleEnglish", titleEnglish);
      formData.append("date", date.toISOString().split('T')[0]);
      
      if (headerPhoto) {
        formData.append("headerPhoto", headerPhoto);
      }
      
      images.forEach((file) => {
        formData.append("images", file);
      });
      
      imagesToRemove.forEach((imageId) => {
        formData.append("removeImageIds", imageId.toString());
      });

      const response = await fetch(`/api/media/multimedia/photo-gallery/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        toast.success(t.media.multimedia.success.update);
        router.push("/media/multimedia/photo-gallery");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || t.media.multimedia.error.update);
      }
    } catch (err) {
      toast.error(t.media.multimedia.error.update);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 items-center px-28 w-full py-8 bg-white text-textPrimary font-sans">
      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        {t.media.multimedia.editPage?.title || "Edit Photo Gallery"}
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="title" className="text-sm font-medium">
              {t.media.multimedia.create.titlePlaceholder}
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={cn(
                "mt-1 text-black",
                errors.title && "border-red-500"
              )}
              placeholder={t.media.multimedia.create.titleInputPlaceholder}
            />
            {errors.title && (
              <p className="text-red-600 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="titleEnglish" className="text-sm font-medium">
              {t.media.multimedia.create.titleEnglishInputPlaceholder}
            </Label>
            <Input
              id="titleEnglish"
              type="text"
              value={titleEnglish}
              onChange={(e) => setTitleEnglish(e.target.value)}
              className={cn(
                "mt-1 text-black",
                errors.titleEnglish && "border-red-500"
              )}
              placeholder={t.media.multimedia.create.titleEnglishInputPlaceholder}
            />
            {errors.titleEnglish && (
              <p className="text-red-600 text-xs mt-1">{errors.titleEnglish}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="date" className="text-sm font-medium">
              {t.media.multimedia.create.datePlaceholder}
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
                  {date ? format(date, "dd.MM.yyyy") : t.media.multimedia.create.datePlaceholder}
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
            {errors.date && (
              <p className="text-red-600 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              {t.media.multimedia.create.headerPhoto}
            </Label>
            <div
              onDrop={handleHeaderDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("headerPhotoInput")?.click()
              }
              role="button"
              tabIndex={0}
              className={cn(
                "cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition select-none min-h-[100px]"
              )}
            >
              {headerPreviewUrl ? (
                <Image
                  width={100}
                  height={60}
                  src={headerPreviewUrl}
                  alt={t.media.multimedia.create.headerPhoto}
                  className="max-h-32 object-contain rounded-md shadow-md"
                />
              ) : (
                <p className="text-textPrimary text-center text-sm">
                  {t.media.multimedia.create.headerPhotoDescription}
                </p>
              )}
              <input
                type="file"
                accept="image/*"
                id="headerPhotoInput"
                onChange={handleHeaderSelect}
                className="hidden"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              {t.media.multimedia.create.galleryImages}
            </Label>
            <div
              onDrop={handleImagesDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("imagesInput")?.click()
              }
              role="button"
              tabIndex={0}
              className={cn(
                "cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition select-none min-h-[100px]"
              )}
            >
              {images.length === 0 && existingImages.length === 0 ? (
                <p className="text-textPrimary text-center text-sm">
                  {t.media.multimedia.create.galleryImagesDescription}
                </p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {/* Existing images */}
                  {existingImages.map((image) => (
                    <div
                      key={image.id}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow-md"
                    >
                      <Image
                        width={80}
                        height={80}
                        src={image.url}
                        alt={`Existing ${image.id}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeExistingImage(image.id);
                        }}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-700 transition text-xs"
                        aria-label={t.media.multimedia.delete}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {/* New images */}
                  {imagePreviewUrls.map((url, index) => (
                    <div
                      key={`new-${index}`}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow-md"
                    >
                      <Image
                        width={80}
                        height={80}
                        src={url}
                        alt={`New ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-700 transition text-xs"
                        aria-label={t.media.multimedia.delete}
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
                id="imagesInput"
                onChange={handleImagesSelect}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="default"
        onClick={handleSubmit}
        className="mt-auto bg-textSecondary hover:bg-textPrimary text-white font-semibold py-2 rounded-md shadow-md transition w-fit px-16"
        disabled={loading}
      >
        {loading ? (t.media.multimedia.editPage?.updating || "Updating...") : (t.media.multimedia.editPage?.submit || "Update")}
      </Button>
    </div>
  );
} 