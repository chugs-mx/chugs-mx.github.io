"use server";

import { signIn } from "@/auth";
import {redirect} from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
    console.log(formData);
    console.log(prevState);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });
    } catch (error) {
        console.log("Error en el login", error);
        return {message: "Credenciales inválidas", success: false};
    }
    redirect("/home")
}