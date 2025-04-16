import React from 'react'
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Image from 'next/image';

const page = () => {
    const orders = [
        {
            icon: "/icons/clock.webp",
            alt: "Pendientes",
            amount: 2,
            text: "Órdenes pendientes"
        },
        {
            icon: "/icons/complete.webp",
            alt: "completas",
            amount: 2,
            text: "Órdenes completas"
        },
        {
            icon: "/icons/cancel.webp",
            alt: "canceladas",
            amount: 2,
            text: "Órdenes canceladas"
        },

    ]
  return (
    
    <div className='min-h-screen bg-[url(/home/background.webp)] bg-cover bg-no-repeat bg-center'>

    <div className=" bg-contain bg-center">
    <Topbar></Topbar>
    </div>


    <div className="flex flex-col md:flex-row justify-center gap-6 p-30 py-6 z-50">

        <div className="flex flex-col gap-4 w-full md:w-2/4"> 
            <div className="bg-primary-foreground text-background rounded-xl p-4 flex flex-row gap-4 text-center justify-around">
            {orders.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center">
                <Image src={item.icon} alt={item.alt} width={60} height={60} />
                <div className="flex justify-center gap-1 pt-2">
                  <p className="text-3xl font-bold text-right">{item.amount}</p>
                  <p className="text-sm  text-left">{item.text}</p>
                </div>
              </div>
            ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-primary-foreground rounded-xl text-background p-2">
                    <h1 className="font-semibold text-2xl">Ventas</h1>
                    <p className='font-extralight text-sm'>año 2024</p>
                    <Image src="/icons/sales_year.webp" alt="Ventas" width={60} height={60} />
                    <p className="text-sm text-green-500 flex justify-end">+16.0%</p>
                    <p className="italic flex justify-end">$1,345,832.00</p>
                </div>
                <div className="bg-primary-foreground rounded-xl text-background p-2">
                    <h1 className="font-semibold text-2xl">Ganancia total</h1>
                    <p className='font-extralight text-sm'>semana pasada</p>
                    <Image src="/icons/gains.webp" alt="Ventas" width={60} height={60} />
                    <p className="text-sm text-red-800 flex justify-end">-12.3%</p>
                    <p className="italic flex justify-end">$18,350.20</p>
                </div>
                <div className="bg-primary-foreground  rounded-xl text-background p-2">
                    <h1 className="font-semibold text-2xl">Total de ventas</h1>
                    <p className='font-extralight text-sm'>semana pasada</p>
                    <Image src="/icons/sales.webp" alt="Ventas" width={60} height={60} />
                    <p className="text-sm text-green-500 flex justify-end">+16.0%</p>
                    <p className="italic flex justify-end">$45,347.70</p>
                </div>
            </div>

        </div>


        <div className="bg-primary-foreground text-background rounded-xl p-4 py-10 w-full md:w-1/2 h-fit sm:order-1">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Ordenes recientes</h2>
                <div className="space-y-4 max-h-64 overflow-y-auto pr-6 scroll-beige">
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
                        <span className={`text-background px-11 py-1 rounded-full text-sm ${orden.color}`}>{orden.estado}</span>
                        <p className="text-sm">{orden.fecha}</p>
                    </div>
                    </div>
                ))}
                </div>
        </div>
    </div>

    
    <div className="flex flex-col md:flex-row justify-center gap-6 p-30 py-6 z-50">
    <div className="bg-primary-foreground text-background rounded-3xl px-1 py-8 flex flex-col md:flex-row justify-center items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-[2px]">
        <div className="flex items-center gap-2 px-4">
        <Image src="/icons/piechart.webp" alt="Ventas" width={30} height={30} />
        <p className="text-xl md:text-2xl font-semibold">275 Ventas</p>
        </div>
        <div className="flex items-center gap-2 px-4">
        <Image src="/icons/customers.webp" alt="Clientes" width={30} height={30} />
        <p className="text-xl md:text-2xl font-semibold">1478 Clientes</p>
        </div>
        <div className="flex items-center gap-2 px-4">
        <Image src="/icons/products.webp" alt="Productos" width={30} height={30} />
        <p className="text-xl md:text-2xl font-semibold">34 Productos</p>
        </div>
        <div className="flex items-center gap-2 px-4">
        <Image src="/icons/money.webp" alt="Ganancia" width={30} height={30} />
        <p className="text-xl md:text-2xl font-semibold">$9,456 Ganancia</p>
    </div>
        
    </div>
    
   
    </div>
    
   

    
    <Navbar></Navbar>
    </div>
    
  )
}

export default page
