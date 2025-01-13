import React from "react";
/*
export const Inputs = ({esObligatorio, NombreEtiqueta, tipoInput}) => {

    return  <>
                <label htmlFor={NombreEtiqueta}>{NombreEtiqueta}</label>
                <input type={tipoInput} id={NombreEtiqueta} required={esObligatorio}></input>
            </> 
}
*/
export const Inputs = (props) =>{
    return  <>
                <label>{props.input.label}</label>
                <input
                    type ={props.input.type}
                    required = {props.input.required}
                    id = {props.input.label}
                ></input>
            </>
}