"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

type Option = {
  label: string;
  value: string;
};

export default function IngredientSelector() {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [openMulti, setOpen] = useState(false);

  const options: Option[] = [
    { label: "Lechuga", value: "Lechuga" },
    { label: "Jitomate", value: "Jitomate" },
    { label: "Cebolla", value: "Cebolla" },
    { label: "Mostaza", value: "Mostaza" },
    { label: "Catsup", value: "Catsup" },
  ];

  const filteredOptions = useMemo(
    () =>
      options.filter(
        (opt) =>
          opt.label.toLowerCase().includes(query.toLowerCase()) &&
          !selected.includes(opt.value)
      ),
    [query, selected]
  );

  const handleSelect = (value: string) => {
    setSelected((prev) => {
      const newSelected = [...prev, value];
      console.log("Seleccionados:", newSelected);
      return newSelected;
    });
    setQuery("");
    setOpen(false);
    console.log("Popover cerrado");
  };

  const handleRemove = (value: string) => {
    setSelected(selected.filter((v) => v !== value));
  };

  return (
    <div>
      <Popover open={openMulti} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className="flex flex-wrap items-center gap-1 pl-4 border rounded-md cursor-text bg-background"
            onClick={() => setOpen(true)}
          >
            {selected.map((val) => {
              const label = options.find((opt) => opt.value === val)?.label;
              return (
                <Badge
                  key={val}
                  variant="secondary"
                  className="flex items-center"
                >
                  {label}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(val);
                    }}
                  />
                </Badge>
              );
            })}
            <Input
              className="border-none p-0 outline-none shadow-none focus-visible:ring-0 flex-1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escribe para buscar..."
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[300px]">
          <Command>
            <CommandGroup>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    //onMouseDown={(e) => e.preventDefault()}
                    onSelect={() => handleSelect(opt.value)}
                  >
                    {opt.label}
                  </CommandItem>
                ))
              ) : (
                <div className="p-2 text-sm text-muted-foreground">
                  No hay coincidencias
                </div>
              )}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
