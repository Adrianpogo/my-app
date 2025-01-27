import React from "react";

export const InputTareas = ({addTarea}) => {

    //Función para pasar parametros del formulario
    function onSubmit(e){
        e.preventDefault();
        var tarea = e.target.querySelector("textarea").value;
        //Comprobamos que el campo no esté vacío, si tiene contenido, se añade la tarea
        if(tarea.trim() !== "" && tarea!==""){
            addTarea(tarea);
            e.target.querySelector("textarea").value = "";
        }

        
    }

    return  <form onSubmit={onSubmit}>
                <textarea>

                </textarea>
                <button type="submit">Añadir tarea</button>
            </form>
}