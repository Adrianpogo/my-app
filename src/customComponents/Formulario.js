import React from "react";
import { LineaFormulario } from "./LineaFormulario";
import { Boton } from "./Boton";
import "../customCSS/formulario.css"

export const Formulario = () => {

    const onSubmitFn = (e) => {
        e.preventDefault()
        var inputs = e.target.querySelectorAll("input")
        inputs.forEach(input => {console.log(input.value)})
        
        
    }

    return  <>
                <form onSubmit={onSubmitFn}>
                    <LineaFormulario />
                    <LineaFormulario />
                    <LineaFormulario />
                    <button type="submit">Enviar</button>
                </form>
                
            </>
}