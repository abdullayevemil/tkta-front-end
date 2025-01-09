import StatisticsCard from "@/components/home/statistics-card";

export default function Statistics() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Statistika
      </h2>

      <ul className="px-16 flex flex-row gap-6 justify-evenly w-full">
        <li className="w-1/4">
          <StatisticsCard
            id={1}
            name="Ali təhsil müəssisələri"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={51}
          />
        </li>

        <li className="w-1/4">
          <StatisticsCard
            id={1}
            name="İbtidai və orta məktəblər"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={4427}
          />
        </li>

        <li className="w-1/4">
          <StatisticsCard
            id={1}
            name="Orta ixtisas təhsili müəssisələri"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={57}
          />
        </li>

        <li className="w-1/4">
          <StatisticsCard
            id={1}
            name="Peşə təhsili müəssisələr"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            number={89}
          />
        </li>
      </ul>
    </div>
  );
}
