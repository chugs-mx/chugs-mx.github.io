"use client"
import React from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {Cross, SearchIcon} from "lucide-react";
import { columns } from "@/components/inventories/columns";
import { translateCategory } from "@/components/inventories/translations";
import { Button } from "@/components/ui/button";
import Image from "next/image";



export function InventoryHeader({placeholder = "Buscar", categories, subcategories}: {placeholder?: string, categories: string[], subcategories: string[]}) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        params.set("page", '1');
        if (term.length > 0) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        replace(`${pathname}?${params.toString()}`)
    }

    const handleDebouncedSearch = useDebouncedCallback(handleSearch, 300);

    function handleSubcategoryChange(value: string) {
        const params = new URLSearchParams(searchParams);
        params.set("page", '1');
        if (value !== ""){
            params.set("subcategory", value);
        } else {
            params.delete("subcategory");
        }
        replace(`${pathname}?${params.toString()}`)
    }
    function handleCategoryChange(value: string) {
        const params = new URLSearchParams(searchParams);
        params.set("page", '1');
        if (value !== ""){
            params.set("category", value);
        } else {
            params.delete("category");
        }
        replace(`${pathname}?${params.toString()}`)
    }


    function handleFieldChange(value: string) {
        const params = new URLSearchParams(searchParams);
        params.set("page", '1');
        if (value !== ""){
            params.set("sort", value);
        } else {
            params.delete("sort");
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <>
            <div className="items-start p-2">
                <h1 className="text-6xl font-bold text-primary-foreground tracking-widest">INVENTARIO</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="flex items-center border border-primary-foreground px-3 py-2 rounded">
                    <SearchIcon className="fill-transparent w-5 h-5 mr-2 stroke-primary-foreground"/>
                    <input
                        type="text"
                        onChange={(e) => {
                            handleDebouncedSearch(e.target.value);
                        }}
                        placeholder={placeholder}
                        className="outline-none bg-transparent text-primary-foreground w-full "
                        defaultValue={searchParams.get("search") || ""}
                    />
                </div>

                <div className="flex gap-2 items-center relative">
                    {/*desde la api de forma cacheada*/}
                    <select
                        className="text-xl text-primary-foreground px-2 py-2"
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        <option value="">Categorías</option>
                        {categories.map( (category, i) =>
                            ( <option key={i} value={category}>{translateCategory(category)}</option>)
                        )
                        }
                    </select>
                    <select
                        className="text-xl text-primary-foreground px-2 py-2"
                        onChange={(e) =>  handleSubcategoryChange(e.target.value)}
                    >
                        <option value="">Subcategoría</option>
                        {subcategories.map( (subcategory, i) =>
                                ( <option key={i} value={subcategory}>{translateCategory(subcategory)}</option>)
                            )
                        }
                    </select>


                </div>

            </div>

            <div className="flex flex-wrap justify-between items-center w-full gap-2">
                <div className="flex gap-8">
                    <button className="items-center text-lg text-primary-foreground px-2 py-2 rounded-md flex items-center">
                        {/*<Image src={"/icons/add_icon.webp"} alt="add" width={20} height={20} className="inline-block mr-2"/>*/}
                        <Cross className="fill-primary-foreground w-5 h-5 mr-2 stroke-primary-foreground"/>
                        Agregar Nuevo
                    </button>

                    <select
                        className="text-xl text-primary-foreground"
                        onChange={(e) => handleFieldChange(e.target.value)}
                    >
                        <option value="">Ordenar por</option>
                        {columns.map((col, i) => (
                            <option key={i} value={col.field.toString()}>{col.label}</option>
                        ))}
                    </select>

                </div>




                <div className="text-xl font-bold text-primary-foreground mt-2 sm:mt-0">
                    28 enero - 28 febrero
                </div>
            </div>
        </>
    );
}