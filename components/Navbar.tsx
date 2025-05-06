'use client'
import React from 'react'
import Image from 'next/image'
import {useState} from "react";
import Link from 'next/link'

const menuItems = [
    {
        iconSrc: "/nav/home_icon.webp",
        alt: "Home",
        text: "Home",
        href: "/home"
    },
    {
        iconSrc: "/nav/order_icon.webp",
        alt: "Órdenes",
        text: "Órdenes",
         href: "/orders"
    },
    {
        iconSrc: "/nav/tables_icon.webp",
        alt: "Órdenes",
        text: "Mesas",
        href: "/tables"
    },
    {
        iconSrc: "/nav/add_products_icon.webp",
        alt: "Agregar",
        text: "Agregar",
        href: "/product"
    },
    {
        iconSrc: "/nav/inventory_icon.webp",
        alt: "Inventario",
        text: "Inventario",
        href: "/inventory"
    },
    {
        iconSrc: "/nav/metrics_icon.webp",
        alt: "Métricas",
        text: "Métricas",
        href: "/metrics"
        
    },
    {
        iconSrc: "/nav/settings_icon.webp",
        alt: "Configuración",
        text: "Configuración",
        href: "/settings"
    },
];

interface MenuItemsProps {
    isOpen?: boolean
}

function MenuItems({isOpen}: MenuItemsProps) {
    return <>
        {
            menuItems.map((item, i) => (
                <Link 
                    href={item.href}   
                    key={i}
                    className={`flex items-center md:justify-center gap-2 cursor-pointer  `}>
                    <Image src={item.iconSrc} alt={item.alt} width={50} height={50}/>
                    {isOpen && <span className='text-primary-foreground md:hidden'>{item.text}</span>}
                </Link>
            ))
        }
    </>;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const btnClass = isOpen ? "fixed top-4 left-0 z-0 md:hidden bg-primary p-3 shadow-black/0 shadow-xl" : "fixed top-4 left-0 z-0 md:hidden bg-primary p-3 shadow-black/50 shadow-xl rounded-br-lg";

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${btnClass} z-40 rounded-tr-sm`}
            >
                <Image src={"/nav/burguerBar_icon.webp"} alt="Menu" width={40} height={40}/>
            </button>


            <nav className={`fixed top-15 left-0 h-full bg-primary shadow-black/50 shadow-xl md:shadow-[0_10px_45px_rgba(0,0,0,0.9)] flex flex-col items-center pt-[70px] transition-all duration-300
              rounded-tr-4xl
              md:rounded-tr-[100px]
              ${isOpen ? "w-50" : "w-0 hidden "} md:w-25 md:flex md:top-35`}
            >
                <div className='flex flex-col gap-6 w-5/6'>
                    <MenuItems isOpen={isOpen}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
