"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { format, addDays, startOfWeek, setHours, setMinutes, setSeconds } from "date-fns";

// Generate a 7-day range starting from today
const getWeekDays = () => {
  const start = startOfWeek(new Date(), { weekStartsOn: 1 }); // Monday start
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
};

// Define time slots per day (example: 9AM to 5PM, every hour)
const getTimeSlots = () => {
  return Array.from({ length: 9 }, (_, i) => {
    const date = setSeconds(setMinutes(setHours(new Date(), 9 + i), 0), 0);
    return date;
  });
};

export default function WeeklyMeetingCalendar() {
  const [selected, setSelected] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  const weekDays = getWeekDays();
  const timeSlots = getTimeSlots();

  useEffect(() => {
    setBookedSlots([
      "2023-10-23T10:00:00.000Z",
      "2023-10-24T11:00:00.000Z",
      "2023-10-25T14:00:00.000Z",
    ]);
  }, []);

  const handleSelect = (datetime: string) => {
    if (approved) return; // Don't allow changes after approval
    setSelected(datetime);
  };

  const handleApprove = async () => {
    if (!selected) return;
    setLoading(true);
    try {
      // TODO: Submit booking and create calendar event
      // await fetch('/api/book-slot', { method: 'POST', body: JSON.stringify({ slot: selected }) });
      setApproved(true);
    } catch (err) {
      console.error("Booking failed", err);
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
                    {format(day, "EEE dd/MM")}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((time) => (
                <TableRow key={time.getHours()}>
                  <TableCell className="p-2 font-medium">{format(time, "HH:mm")}</TableCell>
                  {weekDays.map((day) => {
                    const slot = new Date(day);
                    slot.setHours(time.getHours(), 0, 0, 0);
                    const slotStr = slot.toISOString();
                    const isBooked = bookedSlots.includes(slotStr);
                    const isSelected = selected === slotStr;

                    return (
                      <TableCell
                        key={slotStr}
                        className={`p-2 text-center cursor-pointer transition-colors duration-200 rounded ${
                          isBooked
                            ? "bg-red-500 text-white"
                            : isSelected
                            ? "bg-green-500 text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                        onClick={() => handleSelect(slotStr)}
                      >
                        {isBooked ? "Booked" : isSelected ? "Selected" : "Free"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button
          disabled={!selected || approved || loading}
          onClick={handleApprove}
        >
          {approved ? "Approved" : loading ? "Approving..." : "Approve Selection"}
        </Button>
      </div>
    </div>
  );
}
