import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  FileText,
  DollarSign,
  Monitor,
  CheckCircle,
  BookOpen,
  Globe,
} from "lucide-react";
import { getTranslation } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Reports({ params }: Props) {
  const { locale } = await params;

  const t = getTranslation(locale);

  const cards = [
    {
      title: t.header.navigation.reports.annualReports,
      href: `/${locale}/reports/annual`,
      icon: <FileText className="w-6 h-6" />,
      description: t.header.navigation.reports.annualReportsDescription,
    },
    {
      title: t.header.navigation.reports.financialReports,
      href: `/${locale}/reports/financial`,
      icon: <DollarSign className="w-6 h-6" />,
      description: t.header.navigation.reports.financialReportsDescription,
    },
    {
      title: t.header.navigation.reports.monitoringReports,
      href: `/${locale}/reports/accreditation/monitoring`,
      icon: <Monitor className="w-6 h-6" />,
      description: t.header.navigation.reports.monitoringReportsDescription,
    },
    {
      title: t.header.navigation.reports.atmAccreditationReports,
      href: `/${locale}/reports/accreditation/atm`,
      icon: <CheckCircle className="w-6 h-6" />,
      description: t.header.navigation.reports.atmAccreditationReports,
    },
    {
      title: t.header.navigation.reports.professionalEducationReports,
      href: `/${locale}/reports/accreditation/professional`,
      icon: <BookOpen className="w-6 h-6" />,
      description: t.header.navigation.reports.professionalEducationReports,
    },
    {
      title: t.header.navigation.reports.internationalAccreditationReports,
      href: `/${locale}/reports/accreditation/international`,
      icon: <Globe className="w-6 h-6" />,
      description:
        t.header.navigation.reports.internationalAccreditationReports,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-textPrimary text-center mb-12">
        {t.header.navigation.reports.title}
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
                  <h2 className="text-xl font-medium text-center">
                    {card.title}
                  </h2>
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
