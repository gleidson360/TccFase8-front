import React from "react"
import PrincipalVideo from "../components/PrincipalVideo" 
import Formulario from "../components/Formulario"


export default function Painel()
{
    return <PrincipalVideo fundo="/fundo.jpg" tamanho="480px">
            <Formulario/>
        </PrincipalVideo>   
    
}

