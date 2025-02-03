import React from "react";
import { useState, useEffect } from "react";

export const Reloj = () => {

    var [hora,setHora] = useState(new Date().toLocaleDateString("es-ES",{
        hour:'2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }))

    useEffect(
        ()=>{
            setInterval(()=>{
                setHora(new Date().toLocaleDateString("es-ES",{
                    hour:'2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }))
            },1000)
        },[]
    )
    

    return  <>
                <div>
                    Hora actual: {hora}
                </div>
            </>
}
