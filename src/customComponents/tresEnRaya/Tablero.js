import React from "react";
import { Casilla } from "./Casilla";

export const Tablero = ({ squares, onSquareClick }) => {

    return <>
        <div className="board">
            {squares.map((value, index) => (
                <Casilla key={index} value={value} onClick={() => onSquareClick(index)}></Casilla>
            ))}
        </div>


    </>
}