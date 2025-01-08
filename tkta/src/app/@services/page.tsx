import ServiceCard from "@/components/home/service-card";

export default function Services() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center">
        Xidmətlər
      </h2>

      <ul className="px-[112px] flex flex-row gap-6 justify-evenly">
        <li>
          <ServiceCard
            name="Akkreditasiya"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            url="/services/accreditation"
          />
        </li>

        <li>
          <ServiceCard
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            name="Kvalifikasiyaların tanınması"
            url="/services/qualifications-recognition"
          />
        </li>
      </ul>
    </div>
  );
}
