import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
//deal with passwoed salt and has

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log("credentials", credentials)
                if (credentials.password !== "hola") {
                    return null;
                }

                const user = await new Promise<{ id: string, name: string, email: string, password: string } | null>((resolve) => {
                    setTimeout(() => {
                        resolve({
                            id: "2", name: "Test User", email: "email", password: "hola"
                        })
                    }, 1000)
                })
                console.log("user", user)
                return user
            },
        }),
    ]
})