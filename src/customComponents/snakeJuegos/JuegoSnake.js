import React from "react";
import { useState, useEffect } from "react";
import { Tablero } from "./Tablero";
import { Serpiente } from "./Serpiente";
import { Fruta } from "./Fruta";
import { Ajustes } from "./Ajustes";

export const JuegoSnake = () => {
    var [tamañoTablero, setTamañoTablero] = useState(10);
    var [juegoIniciado, setJuegoIniciado] = useState(false);
    var [serpiente, setSerpiente] = useState([]);
    var [comida, setComida] = useState([]);
    var [direccion, setDireccion] = useState(null);
    var [tablero, setTablero] = useState(
        Array.from({ length: 15 }, () => Array(15).fill(""))
    );



    return <>
        <div className="contenedor-juego">
            {!juegoIniciado ? (
                <Ajustes setTamañoTablero={setTamañoTablero} iniciarJuego={iniciarJuego} />
            ) : (
                <Tablero tablero={tablero} tamañoTablero={tamañoTablero} />
            )}
        </div>

    </>
}