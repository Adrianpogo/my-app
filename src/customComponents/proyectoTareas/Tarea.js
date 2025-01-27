import React from "react";
export const Tarea = ({indice, tarea, deleteTarea, variarCompletada}) => {
    return  <div>
                <div>
                    <button onClick={()=>{deleteTarea(indice)}}>Borrar tarea</button>
                    <button onClick={()=>{variarCompletada(indice)}}>{tarea.completada ? "Reactivar tarea" : "Completar tarea"}</button>
                </div>
                <div>
                    <span style={{textDecoration: tarea.completada ? "line-through" : ""}}>
                        {tarea.tarea}
                    </span>
                </div>
            </div>
}