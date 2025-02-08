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

const types = [
  {
    value: "default",
    label: "əyri xətlər",
  },
  {
    value: "straight",
    label: "düz xətlər",
  },
  {
    value: "step",
    label: "addım xətlər",
  },
  {
    value: "smoothstep",
    label: "hamar addım xətlər",
  },
];

interface EdgeSelectorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function EdgeSelector({ value, setValue }: EdgeSelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[170] justify-between"
        >
          {types.find((t) => t.value === value)?.label}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-18 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {types.map((types, index) => (
                <CommandItem
                  key={index}
                  value={types.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);

                    setOpen(false);
                  }}
                >
                  {types.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === types.value ? "opacity-100" : "opacity-0"
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
