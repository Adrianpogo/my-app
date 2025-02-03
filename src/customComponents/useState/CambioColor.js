import React from "react";
import { useState,useEffect } from "react";

export const CambiarColor = () => {
    
    var [color, setColor] = useState("white")

    useEffect (
        ()=>{
            document.body.style.backgroundColor = color
        }, [color]
    )
    
    return  <>
                <div>
                    Color de fondo: {color}
                    <button onClick={()=>setColor("blue")}>Azul</button>
                    <button onClick={()=>setColor("green")}>Verde</button>
                    <button onClick={()=>setColor("red")}>Rojo</button>
                    <button onClick={()=>setColor("white")}>Blanco</button>
                    <button onClick={()=>setColor("yellow")}>Amarillo</button>
                </div>
            </>
}