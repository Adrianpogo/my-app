import React from "react";
export const Tarea = ({indice, tarea, deleteTarea, variarCompletada}) => {
    return  <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <span style={{textDecoration: tarea.completada ? "line-through" : ""}}>
                        {tarea.tarea}
                    </span>
                </div>
                <div>
                    <button onClick={()=>{deleteTarea(indice)}} className="btn btn-danger btn-sm me-2">Borrar tarea</button>
                    <button onClick={()=>{variarCompletada(indice)}} className="btn btn-success btn-sm">
                        {tarea.completada ? "Reactivar tarea" : "Completar tarea"}
                    </button>
                </div>
            </div>
}