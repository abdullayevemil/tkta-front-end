import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileText, BookOpen, CheckCircle, Users, Activity } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Services({ params }: Props) {
  const { locale } = await params;

  const t = getTranslation(locale);

  const cards = [
    {
      title: t.header.navigation.services.foreignQualificationsRecognition,
      href: `/${locale}/services/qualifications-recognition`,
      icon: <BookOpen className="w-6 h-6" />,
      description:
        t.header.navigation.services
          .foreignQualificationsRecognitionDescription,
    },
    {
      title: t.header.navigation.services.nonInformalaeducationRecognition,
      href: `/${locale}/services/education-recognition`,
      icon: <Users className="w-6 h-6" />,
      description:
        t.header.navigation.services
          .nonInformalaeducationRecognitionDescription,
    },
    {
      title: t.header.navigation.services.accreditation,
      href: `/${locale}/services/accreditation`,
      icon: <CheckCircle className="w-6 h-6" />,
      description: t.header.navigation.services.accreditationDescription,
    },
    {
      title: t.header.navigation.services.training,
      href: `/${locale}/services/training-methodology`,
      icon: <FileText className="w-6 h-6" />,
      description: t.header.navigation.services.trainingDescription,
    },
    {
      title: t.header.navigation.services.analysis,
      href: `/${locale}/services/analysis`,
      icon: <Activity className="w-6 h-6" />,
      description: t.header.navigation.services.analysisDescription,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-textPrimary text-center mb-12">
        {t.header.navigation.services.title}
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
