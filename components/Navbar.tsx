'use client'
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


      <nav  className={`fixed top-15 left-0 h-full bg-primary shadow-[0_10px_45px_rgba(0,0,0,0.9)] flex flex-col items-center pt-[100px] transition-all duration-300 rounded-tr-[200px]
          ${isOpen ? "w-50" : "w-0 hidden "} md:w-25 md:flex md:top-35`}
            style={{
              borderRadius: "0% 100% 0% 100% / 100% 10% 90% 0% "
            }}
      >
          
          <div className='flex flex-col gap-6 w-5/6'>
         
            <div className={`flex justify-center gap-2 cursor-pointer  ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/home_icon.webp"} alt="Home" width={50} height={50}/>
              {isOpen && <span className='text-primary-foreground md:hidden'>Home</span>}
            </div>

            <div className={`flex justify-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/order_icon.webp"} alt="Órdenes" width={50} height={50} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Órdenes</span>}
            </div>

            <div className={`flex justify-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/tables_icon.webp"} alt="Órdenes" width={50} height={50} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Mesas</span>}
            </div>

            <div className={`flex justify-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/add_products_icon.webp"} alt="Agregar" width={50} height={50} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Agregar</span>}
            </div>

            <div className={`flex justify-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/inventory_icon.webp"} alt="Inventario" width={50} height={50} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Inventario</span>}
            </div>

            <div className={`flex justify-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/metrics_icon.webp"} alt="Métricas" width={50} height={50} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Métricas</span>}
            </div>

            <div className={`flex justify-center gap-2 cursor-pointer ${isOpen ? "border-b border-primary-foreground pb-2" : ""}`}>
              <Image src={"/nav/settings_icon.webp"} alt="Configuración" width={50} height={50} />
              {isOpen && <span className='text-primary-foreground md:hidden'>Configuración</span>}
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar
