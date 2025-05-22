import ImagePreviewer from "@/components/news/news-carousel";
import { notFound } from "next/navigation";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/media/news/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const news = await res.json();

  if (!news) return notFound();

  const { title, content, date, note, photos } = news;

  return (
    <section className="w-full flex flex-col gap-16 items-center px-4 md:px-24 pt-12">
      <h1 className="uppercase text-4xl text-center font-bold">{title}</h1>

      <div
        className="w-full text-justify"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="w-full flex flex-col gap-6">
        {photos?.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo: { url: string }, i: number) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-lg"
              >
                <ImagePreviewer imageUrl={photo.url} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center text-4xl pt-20 pb-12 text-muted-foreground font-semibold">
            TKTA
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          {note && (
            <div className="text-sm font-semibold text-destructive">{note}</div>
          )}
          <div className="text-xs text-muted-foreground ml-auto">
            {date.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
      </div>
    </section>
  );
}
