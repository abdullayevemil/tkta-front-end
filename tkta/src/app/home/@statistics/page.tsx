import { StatisticsAreaChart } from "@/components/home/statistics-area-chart";
import { StatisticsBarChart } from "@/components/home/statistics-bar-chart";
import { ChartConfig } from "@/components/ui/chart";
import { HigherEducation } from "@/types/higher-education";

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
    label: "Peşə təhsili müəssisələr ",
    color: "var(--primary-color)",
  },
} satisfies ChartConfig;

export default function Statistics() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Statistika
      </h2>

      <ul className="px-16 flex flex-row gap-6 justify-evenly w-full">
        <li className="w-1/4">
          <StatisticsAreaChart
            chartConfig={higherEducationConfig}
            chartData={higherEducationData}
            step={1}
          />
        </li>

        <li className="w-1/4">
          <StatisticsBarChart
            chartConfig={schoolConfig}
            chartData={schoolData}
            step={10}
          />
        </li>

        <li className="w-1/4">
          <StatisticsAreaChart
            chartConfig={middleEducationConfig}
            chartData={middleEducationData}
            step={1}
          />
        </li>

        <li className="w-1/4">
        <StatisticsBarChart
            chartConfig={majorEducationConfig}
            chartData={majorEducationData}
            step={5}
          />
        </li>
      </ul>
    </div>
  );
}
