"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";

export default function AddVideoGalleryPage() {
  const [title, setTitle] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    title: string;
    titleEnglish: string;
    videoFile: string;
  }>({ title: "", titleEnglish: "", videoFile: "" });

  useEffect(() => {
    if (!videoFile) return;
    const url = URL.createObjectURL(videoFile);
    setVideoPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [videoFile]);

  const handleVideoDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    }
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    }
  };

  const preventDefault = (e: React.DragEvent) => e.preventDefault();

  const handleSubmit = async () => {
    setErrors({ title: "", titleEnglish: "", videoFile: "" });
    if (!title || !titleEnglish || !videoFile) {
      const newErrors = { title: "", titleEnglish: "", videoFile: "" };
      if (!title) newErrors.title = "Title is required";
      if (!titleEnglish) newErrors.titleEnglish = "Title (English) is required";
      if (!videoFile) newErrors.videoFile = "Video is required";
      setErrors(newErrors);
      return;
    }

    try {
      toast.loading("Uploading video to YouTube...");

      const formData = new FormData();
      formData.append("video", videoFile);
      formData.append("title", title);
      formData.append("titleEnglish", titleEnglish);

      const response = await axios.post(
        "/api/media/multimedia/video-gallery/youtube",
        formData
      );
      const iframeUrl = response.data.iframeUrl;

      await axios.post("/api/media/multimedia/video-gallery", {
        title,
        titleEnglish,
        headerviewurl: iframeUrl,
      });

      toast.dismiss();
      toast.success("Video added successfully!");

      setTitle("");
      setTitleEnglish("");
      setVideoFile(null);
      setVideoPreviewUrl(null);
    } catch (err) {
      toast.dismiss();
      toast.error("Error uploading video");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-12 items-center px-28 w-full py-8 bg-white text-textPrimary font-sans">
      <h1 className="uppercase text-5xl text-center w-full px-16 pt-16">
        Add Video to Gallery
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="title" className="text-sm font-medium">
              Title
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
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-red-600 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="titleEnglish" className="text-sm font-medium">
              Title (English)
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
              placeholder="Enter title in English"
            />
            {errors.titleEnglish && (
              <p className="text-red-600 text-xs mt-1">{errors.titleEnglish}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label className="text-sm font-medium mb-1 block">
              Header Video
            </Label>
            <div
              onDrop={handleVideoDrop}
              onDragOver={preventDefault}
              onClick={() =>
                document.getElementById("headerVideoInput")?.click()
              }
              role="button"
              tabIndex={0}
              className={cn(
                "cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-4 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition select-none min-h-[100px]",
                errors.videoFile && "border-red-500"
              )}
            >
              {videoPreviewUrl ? (
                <video
                  src={videoPreviewUrl}
                  controls
                  className="max-h-48 object-contain rounded-md shadow-md"
                />
              ) : (
                <p className="text-textPrimary text-center text-sm">
                  Drag & drop or click to select a video
                </p>
              )}
              <input
                type="file"
                accept="video/*"
                id="headerVideoInput"
                onChange={handleVideoSelect}
                className="hidden"
              />
            </div>
            {errors.videoFile && (
              <p className="text-red-600 text-xs mt-1">{errors.videoFile}</p>
            )}
          </div>
        </div>
      </div>

      <Button
        variant="default"
        type="submit"
        onClick={handleSubmit}
        className="mt-auto bg-textSecondary hover:bg-textPrimary text-white font-semibold py-2 rounded-md shadow-md transition w-fit px-16"
      >
        Submit
      </Button>
    </div>
  );
}
