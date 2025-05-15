"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Cross, SearchIcon } from "lucide-react";
import { columns } from "@/components/product/columns";
import { translateCategory } from "@/components/product/translations";
import { AddProductModal } from "@/app/(main-view)/product/AddProductModal";

export function ProductHeader({
  placeholder = "Buscar",
  categories,
}: {
  placeholder?: string;
  categories: string[];
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term.length > 0) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleDebouncedSearch = useDebouncedCallback(handleSearch, 300);

  function handleCategoryChange(value: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value !== "") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleFieldChange(value: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value !== "") {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className="items-start p-2">
        <h1 className="text-6xl font-bold text-primary-foreground tracking-widest">
          PRODUCTOS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="flex items-center border border-primary-foreground px-3 py-2 rounded">
          <SearchIcon className="fill-transparent w-5 h-5 mr-2 stroke-primary-foreground" />
          <input
            type="text"
            onChange={(e) => {
              handleDebouncedSearch(e.target.value);
            }}
            placeholder={placeholder}
            className="outline-none bg-transparent text-primary-foreground w-full"
            defaultValue={searchParams.get("search") || ""}
          />
        </div>

        <div className="flex gap-2 items-center relative">
          <select
            className="text-xl text-primary-foreground px-2 py-2"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Categorías</option>
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {translateCategory(category)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center w-full gap-2">
        <div className="flex gap-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="items-center text-lg text-primary-foreground px-2 py-2 rounded-md flex"
          >
            <Cross className="fill-primary-foreground w-5 h-5 mr-2 stroke-primary-foreground" />
            Agregar Nuevo
          </button>

          <select
            className="text-xl text-primary-foreground"
            onChange={(e) => handleFieldChange(e.target.value)}
          >
            <option value="">Ordenar por</option>
            {columns
              .filter((col) => col.label !== "Acciones")
              .map((col, i) => (
                <option key={i} value={col.field.toString()}>
                  {col.label}
                </option>
              ))}
          </select>
        </div>
      </div>
      <AddProductModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        //onCategoryChange={}
      />
    </>
  );
}
