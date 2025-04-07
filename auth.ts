import NextAuth from "next-auth"
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
                let user = null;

                user = await  getUserFromDB(credentials.email, credentials.password);
                console.log("user", user)
                return user
            },
        }),
    ]
})

// @ts-ignore
const getUserFromDB = async (email , password) => {
    try {
        const res = await axios.get(`http://localhost:8080/users`, {
            params: {
                email: email,
                password: password
            }
        })
        return res.data
    } catch (error) {
        console.log("error", error)
        return null
    }
}