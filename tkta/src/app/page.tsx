import ServiceCard from "@/components/home/service-card";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <section className="w-ful relative">
        <video className="w-full" autoPlay={true} muted loop preload="none">
          <source
            src="https://miras.blob.core.windows.net/multimedia/Let s Talk About Education.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="bg-blackTransparent text-5xl absolute top-0 left-0 w-full h-full flex items-center pl-[160px] text-white">
          TKTA - Home page
        </div>
      </section>

      <section className="px-[112px] flex flex-row gap-6 justify-evenly">
        <ServiceCard name="Akkreditasiya" iconIndex={0} url="/services/accreditation"/>

        <ServiceCard name="Kvalifikasiyaların tanınması" iconIndex={1} url="/services/qualifications-recognition"/>
      </section>
    </main>
  );
}
