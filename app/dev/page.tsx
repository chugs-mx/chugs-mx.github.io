"use client"
import api from "@/app/wrapper/api"
import {useEffect, useState} from "react"
const API_URL = "http://localhost:8080/inventories"

export default function () {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await api.get("inventories")
            console.log(req)
            console.log(req.data)
            setItems(req.data.content)
        }
        fetchData()
    }, [])




    return (
        <>
            <div className="flex justify-center items-center min-h-screen flex-col" >
                <h1 className="text-8xl">Hola Dev!!!</h1>

                {items.map((i) =>{
                    const {name} = i;
                    return (
                        <div key={name}>
                            <h1 className="text-4xl">{name}</h1>
                        </div>
                    )
                } )}
            </div>
        </>
    )
}