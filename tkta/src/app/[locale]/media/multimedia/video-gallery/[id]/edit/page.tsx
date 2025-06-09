"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";

export default function EditVideoGalleryPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [errors, setErrors] = useState<{ title: string; titleEnglish: string }>(
    { title: "", titleEnglish: "" }
  );
  const [loading, setLoading] = useState(false);

  // Fetch video details on load
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(
          `/api/media/multimedia/video-gallery/${id}`
        );
        const video = res.data;
        setTitle(video.title || "");
        setTitleEnglish(video.titleenglish || "");
      } catch {
        toast.error("Failed to load video data");
      }
    };

    if (id) fetchVideo();
  }, [id]);

  const handleSubmit = async () => {
    setErrors({ title: "", titleEnglish: "" });

    if (!title || !titleEnglish) {
      const newErrors = { title: "", titleEnglish: "" };
      if (!title) newErrors.title = "Title is required";
      if (!titleEnglish) newErrors.titleEnglish = "Title (English) is required";
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      await axios.put(`/api/media/multimedia/video-gallery/${id}`, {
        title,
        titleEnglish,
      });

      toast.success("Video updated successfully!");
      router.push("/media/multimedia/video-gallery");
    } catch (err) {
      toast.error("Error updating video");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 items-center px-28 w-full py-8 bg-white text-textPrimary font-sans">
      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        Edit Video
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
        </div>
      </div>

      <Button
        variant="default"
        onClick={handleSubmit}
        className="mt-auto bg-textSecondary hover:bg-textPrimary text-white font-semibold py-2 rounded-md shadow-md transition w-fit px-16"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update"}
      </Button>
    </div>
  );
}
