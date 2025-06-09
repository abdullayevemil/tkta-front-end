"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import AzerbaijanyFlag from "@/assets/icons/flags/AZ.svg";

export type IdCardData = {
  documentType: string;
  pin: string;
  documentNumber: string;
  personAz: {
    name: string;
    surname: string;
    patronymic: string;
  };
  gender: string;
  birthDate: string;
  birthAddress: string;
  eventDate: string;
  expDate: string;
  isActive: boolean;
  nationality: string;
  maritalStatus: string;
  bloodType: string;
  militaryStatus: string;
  image: string;
  organisation: {
    legacyId: number;
    name: string;
  };
  addressDetail: {
    address: string;
    flat: string | null;
    house: string;
    village: string | null;
    settlement: string;
    regionName: string;
    street: string;
  };
  eyeColor: string;
  height: string;
  activationDate: string;
};

type Props = {
  data: IdCardData;
};

export default function IdCard({ data }: Props) {
  const base64Image = `data:image/jpeg;base64,${data.image}`;

  return (
    <div className="group w-[680px] h-[340px] [perspective:1000px] mx-auto">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="h-full w-full bg-gradient-to-br from-[#f0e9e1] to-[#d6cdc3] border rounded-lg shadow-inner p-4">
            <CardTitle className="w-full">
              <div className="flex gap-2 justify-center">
                <AzerbaijanyFlag width={24} height={24} />
                <h2 className="text-base font-semibold text-gray-800 text-center">
                  AZƏRBAYCAN RESPUBLİKASI — REPUBLIC OF AZERBAIJAN
                </h2>
              </div>

              <h3 className="text-xs w-full text-center text-gray-600 mb-2">
                Şəxsiyyət vəsiqəsi – Identity Card
              </h3>
            </CardTitle>
            <CardContent className="w-full p-3 text-[10px] font-sans">
              <div className="w-full flex justify-between items-start">
                <div className="w-full flex gap-4 w-full">
                  <Image
                    src={base64Image}
                    alt="User ID"
                    width={185}
                    height={228}
                    className="rounded border mb-1"
                  />

                  <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-bold text-orange-950 text-xs">
                        Soyadı/Surname
                      </div>

                      <div className="text-xs">{data.personAz.surname}</div>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <div className="font-bold text-orange-950 text-xs">
                        Adı/Given Name
                      </div>

                      <div className="text-xs">{data.personAz.name}</div>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <div className="font-bold text-orange-950 text-xs">
                        Atasının adı/Patronymic
                      </div>

                      <div className="text-xs">{data.personAz.patronymic}</div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-orange-950 text-xs">
                          Cinsi/Sex
                        </div>

                        <div className="text-xs">{data.gender === "MALE" ? "K/M" : "Q/F"}</div>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-orange-950 text-xs">
                          Vətəndaşlığı/Nationality
                        </div>

                        <div className="text-xs">{data.nationality}</div>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-orange-950 text-xs">
                          Doğulduğu tarix/Date of Birth
                        </div>

                        <div className="text-xs">{data.birthDate}</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-orange-950 text-xs">
                          Vəsiqənin nömrəsi/Card No
                        </div>

                        <div className="text-xs">{data.documentNumber}</div>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-orange-950 text-xs">
                          İdentifikasiya nömrəsi / Personal No
                        </div>

                        <div className="text-xs">{data.pin}</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-orange-950 text-xs">
                          Etibarlılıq müddəti / Date of Expiry
                        </div>

                        <div className="text-xs">{data.expDate}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="h-full bg-[#f5f3f0] border rounded-lg shadow-inner">
            <CardContent className="p-3 text-[10px] font-sans">
              <p className="text-[7px] text-gray-600 mb-2 leading-tight">
                Şəxsiyyət vəsiqəsinin etibarlılıq müddəti bitdikdə, vətəndaşın
                soyadı, adı, atasının adı dəyişdikdə və ya şəxsiyyət vəsiqəsi, o
                cümlədən onun elektron daşıyıcısı (çip) yararsız hala düşdükdə,
                vətəndaş şəxsiyyət vəsiqəsinin dəyişdirilməsi üçün vəsiqəni
                verən orqana müraciət etməlidir.
              </p>
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <div className="w-10 h-10 bg-yellow-300 border mx-auto" />
                  <p className="mt-2 text-[9px]">
                    DOĞULDUĞU YER / PLACE OF BIRTH
                  </p>
                  <p className="text-[8px]">{data.birthAddress}</p>

                  <p className="mt-1 text-[9px]">QAN QRUPU / BLOOD GROUP</p>
                  <p className="text-[8px]">{data.bloodType}</p>
                </div>
                <div className="w-1/3 text-center text-[7px] italic text-gray-500">
                  {/* Placeholder for map */}
                  <div className="w-24 h-20 bg-gradient-to-br from-gray-300 to-white mx-auto border rounded-full" />
                </div>
                <div className="w-1/3">
                  <p className="text-[8px] font-semibold text-right">
                    MAŞINLA OXUNA BİLƏN HİSSƏ
                  </p>
                  <div className="w-full h-8 bg-gray-200 border mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
