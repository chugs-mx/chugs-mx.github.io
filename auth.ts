import NextAuth, {CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { Roles } from "@/types/roles"



export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials, request) => {
                const {email, password } = credentials
                try {
                    const res = await fetch(`http://localhost:8080/auth/login?email=${email}&password=${password}`, {
                        method: 'GET'
                    })
                    if (res.status == 200){
                        const user = await res.json()
                        if (user) {
                            return {...user, id: user.userId, role: user.userType}
                        }
                    }
                    return null
                } catch (error) {
                    console.error("authorize error "+ error)
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
    },
    callbacks: {
        jwt: params => {
            if( params.user) {
                params.token.role = params.user.role;
            }
            return params.token;
        },
        session: (params) => {
            params.session.user.role = params.token.role as Roles;
            return params.session
        }
    },

    // I leave this here for reference, but I don't think we
    // need it. Just in case we need to share the token between
    // the backend and the frontend, if we need to, we'll need
    // to implement the hashing and salting ourselves.
    // jwt: {
    //     encode: async ({token,secret, salt, maxAge}) => {
    //         console.log(token)
    //         console.log(secret)
    //         console.log(salt)
    //         console.log(maxAge)
    //
    //         //type of token
    //         console.log(typeof token)
    //         token.hello = "world"
    //
    //         return JSON.stringify(token)
    //     },
    //     decode: async ({token, secret, maxAge, salt}) => {
    //         console.log(token)
    //         console.log(secret)
    //         console.log(maxAge)
    //         //type of token
    //         console.log(typeof token)
    //         return JSON.parse(token)
    //     }
    // }
})