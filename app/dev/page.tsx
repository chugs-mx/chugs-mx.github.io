

export default async function () {
    const data = await fetch("http://localhost:8080/inventories").then((res) => res.json()).catch((err) => {
        console.log(err)
    })


    const arr = data.content
    const names = arr.map((i:any)=> i.name);

    return (
        <>
            <div className="flex justify-center items-center min-h-screen flex-col" >
                <h1 className="text-8xl">Hola Dev!!!</h1>

                {names.map((name:string) => (
                    <div key={name}>
                        <h1 className="text-4xl">{name}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}