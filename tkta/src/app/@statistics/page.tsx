import ServiceCard from "@/components/home/service-card";
import StatisticsCard from "@/components/home/statistics-card";

export default function Services() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center">
        Statistika
      </h2>

      <ul className="px-[112px] flex flex-row gap-6 justify-evenly w-full">
        <li className="w-1/4">
          <StatisticsCard
            name="Ali təhsil müəssisələri"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={51}
          />
        </li>

        <li className="w-1/4">
          <StatisticsCard
            name="İbtidai və orta məktəblər"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={4427}
          />
        </li>

        <li className="w-1/4">
          <StatisticsCard
            name="Orta ixtisas təhsili müəssisələri"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={57}
          />
        </li>

        <li className="w-1/4">
          <StatisticsCard
            name="Peşə təhsili müəssisələr"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={89}
          />
        </li>
      </ul>
    </div>
  );
}
