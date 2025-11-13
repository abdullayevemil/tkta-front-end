import Image from "next/image";
import ImagePreviewer from "@/components/news/news-carousel";
import { notFound } from "next/navigation";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;

  const { locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/announcements/qualification_recognitions/${id}`
  );

  if (!res.ok) return notFound();

  const news = await res.json();

  if (!news) return notFound();

  const {
    title,
    titleenglish,
    contentenglish,
    noteenglish,
    content,
    date,
    note,
    photos,
    headerimageurl,
  } = news;

  return (
    <section className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-8 md:px-24 pt-8 sm:pt-12">
      {headerimageurl && (
        <div className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] overflow-hidden rounded-xl">
          <Image
            src={headerimageurl}
            alt="Xəbər başlıq şəkli"
            width={1200}
            height={500}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
      )}
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-textPrimary">
        {locale === "az" ? title : titleenglish}
      </h1>
      <div
        className="w-full text-justify"
        dangerouslySetInnerHTML={{
          __html: locale === "az" ? content : contentenglish,
        }}
      />
      <div className="w-full flex flex-col gap-6">
        {photos?.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 sm:gap-10 md:gap-16 space-y-4">
            {photos.map((photo: { url: string }, i: number) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-lg">
                <ImagePreviewer imageUrl={photo.url} />
              </div>
            ))}
          </div>
        ) : null}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          {note && (
            <div className="text-sm font-semibold text-destructive">
              {locale === "az" ? note : noteenglish}
            </div>
          )}
          <div className="text-xs text-muted-foreground sm:ml-auto">
            {date.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
      </div>
    </section>
  );
}
