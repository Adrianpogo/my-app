import React from "react";
import { useState } from "react";
import { ContadorConectado } from "./ContadorConectado";
import { BotonConectado } from "./BotonConectado";

export const PadreConectado = () => {
    var [numClicks, setNumClicks] = useState(0);

    function onClick(){
        setNumClicks(numClicks + 1);
    }

    return (
        <div>
            <BotonConectado funcion={onClick}></BotonConectado>
            <ContadorConectado numClicks={numClicks}></ContadorConectado>
        </div>
    );
}