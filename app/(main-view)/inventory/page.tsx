'use client'

import React from "react";
import Image from 'next/image';
import {auth} from "@/auth";
import { redirect } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/inventories/columns";
import { useState, useEffect } from "react";

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
  ];

const page = async () => {
    const session = await auth()
    if (!session || session?.user?.role !== "ADMIN") {
        redirect("/login");
    }

    return (
        <div className="p-2 px-6 lg:flex-row">
            <InventoryHeader/>
            <InventoryTable />
        </div>
    )
}

const InventoryTable = () => {
    const [inventories, setInventories] = useState<Inventory[]>(mockInventories);
    const [loading, setLoading] = useState<boolean>(false); 
  
    
    useEffect(() => {
      setInventories(mockInventories);  
    }, []);
  
    return <DataTable columns={columns} data={inventories} />;
  };


export function InventoryHeader() {
    return (
        <>
        <div className="items-start p-2">
            <h1 className="text-6xl font-bold text-primary-foreground">PRODUCTOS</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="flex items-center border border-primary-foreground px-3 py-2 rounded">
            <Image
                src="/nav/user_icon.webp"
                alt="buscar"
                width={20}
                height={20}
                className="mr-2"
            />
            <input
                type="text"
                placeholder="Búsqueda rápida"
                className="outline-none bg-transparent text-primary-foreground w-100 "
            />
            </div>

            <div className="flex gap-2 items-center relative">
                <select className="text-primary-foreground px-2 py-2">
                    <option>Categorías</option>
                    <option>Hamburguesas</option>
                    <option>Bebidas</option>
                </select>
                
                <select className="text-primary-foreground px-1 py-2">
                    <option>Mesero</option>
                    <option>Alejandro</option>
                    <option>Juan</option>
                </select>  
            </div>

        </div>

        <div className="flex flex-wrap justify-between items-center w-full gap-2">
            <div className="flex gap-2 items-center">
                <button className="items-center text-primary-foreground px-2 py-2 rounded-md">
                    <Image src={"/icons/add_icon.webp"} alt="add" width={20} height={20} className="inline-block mr-2
                    "/>
                    Agregar Nuevo
                </button>
                <button className="bg-primary-foreground text-background p-2 h-10 rounded-md items-center">
                    Filtros
                </button>  
            </div>      
            <div className="text-xl text-primary-foreground mt-2 sm:mt-0">
                28 enero - 28 febrero
            </div>
        </div>
    </>);
}

export default page
