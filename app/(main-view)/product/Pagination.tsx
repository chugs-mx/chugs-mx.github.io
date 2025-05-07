"use client"
import React from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";

interface PaginationProps {
    pageMeta: { number: number; size: number; totalElements: number; totalPages: number }
}

export function Pagination({pageMeta}: PaginationProps) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const { number, totalPages, size} = pageMeta;
    function handlePageSizeChange(value: string) {
        const params = new URLSearchParams(searchParams)
        params.set("page", '1')
        params.set("size", value)
        replace(`${pathname}?${params.toString()}`)
    }

    function handleFirstPage() {
        const params = new URLSearchParams(searchParams)
        params.set("page", "1")
        replace(`${pathname}?${params.toString()}`)
    }

    function handleLastPage() { 
        const params = new URLSearchParams(searchParams)
        params.set("page", totalPages.toString())
        replace(`${pathname}?${params.toString()}`)
    }

    function handleNextPage(){
        const params = new URLSearchParams(searchParams)
        params.set("page", (number + 2).toString())
        replace(`${pathname}?${params.toString()}`)
    }

    function handlePreviousPage(){
        const params = new URLSearchParams(searchParams)
        params.set("page", (number).toString())
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex justify-end items-center p-4 bg-transparent">
            <div>
                <label className="mr-2 text-sm text-primary-foreground">Filas por página:</label>
                <select
                    onChange={(e) => handlePageSizeChange(e.target.value)}
                    defaultValue={size}
                    className="border rounded-md px-2 py-1 text-sm text-primary-foreground border-primary-foreground">
                    {[3, 5, 10, 20].map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>
            <button onClick={() => (handleFirstPage())}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50 cursor-pointer">
                        <Image src="/icons/start_table.svg" alt="First" width={20} height={20} />
            </button>

            <button onClick={() => handlePreviousPage()}
                    disabled={number <= 0 || totalPages <= 0}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50 cursor-pointer">
                        <Image src="/icons/previous_table.svg" alt="First" width={20} height={20} />
            </button>

            <span className="text-primary-foreground text-sm">
                Página {number+1} de {totalPages}
            </span>

            <button onClick={() => handleNextPage()}
                    disabled={ number >= totalPages - 1 || totalPages <= 0}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50 cursor-pointer">
                        <Image src="/icons/next_table.svg" alt="First" width={20} height={20} />
            </button>


            <button onClick={() => handleLastPage()}
                    className="px-3 py-2 text-primary-foreground disabled:opacity-50 cursor-pointer">
                        <Image src="/icons/end_table.svg" alt="First" width={20} height={20} />
            </button>
        </div>
    )
}