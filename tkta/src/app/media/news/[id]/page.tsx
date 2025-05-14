import sql from "@/lib/db";
import Image from "next/image";

export async function generateStaticParams() {
  const news = await sql`SELECT * FROM news`;

  return news.map((n) => ({
    id: n.id.toString(),
  }));
}

export default async function News({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const news = await sql`SELECT * FROM news WHERE id = ${id}`;

  if (news.length === 0) {
    return <div>News not found</div>;
  }

  const { title, content, imageUrl, creationDate, note } = news[0];

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-5xl text-center w-full px-[112px]">
        {title}
      </h1>

      <div className="w-full flex flex-col gap-6 px-16">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} image`}
            width={40}
            height={40}
            className="w-full"
          />
        ) : (
          <div className="flex items-center justify-center text-textPrimary text-5xl pt-20 pb-12">
            TKTA
          </div>
        )}

        <p className="text-base">{content}</p>

        <div className="flex flex-row justify-between items-center">
          {note ? (
            <div className="text-sm font-semibold text-red-700">{note}</div>
          ) : (
            <div></div>
          )}

          <div className="text-xs text-textSecondary">{creationDate}</div>
        </div>
      </div>
    </section>
  );
}