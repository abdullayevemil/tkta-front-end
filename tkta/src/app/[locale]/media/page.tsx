import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileText, Mic, Megaphone, Image, Video, HelpCircle } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Media({ params }: Props) {
  const { locale } = await params;

  const t = getTranslation(locale);

  const cards = [
    {
      title: t.header.navigation.media.news,
      href: `/${locale}/media/news`,
      icon: <FileText className="w-6 h-6" />,
      description: t.header.navigation.media.newsDescription,
    },
    {
      title: t.header.navigation.media.interviews,
      href: `/${locale}/media/interviews`,
      icon: <Mic className="w-6 h-6" />,
      description: t.header.navigation.media.interviewsDescription,
    },
    {
      title: t.header.navigation.media.statements,
      href: `/${locale}/media/disclosures`,
      icon: <Megaphone className="w-6 h-6" />,
      description: t.header.navigation.media.statementsDescription,
    },
    {
      title: t.header.navigation.media.multimedia,
      href: `/${locale}/media/multimedia`,
      icon: <Image className="w-6 h-6" />,
      description: t.header.navigation.media.multimediaDescription,
    },
    {
      title: t.header.navigation.media.videoTutorials,
      href: `/${locale}/media/video-instructions`,
      icon: <Video className="w-6 h-6" />,
      description: t.header.navigation.media.videoTutorialsDescription,
    },
    {
      title: t.header.navigation.media.faq,
      href: `/${locale}/media/faq`,
      icon: <HelpCircle className="w-6 h-6" />,
      description: t.header.navigation.media.faqDescription,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-textPrimary text-center mb-12">
        {t.header.navigation.media.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link key={card.title} href={card.href}>
            <Card className="border border-black rounded-lg p-8 aspect-square 
                             flex flex-col items-center justify-center 
                             transition-colors hover:border-textPrimary hover:text-textPrimary cursor-pointer">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  {card.icon}
                  <h2 className="text-xl font-medium text-center">{card.title}</h2>
                </div>
                <p className="text-center">{card.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}