import React from "react";
import cabezaImg from "./img/head.png";
import cuerpoImg from "./img/body.png";
import colaImg from "./img/tail.png";

export const Serpiente = ({ serpiente }) => {

    return serpiente.map((parteSerpiente, index) => {
        var imgSrc = index == 0 ? cabezaImg : index = serpiente.length - 1 ? colaImg : cuerpoImg
        return <>
            <div key={index} className="celda" style={{ gridColumn: parteSerpiente.x + 1, gridRow: parteSerpiente.y + 1 }}>
                <img src={imgSrc} alt="Serpiente" className="img-fluid"></img>
            </div>
        </>
    })


}