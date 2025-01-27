import React from "react";
import { Tarea } from "./Tarea";

export const ListaTareas = ({tareas, deleteTarea, variarCompletada}) => {
    return  <div className="list-group">
                {
                    tareas.map((tarea, indice)=>(
                        <Tarea
                            key ={indice}
                            indice = {indice}
                            tarea = {tarea}
                            deleteTarea = {deleteTarea}
                            variarCompletada= {variarCompletada}
                        >
                        </Tarea>
                    ))
                }
            </div>
}