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

    return  <form onSubmit={onSubmit} className="mb-3">
                <div className="mb-3">
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Añadir tarea</button>
            </form>
}