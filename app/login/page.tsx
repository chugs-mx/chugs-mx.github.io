import React from 'react';
import { auth} from "@/auth";
import {redirect} from "next/navigation";
import { LoginDesktop } from "@/components/login/LoginDesktop";
import { LoginMobile } from "@/components/login/LoginMobile";

export default async function Page() {
    const session = await auth();
    if (session) {
        redirect("/")
    }
    return (
        <>
            <div className="
            ">
                <div className="h-svh xs:hidden">
                    <LoginMobile />
                </div>
                <div className="hidden min-h-screen justify-center items-center text-primary-foreground min-w-[417] bg-[url(/login/chug-cat.webp)]
            bg-no-repeat bg-contain bg-bottom xs:flex">
                    <LoginDesktop/>
                </div>
            </div>
        </>
    );
}

