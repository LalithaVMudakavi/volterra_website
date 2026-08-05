"use client";

import * as React from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchableComboboxProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  searchPlaceholder?: string;
}

export function SearchableCombobox({
  value,
  onChange,
  options,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
}: SearchableComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filtered = options.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
  <Button
  type="button"
  variant="outline"
  role="combobox"
  aria-expanded={open}
  className="
    relative

    h-12
    w-full

    rounded-2xl
    border
    border-slate-200

    bg-slate-50

    pl-12
    pr-10

    text-left
    text-[15px]
    font-normal
    text-slate-700

    shadow-none

    transition-all
    duration-300

    hover:border-slate-300
    hover:bg-white

    focus:border-lime-500
    focus:bg-white
    focus:ring-4
    focus:ring-lime-500/10
  "
>
       <div className="flex items-center gap-3">

    <MapPin
        className="h-4 w-4 text-slate-400"
    />

    <span className="truncate">
        {value || placeholder}
    </span>

</div>

          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[var(--anchor-width)] p-0 rounded-2xl"
      >
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={searchPlaceholder}
            value={search}
            onValueChange={setSearch}
          />

          <CommandList>
            <CommandEmpty>
              <button
                type="button"
                className="
                  w-full
                  px-3
                  py-2
                  text-left
                  text-sm
                  text-lime-600
                  hover:bg-lime-50
                "
                onClick={() => {
                  if (search.trim()) {
                    onChange(search.trim());
                  }

                  setOpen(false);
                }}
              >
                Use "{search}"
              </button>
            </CommandEmpty>

            <CommandGroup>
              {filtered.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      value === item
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}