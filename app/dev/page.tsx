import {auth} from "@/auth";

export default async function (){
    const session = await auth();
    if (!session?.user) {
        return (
            <div>
                <h1>Not logged in</h1>
            </div>
        )

    }
    return (
        <>
            {`Bienvenido: ${session.user.name}`}
            <div className={"flex justify-center items-center "}>
                {JSON.stringify(session)}
            </div>
        </>
    )
}