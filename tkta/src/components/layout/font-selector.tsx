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

const languages = [
  {
    value: "14",
    label: "A",
  },
  {
    value: "16",
    label: "A",
  },
  {
    value: "18",
    label: "A",
  },
];

export function FontSelector() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState("16");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-18 justify-between"
          style={{fontSize: Number.parseInt(value)}}
        >
          A
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-18 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((languages) => (
                <CommandItem
                  key={languages.value}
                  value={languages.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "16" : currentValue);
                    setOpen(false);
                  }}
                  style={{fontSize: Number.parseInt(languages.value)}}
                >
                  {languages.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === languages.value ? "opacity-100" : "opacity-0"
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
