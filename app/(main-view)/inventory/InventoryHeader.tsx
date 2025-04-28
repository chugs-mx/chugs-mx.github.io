"use client"
import Image from "next/image";
import React from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function InventoryHeader({placeholder = "Buscar"}: {placeholder?: string}) {
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

    return (
        <>
            <div className="items-start p-2">
                <h1 className="text-6xl font-bold text-primary-foreground">PRODUCTOS</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="flex items-center border border-primary-foreground px-3 py-2 rounded">
                    <Image
                        src="/nav/user_icon.webp"
                        alt="buscar"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <input
                        type="text"
                        onChange={(e) => {
                            handleDebouncedSearch(e.target.value);
                        }}
                        placeholder={placeholder}
                        className="outline-none bg-transparent text-primary-foreground w-100 "
                        defaultValue={searchParams.get("search") || ""}
                    />
                </div>

                <div className="flex gap-2 items-center relative">
                    <select className="text-primary-foreground px-2 py-2">
                        <option>Categorías</option>
                        <option>Hamburguesas</option>
                        <option>Bebidas</option>
                    </select>

                    <select className="text-primary-foreground px-1 py-2">
                        <option>Mesero</option>
                        <option>Alejandro</option>
                        <option>Juan</option>
                    </select>
                </div>

            </div>

            <div className="flex flex-wrap justify-between items-center w-full gap-2">
                <div className="flex gap-2 items-center">
                    <button className="items-center text-primary-foreground px-2 py-2 rounded-md">
                        <Image src={"/icons/add_icon.webp"} alt="add" width={20} height={20} className="inline-block mr-2
                    "/>
                        Agregar Nuevo
                    </button>
                    <button className="bg-primary-foreground text-background p-2 h-10 rounded-md items-center">
                        Filtros
                    </button>
                </div>
                <div className="text-xl text-primary-foreground mt-2 sm:mt-0">
                    28 enero - 28 febrero
                </div>
            </div>
        </>
    );
}