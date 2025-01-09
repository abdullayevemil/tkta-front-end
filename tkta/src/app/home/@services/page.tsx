import ServiceCard from "@/components/home/service-card";

export default function Services() {
  return (
    <div className="flex flex-col gap-20 w-full justify-center">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Xidmətlər
      </h2>

      <ul className="px-16 flex flex-row gap-6 justify-evenly">
        <li>
          <ServiceCard
            id={1}
            name="Akkreditasiya"
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            url="/services/accreditation"
          />
        </li>

        <li>
          <ServiceCard
            id={2}
            iconUrl="https://tkta.edu.az/files/Akkreditasiya%20v%C9%99%20Lisenziya%202.svg"
            name="Kvalifikasiyaların tanınması"
            url="/services/qualifications-recognition"
          />
        </li>
      </ul>
    </div>
  );
}
