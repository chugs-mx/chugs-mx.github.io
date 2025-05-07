 'use client'

import { translateCategory, translateMeasureUnit } from "@/components/inventories/translations";
import { Column } from "@/components/data-table";
import { Inventory } from "@/types/Inventory";
import { Pencil, StickyNote } from "lucide-react";
import { Trash2 } from "lucide-react";

export const columns: Column<Inventory>[] = [
        {
          label: "Nombre",
          field: "name"
        },
        {
            label: "Descripción",
            field: "description"
        },
        {
          label: "Categoría",
          field: "inventoryCategory",
          render: (value) => translateCategory(value as string)
        },
        {
          label: "Subcategoría",
          field: "subcategory",
          render: (value) => translateCategory(value as string)
        },
        {
          label: "Registro",
          field: "entryDate",
          render: (value) =>
            new Date(value as string).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })
        },
        {
          label: "Caducidad",
          field: "expiryDate",
          render: (value) =>
            new Date(value as string).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })
        },
        {
          label: "Cantidad",
          field: "quantity",
          render: (_, row) => `${row.quantity} ${translateMeasureUnit(row.unitMeasure)}`
        },
        {
          label: "Precio unitario",
          field: "unitPrice",
          isNumeric: true,
          render: (value) => `$${value}`
        },
        {
            label: "Acciones",
            field: "actions",
            render: (_, row) => (
                <div className="flex justify-evenly items-center">
                    <button className="cursor-pointer">
                        <Pencil className="stroke-primary-foreground"/>
                    </button>
                    <button className="">
                        <Trash2 className="stroke-primary-foreground"/>
                        </button>
                </div>
            )
        }
      ];
