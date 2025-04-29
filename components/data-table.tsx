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
import {twMerge} from "tailwind-merge";
import { cn } from "@/lib/utils"

const columns = [
    {label:"nombre", field: "name"},
    {label:"descripción", field: "description"},
    {label:"categoría", field: "inventoryCategory"},
    {label:"subcategoría", field: "subcategory"},
    {label:"cantidad", field: "quantity", isNumeric: true},
    {label:"unidad de medida", field: "unitMeasure"},
    {label:"precio unitario", field: "unitPrice", isNumeric: true},
    {label:"fecha de registro", field: "entryDate"},
    {label:"fecha de caducidad", field: "expiryDate"},
    {label:"acciones", field: "actions", cell: ({row, i}: {row:any, i:number}) => {
            return (
                <TableCell key={i}>
                    <div>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Editar</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
                    </div>
                </TableCell>
            )
        }
    },
]

const rows =
    [
        {
            "description": "Fresh ground beef for burgers",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-04-26T19:28:41",
            "inventoryCategory": "REFRIGERATED",
            "name": "Ground Beef",
            "quantity": 25.0,
            "subcategory": "MEAT",
            "unitMeasure": "KG",
            "unitPrice": 8.5
        },
        {
            "description": "Sesame burger buns",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-05-01T19:28:41",
            "inventoryCategory": "CLUTTER",
            "name": "Burger Buns",
            "quantity": 200.0,
            "subcategory": "PRODUCT_VARIANT",
            "unitMeasure": "UNIT",
            "unitPrice": 0.3
        },
        {
            "description": "Sliced cheddar cheese",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-05-06T19:28:41",
            "inventoryCategory": "REFRIGERATED",
            "name": "Cheddar Cheese Slices",
            "quantity": 5.0,
            "subcategory": "INGREDIENT",
            "unitMeasure": "KG",
            "unitPrice": 12.0
        },
        {
            "description": "Fresh iceberg lettuce",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-04-24T19:28:41",
            "inventoryCategory": "REFRIGERATED",
            "name": "Lettuce",
            "quantity": 10.0,
            "subcategory": "VEGETABLES",
            "unitMeasure": "KG",
            "unitPrice": 3.0
        },
        {
            "description": "Ripe tomatoes for burgers",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-04-25T19:28:41",
            "inventoryCategory": "REFRIGERATED",
            "name": "Tomatoes",
            "quantity": 15.0,
            "subcategory": "VEGETABLES",
            "unitMeasure": "KG",
            "unitPrice": 2.5
        },
        {
            "description": "Frozen French fries",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-05-21T19:28:41",
            "inventoryCategory": "FROZEN",
            "name": "Fries",
            "quantity": 20.0,
            "subcategory": "PRODUCT",
            "unitMeasure": "KG",
            "unitPrice": 2.0
        },
        {
            "description": "Tomato ketchup bottles",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-07-20T19:28:41",
            "inventoryCategory": "CLUTTER",
            "name": "Ketchup",
            "quantity": 5.0,
            "subcategory": "INGREDIENT",
            "unitMeasure": "LTR",
            "unitPrice": 1.5
        },
        {
            "description": "Assorted soda cans",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2025-10-18T19:28:41",
            "inventoryCategory": "CLUTTER",
            "name": "Soda Cans",
            "quantity": 120.0,
            "subcategory": "DRINKS",
            "unitMeasure": "UNIT",
            "unitPrice": 0.8
        },
        {
            "description": "Multipurpose cleaning spray",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2026-04-21T19:28:41",
            "inventoryCategory": "CLEANING",
            "name": "Cleaning Spray",
            "quantity": 10.0,
            "subcategory": "PRODUCT",
            "unitMeasure": "LTR",
            "unitPrice": 3.5
        },
        {
            "description": "Paper napkins pack",
            "entryDate": "2025-04-21T19:28:41",
            "expiryDate": "2026-04-21T19:28:41",
            "inventoryCategory": "DISPOSABLE",
            "name": "Napkins Pack",
            "quantity": 500.0,
            "subcategory": "PRODUCT_VARIANT",
            "unitMeasure": "UNIT",
            "unitPrice": 0.05
        }
    ]

const DataTable = () => {
    return (
        <>
            <div className="flow-root rounded-md border bg-[#fff3e6] shadow-sm overflow-hidden">
                <Table>
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
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                className={2 % 2 === 0 ? "bg-[#ffe0cc]" : "bg-[#fff3e6]"}
                            >
                                {columns.map((column, j) =>
                                    {
                                        if (column.field == "actions") {
                                            return column.cell(row, j)
                                        }

                                        return (
                                            <TableCell key={j} className="text-center px-4 py-1 text-sm">
                                                <span>{row[column.field]}</span>
                                            </TableCell>
                                        )
                                    } )
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
                <button onClick={()=> (console.log("primera")) }  disabled={true}
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