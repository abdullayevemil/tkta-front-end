import { StatisticsAreaChart } from "@/components/home/statistics-area-chart";
import { StatisticsBarChart } from "@/components/home/statistics-bar-chart";
import { ChartConfig } from "@/components/ui/chart";
import { HigherEducation } from "@/types/higher-education";
import Link from "next/link";

const higherEducationData: HigherEducation[] = [
  { year: "2020", value: 52 },
  { year: "2021", value: 52 },
  { year: "2022", value: 51 },
  { year: "2023", value: 51 },
  { year: "2024", value: 51 },
];

const higherEducationConfig = {
  value: {
    label: "Ali təhsil müəssisələri ",
    color: "var(--primary-color)",
  },
} satisfies ChartConfig;

const schoolData: HigherEducation[] = [
  { year: "2020", value: 4400 },
  { year: "2021", value: 4397 },
  { year: "2022", value: 4394 },
  { year: "2023", value: 4399 },
  { year: "2024", value: 4388 },
];

const schoolConfig = {
  value: {
    label: "İbtidai və orta məktəblər ",
    color: "var(--primary-color)",
  },
} satisfies ChartConfig;

const middleEducationData = [
  { year: "2020", value: 59 },
  { year: "2021", value: 61 },
  { year: "2022", value: 59 },
  { year: "2023", value: 59 },
  { year: "2024", value: 59 },
];

const middleEducationConfig = {
  value: {
    label: "Orta ixtisas təhsili müəssisələri ",
    color: "var(--primary-color)",
  },
} satisfies ChartConfig;

const majorEducationData = [
  { year: "2020", value: 110 },
  { year: "2021", value: 103 },
  { year: "2022", value: 99 },
  { year: "2023", value: 99 },
  { year: "2024", value: 92 },
];

const majorEducationConfig = {
  value: {
    label: "Peşə təhsili müəssisələri",
    color: "var(--primary-color)",
  },
} satisfies ChartConfig;

export default function Statistics() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-2xl sm:text-3xl md:text-4xl w-full justify-center text-center uppercase px-4">
        Statİstİka
      </h2>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-4 sm:gap-6">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-evenly w-full">
          <li className="w-full sm:w-1/2 lg:w-1/4">
            <StatisticsAreaChart
              chartConfig={higherEducationConfig}
              chartData={higherEducationData}
              step={1}
            />
          </li>

          <li className="w-full sm:w-1/2 lg:w-1/4">
            <StatisticsBarChart
              chartConfig={schoolConfig}
              chartData={schoolData}
              step={10}
            />
          </li>

          <li className="w-full sm:w-1/2 lg:w-1/4">
            <StatisticsAreaChart
              chartConfig={middleEducationConfig}
              chartData={middleEducationData}
              step={1}
            />
          </li>

          <li className="w-full sm:w-1/2 lg:w-1/4">
            <StatisticsBarChart
              chartConfig={majorEducationConfig}
              chartData={majorEducationData}
              step={5}
            />
          </li>
        </ul>

        <div className="text-black/[0.5] text-xs sm:text-sm w-full text-center sm:text-right flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
          <span className="flex flex-col sm:flex-row gap-1 sm:gap-2 w-full sm:w-fit">
            <span>Mənbə:</span>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-center sm:text-left text-textPrimary hover:cursor-pointer italic hover:underline"
              href="https://www.stat.gov.az/source/education/#"
            >
              Azərbaycan Respublikasının Dövlət Statistika Komitəsi
            </Link>
          </span>

          <span className="w-full sm:w-fit">Son yenilənmə: 18.09.2024</span>
        </div>
      </div>
    </div>
  );
}
