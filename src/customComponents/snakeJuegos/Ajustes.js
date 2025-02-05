import React from "react";

export const Ajustes = ({setTamañoTablero, iniciarJuego}) =>{

    return <>
        <div className="container text-center mt-5">
            <h2>Selecciona el tamaño del tablero</h2>
            <input
                type="number"
                className="form-control w-25 mx-auto my-3"
                onChange={(e) => setTamañoTablero(Number(e.target.value))}
                min={5}
                max={20}
                defaultValue={10}
            />
            <button className="btn btn-primary" onClick={iniciarJuego}>Comenzar</button>
        </div>
    </>
}