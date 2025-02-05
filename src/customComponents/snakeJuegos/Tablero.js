import React from "react";

export const Tablero = ({ tablero, tamañoTablero }) => {
    return (
        <div className="tablero mx-auto" style={{ gridTemplateColumns: `repeat(${tamañoTablero}, 20px)` }}>
            {tablero.map((fila, indiceFila) => (
                <div key={indiceFila} className="fila">
                    {fila.map((celda, indiceCelda) => (
                        <div key={indiceCelda} className="celda">
                            {celda}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};