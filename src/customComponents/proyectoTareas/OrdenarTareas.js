import React from "react";

export const OrdenarTareas = ({fnOrdenar}) => {
    return <button onClick={fnOrdenar} className="btn btn-secondary mb-3">Ordenar tareas</button>
}