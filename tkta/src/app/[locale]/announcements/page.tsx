import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Briefcase, FileText, Users } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Announcements({ params }: Props) {
  const { locale } = await params;

  const t = getTranslation(locale);

  const cards = [
    {
      title: t.header.navigation.announcements.vacancies,
      href: `/${locale}/announcements/vacancies`,
      icon: <Briefcase className="w-6 h-6" />,
      description: t.header.navigation.announcements.vacanciesDescription,
    },
    {
      title: t.header.navigation.announcements.documentSubmission,
      href: `/${locale}/announcements/qualification-recognition`,
      icon: <FileText className="w-6 h-6" />,
      description:
        t.header.navigation.announcements.documentSubmissionDescription,
    },
    {
      title: t.header.navigation.announcements.collaborationOpportunities,
      href: `/${locale}/announcements/cooperation`,
      icon: <Users className="w-6 h-6" />,
      description:
        t.header.navigation.announcements.collaborationOpportunitiesDescription,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-textPrimary text-center mb-12">
        {t.header.navigation.announcements.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link key={card.title} href={card.href}>
            <Card
              className="border border-black rounded-lg p-8 aspect-square 
                             flex flex-col items-center justify-center 
                             transition-colors hover:border-textPrimary hover:text-textPrimary cursor-pointer"
            >
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
