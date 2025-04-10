"use client"
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {loginAction} from "@/app/_actions/auth.actions";
import {useFormStatus} from "react-dom";
import React, { useActionState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const initialState = {
    message: "",
    success: false,
}

export function LoginMobile() {
    const router = useRouter()
    const [state, formAction] = useActionState(loginAction, initialState);

    if (state?.success){
        router.push("/")
    }
    console.log(state)
    return (
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
                <form
                    action={formAction}
                >
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
                        min-h-[100px] /* Ajusta según necesites */
    flex                flex-col gap-1 p-2 grow
                        "
                        >
                            <div className="flex flex-col gap-1 px-6 py-4">
                                <h1 className="text-center text-3xl font-bold text-primary-foreground">LOGIN</h1>
                                <Label htmlFor={"email"} className={"text-sm text-primary-foreground"}>Usuario</Label>
                                <Input required={true} type={"email"} id="email" name={"email"} className={"w-full bg-input h-[10px] rounded-md p-2"} />
                                <Label htmlFor={"password"} className={"text-sm text-primary-foreground"}>Contraseña</Label>
                                <Input required={true} type={"password"} id="password" name={"password"} className={"w-full bg-input h-[10px] rounded-md p-2"} />
                                <div className="text-right text-xs cursor-pointer">
                                    <Label className={"flex justify-end text-primary-foreground mt-1"}>Olvidé mi contraseña</Label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 w-full flex justify-center">
                            <LoginBtn />
                        </div>
                        <div className="flex justify-center items-center pt-3">
                            <p aria-live={"polite"} role={"status"} className={"text-sm text-primary-foreground"}>
                                {state?.message}
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

function LoginBtn() {
    const {pending} = useFormStatus()
    return (
        <Button
            aria-disabled={pending}
            type={"submit"}
        className="mt-[20px] py-3 px-5  bg-primary text-primary-foreground font-bold text-xl rounded-2xl shadow-2xl">
            Ingresar
        </Button>
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
                backgroundImage: 'linear-gradient(to right, rgba(252,239,217,0.9) 0 100%), url("/login/chug-logo.webp" ',
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
