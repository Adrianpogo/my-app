import React from "react";
import { Inputs } from "./Inputs";

export const Formulario2 = ({inputs}) => {
    //En react si la funcion flecha hace mas de una cosa, en lugar de () => {} ponemos () => ()
    /*
    return  <form>
                {
                    inputs && inputs.map((input,indice)=>(
                        <div key={indice}>
                            <Inputs 
                                esObligatorio={input.required}
                                NombreEtiqueta={input.label}
                                tipoInput = {input.type}
                            ></Inputs>
                        </div>
                    ))
                }
                {
                    inputs && <button type="submit">Enviar</button>
                }
            </form>
    */
   return   <form>
                {
                    inputs && inputs.map((input,indice) => (
                        <div key={indice}>
                            <Inputs input={input}></Inputs>
                        </div>
                    ))
                }
            </form>
}