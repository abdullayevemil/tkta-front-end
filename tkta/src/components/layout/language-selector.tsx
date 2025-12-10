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
  { value: "0", label: "az-AZ" },
  { value: "1", label: "en-EN" },
];

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  useEffect(() => {
    const segments = pathname.split("/");
    setValue(segments[1] === "az" ? 0 : 1);
  }, [pathname]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-20 h-10 px-3 sm:w-20 sm:h-10
                     max-sm:w-14 max-sm:h-8 max-sm:px-2"
        >
          {React.createElement(icons[value], {
            width: "36px",
            height: "36px",
            className: "max-sm:w-5 max-sm:h-5",
          })}

          <ChevronsUpDown className="opacity-50 w-4 h-4 max-sm:w-3 max-sm:h-3" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-20 max-sm:w-14">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((lang, index) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    const newVal = Number.parseInt(currentValue);
                    setValue(newVal);
                    handleLocaleChange(newVal === 0 ? "az" : "en");
                    setOpen(false);
                  }}
                  className="max-sm:text-sm"
                >
                  {React.createElement(icons[index], {
                    width: "36px",
                    height: "36px",
                    className: "max-sm:w-5 max-sm:h-5",
                  })}

                  <Check
                    className={cn(
                      "ml-auto",
                      value === Number.parseInt(lang.value)
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