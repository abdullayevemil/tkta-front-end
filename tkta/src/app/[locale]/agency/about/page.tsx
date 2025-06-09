import { getTranslation } from "@/lib/i18n";
import Link from "next/link";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutUs({ params }: Props) {
  const { locale } = await params;

  const t = getTranslation(locale);

  return (
    <div className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-5xl text-center pt-16">
        {t.agency.about.title}
      </h1>

      <div className="px-16 w-full">
        <p className="text-base w-full text-justify tracking-wide leading-7">
          {t.agency.about.description}{" "}
          <Link
            className="italic text-textPrimary font-semibold"
            href="https://e-qanun.az/framework/44056"
          >
            {t.agency.about.link}
          </Link>
        </p>
      </div>
    </div>
  );
}
