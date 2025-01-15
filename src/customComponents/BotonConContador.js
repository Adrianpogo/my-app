import React, {useState} from "react";

export const BotonConContador = () => {
    //El 0 indica el valor inicial del estado, en este caso 0, pero puede ser un array, un objeto, etc.
    var [numClicks, setNumClicks] = useState(0);
    var [numClicksStr, setNumClicksStr] = useState("Boton");
    var [arrayState, setArrayState] = useState([]);

    function fnOnClick (){
        setNumClicks(numClicks + 1);
    }

    function fnOnChange (e){
        //...arrayState es el operador spread, que copia el contenido de arrayState en un nuevo array, luego añadimos el nuevo valor
        setArrayState([...arrayState, e.target.value]);
        console.log(arrayState);

        if(e.target.value === ""){
            setNumClicksStr("Boton");
            return
        }else{
            setNumClicksStr(e.target.value);
        }
    }

    return  <>
                <p>Veces Pulsado: {numClicks} </p>
                <button onClick={fnOnClick}>{numClicksStr}</button>
                <input onChange={fnOnChange} placeholder="Modifica el nombre del boton"></input>
            </>     
}

