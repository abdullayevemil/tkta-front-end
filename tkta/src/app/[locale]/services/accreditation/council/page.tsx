import Image from "next/image";

export default function Council() {
  return (
    <section className="w-full flex flex-col gap-16 items-cente">
      

      <h1 className="uppercase text-5xl text-center w-full px-16 pt-16">
        Akkredİtasİya şurası
      </h1>

      <div className="flex flex-col gap-4  px-16">
        <div>
          <span className="font-bold">Akkreditasiya şurası</span> -
          Akkreditasiya şurası akkreditasiyanın nəticələrinə dair yekun qərar
          qəbul etmək səlahiyyətinə malik olan orqandır. Akkreditasiya Şurasının
          fəaliyyəti Nazirlik tərəfindən təsdiq edilmiş Akkreditasiya Şurasının
          Əsasnaməsi ilə tənzimlənir. Akkreditasiya Şurasına Azərbaycan
          Respublikasının elm və təhsil naziri rəhbərlik edir. Şura ictimai
          əsaslarla fəaliyyət göstərir.
        </div>

        <h4 className="font-bold">
          Akkreditasiya Şurasının tərkibinə aşağıdakı şəxslər daxil edilirlər:
        </h4>

        <ol className="list-decimal pl-6">
          <li>
            yerli və xarici təhsil və ya müvafiq elmi tədqiqat sahələrinin
            mütəxəssisləri;
          </li>

          <li>işəgötürənlər;</li>

          <li>təhsilalanlar və ya qanuni nümayəndələr;</li>

          <li>
            tabeliyində təhsil müəssisəsi olan nazirliklərin, təşkilatların və
            idarələrin nümayəndələri;
          </li>

          <li>qeyri-hökumət təşkilatlarının nümayəndələri.</li>
        </ol>

        <Image
          src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737959769/accreditation/k6e9y0pdzof2sfjdtnhq.png"
          alt="accreditation structure"
          className="w-full rounded shadow"
          width={900}
          height={900}
        />

        <h4 className="font-bold">
          Akkreditasiya Şurası akkreditasiya prosesində göstərdiyi fəaliyyətlər
        </h4>

        <div>
          Akkreditasiya Şurası akkreditasiya prosesində aşağıdakı hərəkətləri
          yerinə yetirir:
        </div>

        <ul className="list-disc pl-6">
          <li>
            Akkreditasiya Komissiyası tərəfindən tərtib edilmiş Yekun
            Hesabatların müzakirəsini həyata keçirir;
          </li>

          <li>
            Tələb olunduğu halda Yekun Hesabatların müzakirəsinə təhsil
            müəssisəsini, Akkreditasiya Komissiyasını, eləcə də müstəqil
            ekspertləri dəvət edir;
          </li>

          <li>
            müzakirənin nəticələrindən asılı olaraq akkreditasiya
            qiymətləndirməsinə dair müvafiq qərarlar verir;
          </li>

          <li>
            təqdim edilmiş Yekun Hesabat və ona əlavə olunan sənədlər müvafiq
            qərarın verilməsində yetərli olmadıqda onu Agentliyə geri qaytarır.
          </li>
        </ul>
      </div>
    </section>
  );
}
