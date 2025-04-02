'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   

      <nav className='fixed top-35 left-0 h-full bg-primary shadow-2xl flex flex-col items-start py-6 px-6 rounded-tr-lg transition-all duration-300 ${isOpen ? "w-20" : "w-40"}'>
          <div className='flex flex-col gap-6'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src={"/home/burguerBar_icon.webp"} alt="Menu" width={30} height={30} />
          </button>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/home_icon.webp"} alt="Home" width={30} height={30}/>
              {isOpen && <span className='text-primary-foreground'>Home</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/order_icon.webp"} alt="Órdenes" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground'>Órdenes</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/tables_icon.webp"} alt="Órdenes" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground'>Mesas</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/add_products_icon.webp"} alt="Agregar" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground'>Agregar</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/inventory_icon.webp"} alt="Inventario" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground'>Inventario</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/metrics_icon.webp"} alt="Métricas" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground'>Métricas</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/home/settings_icon.webp"} alt="Configuración" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground'>Configuración</span>}
            </div>
          </div>
      </nav>
  )
}

export default Navbar
