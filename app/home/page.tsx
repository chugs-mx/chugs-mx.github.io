import React from 'react'
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Image from 'next/image';


const page = () => {
    return (
        <div className="outline outline-fuchsia-800 p-2 px-6 lg:flex-row">
            <MainContent/>
        </div>
    )
}

const MainContent = () => {
    return (
        <>
            <div className="flex flex-col xl:flex-row justify-center gap-6 z-50">
                <div className="flex flex-col gap-4 w-full xl:w-1/2">
                    <div className="bg-primary-foreground text-background rounded-xl p-3 flex flex-row gap-2 text-center justify-around">
                        {[
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
                            }].map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center">
                                <Image src={item.icon} alt={item.alt} width={60} height={60}/>
                                <div className="flex justify-center pt-2">
                                    <p className="text-3xl font-bold text-left pr-4">{item.amount}</p>
                                    <p className="text-sm text-left break-words w-1/2">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {[

                            {
                                title: "Ventas",
                                date: "Hoy",
                                icon: "/icons/sales_year.webp",
                                percentage: "+16.0%",
                                amount: "$1,345,832.00"
                            },
                            {
                                title: "Ganancia total",
                                date: "Semana pasada",
                                icon: "/icons/gains.webp",
                                percentage: "-12.3%",
                                amount: "$18,350.20"
                            },
                            {
                                title: "Total de ventas",
                                date: "Semana pasada",
                                icon: "/icons/sales.webp",
                                percentage: "+16.0%",
                                amount: "$45,347.70"
                            }
                        ].map((item, index) => (
                            <div key={index} 
                                className="bg-primary-foreground rounded-xl text-background p-4 flex flex-col  justify-between h-52">
                                <div className="break-words w-full min-w-0 mb-2">
                                    <h1 className="text-2xl xl:text-xl font-semibold leading-tight overflow-hidden">{item.title}</h1>
                                    <p className='font-extralight text-sm'>{item.date}</p>
                                </div>
                                
                                <div className="flex items-end justify-between ">
                                    <Image src={item.icon} alt={item.title} width={60} height={60}/>
                                    <p className={`text-sm ${item.percentage.startsWith("-") ? "text-red-800" : "text-green-500"}`}>{item.percentage}</p>
                                </div>
                               
                                
                               
                               <div className="flex justify-end text-2xl font-light xl:text-xl tracking-wide">
                                    <p className="italic flex justify-end text-[clamp(18px,2vw,20px)]">{item.amount}</p>
                               </div>
                                
                            </div>
                        ))}
                    </div>

                </div>


            
                <div
                    className="bg-primary-foreground text-background rounded-xl p-4 py-5 xl:w-1/2 w-full order-1 min-h-3">
                    <h1 className="text-4xl md:text-4xl font-bold mb-4 -tracking-tighter">Ordenes recientes</h1>
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-6 scroll-beige">
                        {[
                            {
                                producto: "Hamburguesa",
                                mesa: "Mesa 3",
                                fecha: "27.12.2024 - 14:58:07",
                                estado: "Listo",
                                color: "bg-green-600"
                            },
                            {
                                producto: "Papas",
                                mesa: "Mesa 14",
                                fecha: "27.12.2024 - 14:58:07",
                                estado: "En espera",
                                color: "bg-lime-500"
                            },
                            {
                                producto: "Malteada",
                                mesa: "Mesa 1",
                                fecha: "27.12.2024 - 14:58:07",
                                estado: "En espera",
                                color: "bg-lime-500"
                            },
                        ].map((orden, index) => (
                            <div key={index}
                                 className="border-t pt-2 flex flex-row items-center justify-between gap-1">
                                    <div className="flex items-center gap-4 ">
                                        <Image src={`/icons/${orden.producto.toLowerCase()}.webp`} alt={orden.producto}
                                            width={70} height={70} className='ml-4 w-max-20 h-20'/>
                                    <div className='max-w-[200px] break-words overflow-hidden '>
                                        <p className="text-2xl xl:text-lg font-semibold">{orden.producto}</p>
                                        <p className="text-xl italic font-bold">{orden.mesa}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end w-30">
                                    <span
                                        className={`text-background px-11 py-1 rounded-l-lg text-xl text-right pr-1.5 w-40 ${orden.color}`}>{orden.estado}</span>
                                    <p className="text-2xl w-70 text-right pt-6 tracking-wide">{orden.fecha}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 bg-primary-foreground text-background rounded-3xl px-6 py-4 ">
                    {[
                        {
                            icon: "/icons/piechart.webp",
                            value: "275",
                            label: "Ventas"
                        },
                        {
                            icon: "/icons/customers.webp",
                            value: "1478",
                            label: "Clientes"
                        },
                        {
                            icon: "/icons/products.webp",
                            value: "34",
                            label: "Productos"
                        },
                        {
                            icon: "/icons/money.webp",
                            value: "$9,456",
                            label: "Ganancia"
                        }
                    ].map((item, index, array) => (
                        <div 
                            key={index} 
                            className="relative flex flex-col justify-center min-h-[160px] px-4"
                        >
                            <div className='grid grid-cols-2 items-center'>
                                <div className='grid grid-rows-2 ps-6  justify-start xl:ps-4'>
                                    <p className="font-semibold text-[clamp(25px,0.5vw,30px)]">{item.value}</p>
                                    <p className="text-xl xl:text-2lg font-semibold">{item.label}</p>    
                                </div>
                                <Image src={item.icon} alt={item.label} width={80} height={80} className=' justify-end xl:justify-start pl-4'/>
                            </div>
                    
                            {/* Línea vertical mobile */}
                            {(index === 0 || index === 2) && (
                                <div className="absolute right-0 top-6 h-[80%] w-[1px] bg-background  xl:hidden"></div>
                            )}

                            {/* Línea horizontal */}
                            {(index === 0 || index === 1) && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-background  xl:hidden"></div>
                            )}

                             {/* Línea vertical desktop */}
                            {index !== 3 && (
                            <div className="absolute right-0 top-6 h-[80%] w-[1px] bg-background hidden xl:block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default page
