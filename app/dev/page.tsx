"use client"
import api from "@/app/apiSpring/back-api"
import {useEffect, useState} from "react"

export default function () {
    const [items, setItems] = useState([])

    useEffect(() => {
        (async function fetchData() {
            try {
                const req = await api.get("inventories")
                console.log(req)
                console.log(req.data)
                setItems(req.data.content)
            } catch (e){
                console.error(e)
            }
        })()
    }, [])




    return (
        <>
            <div className="flex justify-center items-center min-h-screen flex-col" >
                <h1 className="text-8xl">Hola Dev!!!</h1>

                {items.map((i) =>{
                    const {name} = i;
                    return (
                            <h1 key={name} className="text-4xl">{name}</h1>
                    )
                } )}
            </div>
        </>
    )
}