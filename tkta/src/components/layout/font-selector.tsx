"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFontSize } from "@/context/font-size-context";

const languages = [
  { value: "14px", label: "A" },
  { value: "16px", label: "A" },
  { value: "18px", label: "A" },
];

export function FontSelector() {
  const [open, setOpen] = React.useState(false);
  const { fontSize, setFontSize } = useFontSize();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-18 h-10 px-3 text-base sm:w-20 sm:h-10 sm:text-base 
                     max-sm:w-14 max-sm:h-8 max-sm:px-2 max-sm:text-sm"
          style={{ fontSize }}
        >
          A
          <ChevronsUpDown className="opacity-50 w-4 h-4 max-sm:w-3 max-sm:h-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-20 max-sm:w-14">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setFontSize(currentValue);
                    setOpen(false);
                  }}
                  className="max-sm:text-sm"
                  style={{ fontSize: Number.parseInt(lang.value) }}
                >
                  {lang.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      fontSize === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}