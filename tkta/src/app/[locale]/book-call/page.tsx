"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import {
  format,
  addDays,
  startOfWeek,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";
import { toast } from "react-toastify";

const getWeekDays = () => {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 1 });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
};

const getTimeSlots = () => {
  return Array.from({ length: 9 }, (_, i) => {
    const date = setSeconds(setMinutes(setHours(new Date(), 9 + i), 0), 0);
    return date;
  });
};

const toLocalTime = (date: Date) => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60_000;
  const offset = 4 * 60 * 60 * 1000;
  return new Date(utc + offset);
};

export default function WeeklyMeetingCalendar() {
  const [selected, setSelected] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  const [fin, setFin] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const weekDays = getWeekDays();
  const timeSlots = getTimeSlots();
  const router = useRouter();
  const params = useParams();
  const locale = params?.lang || "az";

  useEffect(() => {
    const fetchBooked = async () => {
      const res = await fetch("/api/booked-slots");
      const data: string[] = await res.json();
      setBookedSlots(data);
    };
    fetchBooked();
  }, []);

  const nowUTC4 = toLocalTime(new Date());

  const handleSelect = (datetime: string) => {
    if (approved) return;
    if (bookedSlots.includes(datetime)) return;
    if (datetime <= nowUTC4.toISOString()) return;
    setSelected(datetime);
  };

  const handleModalApprove = async () => {
    if (!selected || !fin || !serialNumber) return;
    setLoading(true);
    try {
      const res = await fetch("/api/book-slot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fin, serialNumber, slot: selected }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Uığurlu qeydiyyat!");
        setApproved(true);
        setBookedSlots([...bookedSlots, selected]);
        setFin("");
        setSerialNumber("");
        router.push(`/${locale}/sima`);
      } else {
        alert(data.message);
      }
    } catch (err) {
      toast.error("Qeydiyyat zamanı xəta baş verdi.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Select a Meeting Slot</h1>

      <Card>
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-2">Time</TableHead>
                {weekDays.map((day) => (
                  <TableHead key={day.toISOString()} className="p-2">
                    {format(toLocalTime(day), "EEE dd/MM")}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {timeSlots.map((time) => (
                <TableRow key={time.getHours()}>
                  <TableCell className="p-2 font-medium">
                    {format(time, "HH:mm")}
                  </TableCell>
                  {weekDays.map((day) => {
                    const slot = new Date(day);
                    slot.setHours(time.getHours(), 0, 0, 0);
                    const slotLocal = toLocalTime(slot);
                    const slotStr = slotLocal.toISOString();
                    const isBooked = bookedSlots.includes(slotStr);
                    const isPast = slotLocal <= nowUTC4;
                    const isSelected = selected === slotStr;

                    return (
                      <TableCell
                        key={slotStr}
                        className={`p-2 text-center cursor-pointer transition-colors duration-200 rounded ${
                          isPast
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : isBooked
                            ? "bg-red-500/50 text-white"
                            : isSelected
                            ? "bg-green-500 text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                        onClick={() => !isPast && handleSelect(slotStr)}
                      >
                        {isPast
                          ? "Past"
                          : isBooked
                          ? "Booked"
                          : isSelected
                          ? "Selected"
                          : "Free"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Button disabled={!selected || approved || loading} onClick={handleModalApprove}>
        {approved ? "Approved" : loading ? "Approving..." : "Approve Selection"}
      </Button>
    </div>
  );
}
