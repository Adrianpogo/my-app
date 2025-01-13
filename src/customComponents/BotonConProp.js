import React from "react";

//Se usa para que el componente pueda tener diferentes valores
// -- diferentes botones con textos variables por parametros
//Podemos paserle funciones para agragar por ejemplo funcionalidades al boton
//Podemos controlar si algun parametro no llega al componente
export const BotonConProp = ({text, text1, fnClick}) => {
    if(!text1){
        text1="Sin text1"
    }
    return <button onClick={fnClick}> {text}-{text1} </button>
    
    
}