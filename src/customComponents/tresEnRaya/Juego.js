import React from "react";
import { useState, useEffect } from "react";
import { Tablero } from "./Tablero";

export const Juego = () => {
    var [squares, setSquares] = useState(Array(9).fill(null))
    var [nextX, setNextX] = useState(true)
    var [winner, setWinner] = useState(null)
    var [isDraw, setIsDraw] = useState(false)

    //Función para comprobar un ganador
    var comprobarGanador = (squares) => {
        var combinaciones = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (var combinacion of combinaciones) {
            var [a, b, c] = combinacion
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    //Se comprueba el ganador cada vez que cambia el estado de un cuadrado
    useEffect(
        () => {
            var result = comprobarGanador(squares)
            setWinner(result)

            setIsDraw(!result && squares.every((square) => square !== null))
        }, [squares]
    )

    //Función para el marcado de casillas
    var handleClick = (index) => {
        if (squares[index] || winner) return

        var newSquares = squares.slice();
        newSquares[index] = nextX ? "X" : "O"
        setSquares(newSquares)
        setNextX(!nextX)
    }

    //Función para resetar los valores del juego
    var resetGame = () => {
        setSquares(Array(9).fill(null))
        setNextX(true)
        setWinner(null)
        setIsDraw(false)
    }

    return <>
        <div className="container text-center mt-4">
            <h1 className="mb-3">Tres en Raya</h1>
            <Tablero squares={squares} onSquareClick={handleClick} />
            <h2 className="mt-3">
                {winner ? (
                    <span className={winner === "X" ? "text-x" : "text-o"}>Ganador: {winner}</span>
                ) : isDraw ? (
                    "¡Empate!"
                ) : (
                    <span className={nextX ? "text-x" : "text-o"}> Turno de: {nextX ? "X" : "O"}</span>
                )}

            </h2>

            {(winner || isDraw) && (
                <button className="btn btn-warning mt-3" onClick={resetGame}>Reiniciar Juego</button>
            )}



        </div>
    </>
}