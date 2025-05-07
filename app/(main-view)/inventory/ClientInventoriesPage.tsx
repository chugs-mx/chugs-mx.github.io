'use client'

import React, { useEffect, useState } from "react";
import DataTable from "@/components/data-table";
import { columns } from "@/components/inventories/columns";
import {Inventory} from "@/types/Inventory";
import {InventoryHeader} from "@/app/(main-view)/inventory/InventoryHeader";


const ClientInventoriesPage = () => {
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const pageCount = Math.ceil(inventories.length / pageSize);

  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inventories`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setInventories(data);
      }catch (error) {
        console.error("Error al cargar inventarios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInventories();
  }, []);

  if (loading) return <div className="p-4">Cargando inventario...</div>;

  return (
    <div className="p-2 px-6 min-w-full">
      <InventoryHeader subcategories={[]} categories={[]}/>
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

