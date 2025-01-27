import React from "react";
import { useState } from "react";
import { InputTareas } from "./InputTareas";
import { ListaTareas } from "./ListaTareas";
import { OrdenarTareas } from "./OrdenarTareas";

export const ContenedorTareas = () => {
    var [tareas, setTareas] = useState([]);

    //Funcion para agregar una tarea
    function addTarea(tarea) {
        var nuevaTarea = {
            tarea,
            completada: false
        }
        setTareas([...tareas, nuevaTarea]);
    }

    //Funcion para eliminar una tarea
    function deleteTarea(index) {
        var nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    }  


    //Función para marcar tarea como completada o incompleta
    function variarCompletada (index){
        var nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    }

    //Función para ordenar las tareas alfabeticamente
    function ordenarTareas() {
        var nuevasTareas = [...tareas];
        nuevasTareas.sort((a, b) => {
            if(a.tarea < b.tarea){
                return -1;
            }
            if(a.tarea > b.tarea){
                return 1;
            }
            return 0;
        });
        setTareas(nuevasTareas);
    }

    return  <div className="container mt-5">
                <h1 className="text-center mb-4">Lista de tareas</h1>
                <InputTareas addTarea={addTarea}/>
                <OrdenarTareas fnOrdenar={ordenarTareas}></OrdenarTareas>
                <ListaTareas 
                    tareas={tareas} 
                    deleteTarea={deleteTarea} 
                    variarCompletada={variarCompletada} />
            </div>
}