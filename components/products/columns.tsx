"use client";

import { Column } from "@/components/data-table";
import { Product } from "@/types/Product";
import { Pencil, StickyNote } from "lucide-react";
import { Trash2 } from "lucide-react";

export const columns: Column<Product>[] = [
  {
    label: "Nombre",
    field: "name",
  },
  {
    label: "Descripción",
    field: "description",
  },
  {
    label: "Categoría",
    field: "category",
    render: (value) => {
      if (typeof value === "object" && value !== null && "name" in value) {
        const name = (value as { name: string }).name;
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
      return "Sin categoría";
    },
  },
  {
    label: "Precio unitario",
    field: "price",
    isNumeric: true,
    render: (value) => `$${value}`,
  },
  {
    label: "Acciones",
    field: "actions",
    render: (_, row) => (
      <div className="flex justify-evenly items-center">
        <button className="cursor-pointer">
          <Pencil className="stroke-primary-foreground" />
        </button>
        <button className="">
          <Trash2 className="stroke-primary-foreground" />
        </button>
      </div>
    ),
  },
];
