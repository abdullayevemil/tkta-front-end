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
    <div className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 items-center">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-center pt-8 sm:pt-12 md:pt-16">
        {t.agency.about.title}
      </h1>

      <div className="px-4 sm:px-8 md:px-16 w-full">
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

      <div className="px-4 sm:px-8 md:px-16 w-full flex flex-col gap-4 sm:gap-6 md:gap-8">
        <h2 className="text-xl sm:text-2xl text-textPrimary text-center font-semibold">
          {t.agency.about.services.title}
        </h2>

        <ul className="list-disc list-inside text-base flex flex-col gap-1 sm:gap-2">
          {t.agency.about.services.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
