'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnClass = isOpen ? "fixed top-4 left-0 z-0 md:hidden bg-primary p-3 shadow-black/0 shadow-xl" : "fixed top-4 left-0 z-0 md:hidden bg-primary p-3 shadow-black/50 shadow-xl rounded-br-lg" ;

  return (
    <>
    <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`${btnClass}`}
      >
        <Image src={"/nav/burguerBar_icon.webp"} alt="Menu" width={40} height={40}/>
    </button>


      <nav  className={`fixed top-15 left-0 h-full bg-primary  shadow-black/50 shadow-xl flex flex-col items-start py-6 px-6 rounded-tr-lg transition-all duration-300 
          ${isOpen ? "w-50" : "w-0 hidden "} md:w-25 md:flex md:top-35`}>
          
          <div className='flex flex-col gap-6'>
         
            <div className={`flex items-center gap-2 cursor-pointer  ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/home_icon.webp"} alt="Home" width={30} height={30}/>
              {isOpen && <span className='text-primary-foreground md:hidden'>Home</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/order_icon.webp"} alt="Órdenes" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Órdenes</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/tables_icon.webp"} alt="Órdenes" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Mesas</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/add_products_icon.webp"} alt="Agregar" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Agregar</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/inventory_icon.webp"} alt="Inventario" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Inventario</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/metrics_icon.webp"} alt="Métricas" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Métricas</span>}
            </div>

            <div className={`flex items-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/settings_icon.webp"} alt="Configuración" width={30} height={30} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Configuración</span>}
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar
