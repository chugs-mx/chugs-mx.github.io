"use client";
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {Pencil, StickyNote} from "lucide-react";
import {twMerge} from "tailwind-merge";
import {cn} from "@/lib/utils"
import {Inventory} from "@/types/Inventory";
import {DialogCloseButton} from "@/app/(main-view)/inventory/DialogCloseButton";

export interface Column<T>{
    label: string;
    field: keyof T | string;
    isNumeric?: boolean;
    render?: (value: T[keyof T], row:T) => React.ReactNode;
}

interface DataTableProps<T> {
    items?: T[];
    columns?: Column<T>[]
}

const DataTable = <T,>({items,columns}: DataTableProps<T>): React.ReactElement => {
    return (
        
            <div className="rounded-md bg-[#fff3e6] shadow-sm overflow-hidden min-h-40">
                <Table className="overflow-x-auto">
                    <TableHeader className="bg-primary-foreground text-background ">
                        {/* Renderizar los encabezados de la tabla */}
                        <TableRow>
                            {/* Renderizar los encabezados de la tabla */}
                            {columns?.map((column, i) => (
                                <TableHead
                                    key={i}
                                    className="text-background font-bold text-xl text-center px-4 py-3">{column.label}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {items?.map((row, i) => (
                            <TableRow
                                key={i}
                                className={2 % 2 === 0 ? "bg-[#ffe0cc]" : "bg-[#fff3e6]"}
                            >
                                {columns?.map((column, j) => {
                                    const value = (row as any)[column.field];
                                        return (
                                            <TableCell key={j}
                                                className= {cn(
                                                    column.isNumeric ? "text-right" : "text-left",
                                                    "text-primary-foreground font-medium px-4 py-1 text-base"
                                                )}
                                                >
                                                {column.render ? column.render(value, row) : value}    
                                            </TableCell>
                                        );
                                    })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
    );
};

export default DataTable;