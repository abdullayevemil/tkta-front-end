"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

const options: number[] = [10, 20, 30, 40];

type ItemsPerPageSelectorProps = {
  pageSize: number;
  pageIndex: number;
  onChange: ({
    pageSize,
    pageIndex,
  }: {
    pageSize: number;
    pageIndex: number;
  }) => void;
};

export default function ItemsPerPageSelector({
  pageSize,
  onChange,
}: ItemsPerPageSelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-40">
        <Button variant="outline">
          <span>Items per page: {pageSize}</span>

          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        {options.map((option) => (
          <div
            key={option}
            className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded-md"
            onClick={() => {
              setOpen(false);

              onChange({ pageSize: option, pageIndex: 0 });
            }}
          >
            <span>{option}</span>
            {pageSize === option && <Check className="w-4 h-4" />}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
