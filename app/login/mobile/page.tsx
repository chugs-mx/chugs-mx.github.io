import React from 'react';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import Image from 'next/image';

function Page() {
    return (
        <>
            <div className="h-svh">
                <div className="flex flex-col h-full justify-center items-center">
                    <HeaderLogin />
                    <div className="flex flex-col">
                        <Image
                            src="/login/chug-cat.webp"
                            alt="Logo gatito"
                            width={220}
                            height={80}
                            className="
                                w-1/2
                                mx-auto"
                        />
                        <div className="
                                bg-[url('/login/mobile_mask.webp')]
                                bg-no-repeat
                                bg-contain
                                drop-shadow-card
                                grow
                                "
                        >
                            <div className="
                        bg-primary
                        [mask-image:url('/login/mobile_mask.svg')]
                        [mask-repeat:no-repeat]
                        [mask-size:contain]
                        [mask-position:center]
                        "
                            >
                                <h1 className="">LOGIN</h1>
                                <Label htmlFor={"user"} className={""}>Usuario</Label>
                                <Input type={"text"} id="user" className={"w-full bg-input h-[20px] mt-1 rounded-md"} />
                                <Label htmlFor={"user"} className={""}>Contraseña</Label>
                                <Input type={"text"} id="user" className={""} />
                                <div className="">
                                    <Label className={""}>Olvidé mi contraseña</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

function LoginBtn() {
    return (
        <button className="mt-[20px] py-3 px-5  bg-primary text-primary-foreground font-bold text-xl rounded-2xl shadow-black/50 shadow-xl">
            Ingresar
        </button>
    )
}

function HeaderLogin() {
    return (
        <header
            className="
                        {/*bg-[url('/login/chug-logo.webp')]*/}
                        bg-no-repeat
                        bg-cover
                        bg-center
                        p-5
                        relative
                        mb-10
                    "
            style={{
                backgroundImage: 'linear-gradient(to right, rgba(252,239,217,0.9) 0 100%), url("/login/chug-logo.webp")',
            }}
        >
            <Image
                src="/login/chug-logo.webp"
                alt="CHUG'S logo"
                width="300"
                height={100}
                className="w-11/12 p-1 mx-auto"
            />
        </header>
    )
}

export default Page;