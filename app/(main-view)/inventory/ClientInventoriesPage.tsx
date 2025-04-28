'use client'

import React, {useState} from "react";
import {DataTable} from "@/components/ui/data-table";
import {columns} from "@/components/inventories/columns";
import {InventoryHeader} from "@/app/(main-view)/inventory/InventoryHeader";

interface Inventory {
  producto: string;
  cantidad: number;
  ventasBrutas: number;
  descuento: number;
  ingresos: number;
  ganancias: number;
}

const mockInventories: Inventory[] = [ 
    {
        producto: "Hamburguesa Clásica",
        cantidad: 30,
        ventasBrutas: 3000,
        descuento: 300,
        ingresos: 2700,
        ganancias: 1000,
      },
      {
        producto: "Papas Fritas",
        cantidad: 50,
        ventasBrutas: 1500,
        descuento: 100,
        ingresos: 1400,
        ganancias: 700,
      },
      {
        producto: "Refresco",
        cantidad: 80,
        ventasBrutas: 2000,
        descuento: 200,
        ingresos: 1800,
        ganancias: 600,
      },
      {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
      },
      {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        },
        {
          producto: "Refresco",
          cantidad: 80,
          ventasBrutas: 2000,
          descuento: 200,
          ingresos: 1800,
          ganancias: 600,
        }
    ];

const ClientInventoriesPage = () => {
  const [inventories, setInventories] = useState<Inventory[]>(mockInventories);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const pageCount = Math.ceil(inventories.length / pageSize);

  return (
    <div className="p-2 px-6">
      <InventoryHeader />
      <DataTable
        columns={columns}
        data={inventories}
        page={page}
        pageSize={pageSize}
        pageCount={pageCount}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default ClientInventoriesPage;

