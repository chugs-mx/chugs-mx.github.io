import React from 'react'
import Image from 'next/image'

const Topbar = () => {
  return (
    <div className="relative flex flex-col items-center md:flex-row md:justify-between p-4">
      
      <div className="hidden md:block p-2">
        <Image src={"/nav/chug-logo.webp"} alt='Logo' width={300} height={220}  />
      </div>
     
      <nav className="bg-background  shadow-black/30 shadow-xl  rounded-bl-2xl p-2 flex items-center gap-6 max-w-[400px] 
                      absolute md:relative top-4 right-0 md:top-0 md:p-4">

        <div className="relative">
          <Image src={"/nav/shop_icon.webp"} alt="Shop icon" width={30} height={30} />
          <span className="absolute -top-2 -right-2 bg-primary-foreground text-white text-xs rounded-full px-2">14</span>
        </div>

        <div className="relative">
          <Image src={"/nav/order_icon.webp"} alt="Order icon" width={30} height={30} />
          <span className="absolute -top-2 -right-2 bg-primary-foreground text-white text-xs rounded-full px-2">3</span>
        </div>

        <div className="hidden md:flex flex-col text-right">
          <span className="text-primary-foreground font-bold">¡Hola Alejandro!</span>
          <span className="text-primary-foreground text-sm italic">COLABORADOR</span>
        </div>

        <div className="md:hidden">
          <Image src={"/nav/user_icon.webp"} alt="User icon" width={30} height={30} />
        </div>
      </nav>

      {/* Logo mobile */}
      <div className="flex justify-center md:hidden mt-20">
        <Image src={"/nav/chug-cat.webp"} alt='Cat Logo' width={250} height={200} className="mt-2" />
      </div>

    </div>
  )
}

export default Topbar
