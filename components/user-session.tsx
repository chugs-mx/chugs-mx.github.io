import { auth } from "@/auth"

export default async function UserAvatar() {
    const session = await auth()
    console.log("session", session)
    if (!session?.user) {
        console.log("No user")
    }
    const msg = session?.user ? `Hello ${session.user.name}` : "No user"

    return (
        <div className="">
            <span className="avatar">{msg}</span>
        </div>
    )
}