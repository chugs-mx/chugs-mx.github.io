import React from 'react';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import Image from 'next/image';

function Page(){
    return(
        <>
        <div className="flex justify-center flex-col items-center min-h-screen relative bg-[url('/login/mobile_backgoround.webp')] bg-cover bg-center">
            <Image 
                src="/login/chug-logo.webp" 
                alt="CHUG'S logo" 
                width={300} 
                height={100} 
                className="absolute top-[50px]"
            />
            <Image 
                src="/login/chug-cat.webp" 
                alt="Logo gatito" 
                width={220} 
                height={80} 
                className="absolute top-[120px] z-20"
            />
        <div className="relative w-[343px] p-6 bg-white shadow-md z-30" //bg-[#FCEED7]
            style={{ 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                WebkitMaskImage: "url('/login/mobile_mask.svg')", 
                maskImage: "url('/login/mobile_mask.svg')", 
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain" 
            }}>
            <h2 className="flex justify-center text-3xl font-bold text-orange-600">LOGIN</h2>
                <Label htmlFor={"user"} className={"text-md ml-2"}>Usuario</Label>
                <Input type={"text"}  id="user" className={"w-full bg-input h-[35px] mt-1 rounded-md"}/>
                <Label htmlFor={"user"} className={"text-md ml-2"}>Contraseña</Label>
                <Input type={"text"}  id="user"  className={"w-full bg-input h-[35px] mt-1 rounded-md"} />
                    <div className="flex justify-end mt-2 mb-[15px]">
                         <Label  className={"text-sm text-right justify-self-end"}>Olvidé mi contraseña</Label>
                    </div>
        </div>
        <button className="mt-[20px] w-[343px] h-[60px] bg-[#fde2c8] text-orange-600 font-bold text-xl rounded-2xl shadow-md">
            Ingresar
        </button>
        </div>       
        </>
    );
}

export default Page;