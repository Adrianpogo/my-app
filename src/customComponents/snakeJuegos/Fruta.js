import React from "react";
import frutaImg from "./img/banana.jpg";

export const Fruta = ({ comida }) => {

    return <>
        <div className="celda">
            <img src={frutaImg} alt="comida" className="img-fluid"></img>
        </div>
    </>
}