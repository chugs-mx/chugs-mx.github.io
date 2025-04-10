import NextAuth, {CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"


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
                const {email, password } = credentials
                try {
                    const res = await fetch(`http://localhost:8080/auth/login?email=${email}&password=${password}`, {
                        method: 'GET'
                    })
                    if (res.status == 200){
                        const user = await res.json()
                        if (user) {
                            return {...user, id: user.userId}
                        }
                    }
                    return null
                } catch (error) {
                    return null
                }
            },
        }),
    ],
    logger: {
        error( error: Error) {
            if (error instanceof CredentialsSignin) {
                console.warn(`[AUTH WARN] CredentialsSignIn failed: ${error.message}`);
            } else {
                console.error(error);
            }
        },
    }
})