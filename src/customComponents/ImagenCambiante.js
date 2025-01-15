import React from "react";
import { useState } from "react";


//https://thumb.pccomponentes.com/w-530-530/articles/1083/10839245/1432-samsung-galaxy-m55-5g-8-256gb-negro-libre.jpg
//https://thumb.pccomponentes.com/w-530-530/articles/1073/10736132/1117-targus-tbb639gl-mochila-gaming-strike-ii-173-negra.jpg

export const ImagenCambiante = ({src1,src2}) => {
    var [srcActual, setSrcActual] = useState(src1)

    setInterval(() => {
        if(srcActual == src1){
            setSrcActual(src2)
        }else{
            setSrcActual(src1)
        }       
    }, 2000);

    return <img src={srcActual} alt="Imagen Cambiante" />
        
    
}