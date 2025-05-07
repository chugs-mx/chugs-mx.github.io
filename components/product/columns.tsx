'use client'

import { translateCategory, translateMeasureUnit } from "@/components/inventories/translations";
import { Column } from "@/components/data-table";
import { Product } from "@/types/product_template";
import { Pencil, StickyNote } from "lucide-react";
import { Trash2 } from "lucide-react";

export const columns: Column<Product>[] = [
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
          field: "productCategory",
          render: (value) => translateCategory(value as string)
        },
        {
          label: "Precio unitario",
          field: "price",
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
