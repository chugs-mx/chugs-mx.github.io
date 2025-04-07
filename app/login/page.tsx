import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/signOut';
import UserAvatar from '@/components/user-session';

function Page() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center text-primary-foreground min-w-[417] bg-[url(/login/chug-cat.webp)]
            bg-no-repeat bg-contain bg-bottom
            ">
                <LoginDesktop/>
            </div>
        </>
    );
}

function LoginDesktop() {
    return (
        <div className="min-h-screen flex justify-center items-center text-primary-foreground min-w-[417] 
            bg-no-repeat bg-contain bg-bottom

            ">
            <div className="flex flex-col gap-2 min-w-[417]">
                <Image src={"/login/chug-logo.webp"} width={417} height={2} alt={"Logo"} className={"w-[396] mb-6"} />
                <Label htmlFor={"user"} className={"text-3xl ml-3"}>Usuario</Label>
                <Input type={"text"} id="user" className={" bg-input h-[40]"} />

                <Label htmlFor={"user"} className={"text-3xl ml-3"}>Contraseña</Label>

                <Input type={"text"} id="user" className={"bg-input h-[40]"} />
                <div className="flex justify-end mb-[217]">

                    <Label className={"text-lg text-right justify-self-end"}>Olvidé mi contraseña</Label>
                </div>
            </div>
        </div>
    )
}

export default Page;