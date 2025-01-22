import React from "react";

export const InputTareas = ({fnAñadirTarea}) => {

    //Función para pasar parametros del formulario
    function onSubmit(e){
        e.preventDefault();
        var tarea = e.target.querySelector("textarea").value;
        //Comprobamos que el campo no esté vacío, si tiene contenido, se añade la tarea
        if(tarea.trim() !== "" && tarea!=""){
            fnAñadirTarea(tarea);
            e.target.querySelector("textarea").value = "";
        }

        
    }

    return  <form onSubmit={fnAñadirTarea}>
                <textarea>

                </textarea>
                <button type="submit">Añadir tarea</button>
            </form>
}