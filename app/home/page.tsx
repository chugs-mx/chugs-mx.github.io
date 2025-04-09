import React from 'react'
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Image from 'next/image';

const page = () => {
  return (
    <>
    <div className="min-h-screen bg-[url(/home/background.webp)] bg-contain bg-center">
    <Topbar></Topbar>
    </div>
    <div className="min-h-screen flex flex-col  justify-center items-center bg-[url(/home/background.webp)] bg-contain bg-center">
    <div className="bg-primary-foreground text-background  rounded-xl p-4 mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <Image src="/icons/clock.webp" alt="Pendientes" width={40} height={40} />
          <p className="text-2xl font-bold mt-2">2</p>
          <p className="text-sm">Órdenes pendientes</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/icons/complete.webp" alt="Completas" width={40} height={40} />
          <p className="text-2xl font-bold mt-2">18</p>
          <p className="text-sm">Órdenes completas</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/icons/cancel.webp" alt="Canceladas" width={40} height={40} />
          <p className="text-2xl font-bold mt-2">7</p>
          <p className="text-sm">Órdenes canceladas</p>
        </div>
      </div>


    <div className="bg-primary-foreground text-background rounded-xl p-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Ordenes recientes</h2>
        <div className="space-y-4">
        {[
            { producto: "Hamburguesa", mesa: "Mesa 3", fecha: "27.12.2024 - 14:58:07", estado: "Listo", color: "bg-green-600" },
            { producto: "Papas", mesa: "Mesa 14", fecha: "27.12.2024 - 14:58:07", estado: "En espera", color: "bg-lime-500" },
            { producto: "Malteada", mesa: "Mesa 1", fecha: "27.12.2024 - 14:58:07", estado: "En espera", color: "bg-lime-500" },
          ].map((orden, index) => (
            <div key={index} className="border-t pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-4">
                <Image src={`/icons/${orden.producto.toLowerCase()}.webp`} alt={orden.producto} width={40} height={40} />
                <div>
                  <p className="text-lg font-semibold">{orden.producto}</p>
                  <p className="italic">{orden.mesa}</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <span className={`text-background px-3 py-1 rounded-full text-sm ${orden.color}`}>{orden.estado}</span>
                <p className="text-sm">{orden.fecha}</p>
              </div>
            </div>
          ))}
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-primary-foreground  text-background rounded-xl p-4">
          <h1 className="font-semibold text-lg">Ventas año</h1>
          <p>2024</p>
          <p className="text-sm text-green-500">+16.0%</p>
          <p className="text-2xl font-bold">$1,345,832.00</p>
        </div>
        <div className="bg-primary-foreground  text-background rounded-xl p-4">
          <h1 className="font-semibold text-lg">Ganancia total</h1>
          <p>semana pasada</p>
          <p className="text-sm text-red-800">-12.3%</p>
          <p className="text-2xl font-bold">$18,350.20</p>
        </div>
        <div className="bg-primary-foreground  text-background rounded-xl p-4">
          <h1 className="font-semibold text-lg">Total de ventas</h1>
          <p>semana pasada</p>
          <p className="text-sm text-green-500">+16.0%</p>
          <p className="text-2xl font-bold">$45,347.70</p>
        </div>
      </div>

    <div className="bg-primary-foreground text-background rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
        <div className="flex items-center gap-2 px-4">
          <Image src="/icons/piechart.webp" alt="Ventas" width={30} height={30} />
          <p className="text-lg font-semibold">275 Ventas</p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <Image src="/icons/customers.webp" alt="Clientes" width={30} height={30} />
          <p className="text-lg font-semibold">1478 Clientes</p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <Image src="/icons/products.webp" alt="Productos" width={30} height={30} />
          <p className="text-lg font-semibold">34 Productos</p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <Image src="/icons/money.webp" alt="Ganancia" width={30} height={30} />
          <p className="text-lg font-semibold">$9,456 Ganancia</p>
        </div>
      </div>

    </div>
   
    <Navbar></Navbar></>
  )
}

export default page
