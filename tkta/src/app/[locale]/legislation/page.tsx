import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, FileText, Briefcase, CheckCircle, Clipboard, Layers, Archive, File } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Legislation({ params }: Props) {
  const { locale } = await params;

  const t = getTranslation(locale);

  const cards = [
    {
      title: t.header.navigation.laws.laws,
      href: `/${locale}/legislation/laws`,
      icon: <BookOpen className="w-6 h-6" />,
      description: t.header.navigation.laws.lawsDescription,
    },
    {
      title: t.header.navigation.laws.prezidentLaws,
      href: `/${locale}/legislation/president-requirements`,
      icon: <FileText className="w-6 h-6" />,
      description: t.header.navigation.laws.prezidentLawsDescription,
    },
    {
      title: t.header.navigation.laws.cabinetDecisions,
      href: `/${locale}/legislation/cabinet_of_ministers`,
      icon: <Briefcase className="w-6 h-6" />,
      description: t.header.navigation.laws.cabinetDecisionsDescription,
    },
    {
      title: t.header.navigation.laws.ministryDecisions,
      href: `/${locale}/legislation/education`,
      icon: <Clipboard className="w-6 h-6" />,
      description: t.header.navigation.laws.ministryDecisionsDescription,
    },
    {
      title: t.header.navigation.laws.accreditationCriteria,
      href: `/${locale}/legislation/accreditation-parameters`,
      icon: <CheckCircle className="w-6 h-6" />,
      description: t.header.navigation.laws.accreditationCriteriaDescription,
    },
    {
      title: t.header.navigation.laws.accreditationRules,
      href: `/${locale}/legislation/accreditation-regulations`,
      icon: <Layers className="w-6 h-6" />,
      description: t.header.navigation.laws.accreditationRulesDescription,
    },
    {
      title: t.header.navigation.laws.agencyCharter,
      href: `/${locale}/legislation/agency-regulations`,
      icon: <Archive className="w-6 h-6" />,
      description: t.header.navigation.laws.agencyCharterDescription,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-textPrimary text-center mb-12">
        {t.header.navigation.laws.title}
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