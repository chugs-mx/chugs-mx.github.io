"use client"
import {loginAction} from "@/app/_actions/auth.actions";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {useFormStatus} from "react-dom";
import { useActionState} from "react";
import {useRouter} from "next/navigation";

const initialState = {
    message: "",
    success: false,
}

function SubmitButton() {
    const {pending} = useFormStatus()
    return (
        <Button
            type={"submit"}
            aria-disabled={pending}
            className="mt-[20px] py-3 px-5 bg-primary text-primary-foreground font-bold text-xl rounded-2xl shadow-md"
        >Ingresar</Button>
    )
}

export function LoginDesktop() {
    const router = useRouter()
    const [state, formAction] = useActionState(loginAction, initialState);

    if (state?.success){
        router.push("/")
    }

    return (
        <div className="min-h-screen flex justify-center items-center text-primary-foreground min-w-[417]
            bg-no-repeat bg-contain bg-bottom

            ">
            <form
                action={formAction}
            >
                <div className="flex flex-col gap-2 min-w-[417]">
                    <Image src={"/login/chug-logo.webp"} width={417} height={2} alt={"Logo"} className={"w-[396] mb-6"} />
                    <Label htmlFor={"user"} className={"text-3xl ml-3"}>Usuario</Label>
                    <Input required={true} type={"email"} id="user" name={"email"} className={" bg-input h-[40]"} />

                    <Label htmlFor={"user"} className={"text-3xl ml-3"}>Contraseña</Label>

                    <Input required={true} type={"password"} id="user" name={"password"} className={"bg-input h-[40]"} />
                    <SubmitButton />
                    <p aria-live={"polite"} role={"status"}>
                        {state?.message}
                    </p>
                    <div className="flex justify-end mb-[217]">

                        <Label className={"text-lg text-right justify-self-end"}>Olvidé mi contraseña</Label>
                    </div>
                </div>
            </form>
        </div>
    )
}
