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
import AzIcon from "@/assets/icons/flags/AZ.svg";
import EnIcon from "@/assets/icons/flags/GB.svg";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const icons = [AzIcon, EnIcon];

const languages = [
  {
    value: "0",
    label: "az-AZ",
  },
  {
    value: "1",
    label: "en-EN",
  },
];

export function LanguageSelector() {
  const router = useRouter();

  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split("/");

    segments[1] = newLocale;

    const newPath = segments.join("/");

    router.push(newPath);
  };

  useEffect(() => {
    const segments = pathname.split("/");

    setValue(segments[1] === "az" ? 0 : 1);
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-18 justify-between"
        >
          {React.createElement(icons[value], {
            width: "1%",
            height: "36px",
          })}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-18 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((languages, index) => (
                <CommandItem
                  key={languages.value}
                  value={languages.value}
                  onSelect={(currentValue) => {
                    setValue(
                      Number.parseInt(currentValue) === value
                        ? 0
                        : Number.parseInt(currentValue)
                    );
                    handleLocaleChange(
                      Number.parseInt(currentValue) === 0 ? "az" : "en"
                    );
                    setOpen(false);
                  }}
                >
                  {React.createElement(icons[index], {
                    width: "36px",
                    height: "36px",
                  })}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === Number.parseInt(languages.value)
                        ? "opacity-100"
                        : "opacity-0"
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
