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
import {Trash2, Pencil, StickyNote} from "lucide-react";
import {twMerge} from "tailwind-merge";
import {cn} from "@/lib/utils"
import {Inventory} from "@/components/inventories/columns";

const columns = [
    {label: "Nombre", field: "name"},
    {label: "Descripción", field: "description"},
    {label: "Categoría", field: "inventoryCategory"},
    {label: "Subcategoría", field: "subcategory"},
    {label: "Cantidad", field: "quantity", isNumeric: true},
    // {label: "unidad de medida", field: "unitMeasure"},
    {label: "Precio unitario", field: "unitPrice", isNumeric: true},
    {label: "Alta", field: "entryDate"},
    {label: "Caducidad", field: "expiryDate"},
    { label: "Acciones", field: "actions"}
]

interface DataTableProps {
    items?: Object[]
}

const inventoryEnums = {
    CLUTTER: "Embutidos",
    REFRIGERATED: "Refrigerado",
    CLEANING: "Limpieza",
    DISPOSABLE: "Desechable",
    FROZEN: "Congelado",

    INGREDIENT: "Ingrediente",
    PRODUCT_VARIANT: "Variante de producto",
    PRODUCT: "Producto",
    MEAT: "Carne",
    VEGETABLES: "Verduras",
    DRINKS: "Bebidas"
}
function translateCategory(category: string) {
    return inventoryEnums[category as keyof typeof inventoryEnums] || category;
}

function translateMeasureUnit(unitMeasure: string) {
    switch (unitMeasure) {
        case "LTR":
            return "L";
        case "KG":
            return "KG";
        case "UNIT":
            return "U";
        default:
            return unitMeasure;
    }
}

const DataTable = ({items}: DataTableProps) => {
    return (
        <>
            <div className="rounded-md bg-[#fff3e6] shadow-sm overflow-hidden">
                <Table className="overflow-x-auto">
                    <TableHeader className="bg-primary-foreground text-background ">
                        {/* Renderizar los encabezados de la tabla */}
                        <TableRow>
                            {/* Renderizar los encabezados de la tabla */}
                            {columns.map((column, i) => (
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
                                {columns.map((column, j) => {
                                    if (column.field == "actions") {
                                        return (
                                            <TableCell key={j}>
                                                <div className="flex justify-evenly items-center">
                                                    <button className="">
                                                        <Pencil className="stroke-primary-foreground"/>
                                                    </button>
                                                    {/*<button className="">*/}
                                                    {/*    <StickyNote className="stroke-primary-foreground"/>*/}
                                                    {/*</button>*/}
                                                    <button className="">
                                                        <Trash2 className="stroke-primary-foreground"/>
                                                    </button>
                                                </div>
                                            </TableCell>
                                        )
                                    }

                                    if (column.field === "quantity") {
                                        return (
                                            <TableCell key={j} className="text-right px-4 py-1 text-base ">
                                                <span className={cn("text-primary-foreground", column.isNumeric ? "font-bold" : "")}>
                                                    {row.quantity} {translateMeasureUnit(row.unitMeasure)}
                                                </span>
                                            </TableCell>
                                        )
                                    }
                                    if (column.field === "unitPrice") {
                                        return (
                                            <TableCell key={j} className="text-right px-4 py-1 text-base ">
                                                <span className={cn("text-primary-foreground", column.isNumeric ? "font-bold" : "")}>
                                                    ${row.unitPrice}
                                                </span>
                                            </TableCell>
                                        )
                                    }

                                    if (column.field === "inventoryCategory" || column.field === "subcategory") {
                                        return (
                                            <TableCell key={j} className="text-left text-primary-foreground font-medium px-4 py-1 text-base">
                                                <span>{translateCategory(row[column.field])}</span>
                                            </TableCell>
                                        )

                                    }

                                    if (column.field === "entryDate" || column.field === "expiryDate") {
                                        return (
                                            <TableCell key={j} className="text-right text-primary-foreground font-medium px-4 py-1 text-base">
                                                <span>{new Date(row[column.field]).toLocaleDateString("es-MX")}</span>
                                            </TableCell>
                                        )
                                    }

                                    return (
                                        <TableCell key={j} className="text-left text-primary-foreground font-medium px-4 py-1 text-base">
                                            <span>{row[column.field]}</span>
                                        </TableCell>
                                    )
                                })
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>


            <div className="flex justify-between items-center p-4 bg-transparent">
                <div>
                    <label className="mr-2 text-sm text-primary-foreground">Filas por página:</label>
                    <select
                        className="border rounded-md px-2 py-1 text-sm text-primary-foreground border-primary-foreground">
                        {[3, 5, 10, 20].map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <button onClick={() => (console.log("primera"))} disabled={true}
                        className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                    ⏮ Primera
                </button>

                <button onClick={() => console.log("anterior")}
                        disabled={true}
                        className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                    Anterior
                </button>

                <span className="text-primary-foreground text-sm">
          Página {2} de {10}
        </span>

                <button onClick={() => console.log("siguiente")}
                        disabled={false}
                        className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                    Siguiente
                </button>

                <button onClick={() => console.log("ultima")} disabled={false}
                        className="px-3 py-2 text-primary-foreground disabled:opacity-50">
                    Última ⏭
                </button>
            </div>
        </>
    );
};

export default DataTable;