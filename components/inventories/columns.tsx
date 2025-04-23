import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"

export type Inventory = {
  producto: string
  cantidad: number
  ventasBrutas: number
  descuento: number
  ingresos: number
  ganancias: number
  acciones?: string
}

export const columns: ColumnDef<Inventory>[] = [
  {
    accessorKey: "producto",
    header: "Productos",
  },
  {
    accessorKey: "cantidad",
    header: "Cantidad",
  },
  {
    accessorKey: "ventasBrutas",
    header: "Ventas brutas",
  },
  {
    accessorKey: "descuento",
    header: "Descuento",
  },
  {
    accessorKey: "ingresos",
    header: "Ingresos",
  },
  {
    accessorKey: "ganancias",
    header: "Ganancias",
  },
  {
    accessorKey: "acciones",
    header: "Acciones",
    cell: ({ row }) => (
      <div className="flex items-center justify-between p-2">
        <button className="">
            <Image 
                src={"/icons/delete_icon.svg"} 
                alt="Delete icon" 
                width={20} 
                height={20}
            />
        </button>
        <button className="">
            <Image
                src="/icons/edit_icon.svg"
                alt="edit"
                width={20}
                height={20}
                className="inline-block mr-2"
            />
        </button>
      </div>
    ),
  },
]
