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
            tarea: tarea,
            completada: false
        }
        setTareas([...tareas, nuevaTarea]);
    }

    //Funcion para eliminar una tarea
    function deleteTarea(index) {
        var nuevasTareas = [...tareas];
        nuevasTareas.slice(index, 1);
        setTareas(nuevasTareas);
    }  

    //Funcion para ordenar las tareas
    function ordenarTareas() {
        setTareas(tareas.sort((a, b) => a - b));
    }

    //Función para marcar tarea como completada o incompleta
    function variarCompletada (index){
        var nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    }

    return  <div>
                <h1>Lista de tareas</h1>
                <InputTareas addTarea={addTarea} />
                <OrdenarTareas ordenarTareas={ordenarTareas} />
                <ListaTareas tareas={tareas} deleteTarea={deleteTarea} variarCompletada={variarCompletada} />
            </div>
}