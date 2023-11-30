import React, { useEffect, useState } from "react"
import Navegacao from "../components/Navegacao"
import Destaque from "../components/Destaque"
import Sessao from "../components/Sessao"
import ObterConteudos from "../functions/ObterConteudos"
import Obterlinguagens from "../functions/ObterLinguagens"

export default function Explorar() {
    const [ conteudos, definirConteudos ] = useState([])
    const [ linguagens, definirlinguagens ] = useState([])

    useEffect(function() {
        ObterConteudos()
        .then(function(resposta) {
            if (resposta.status == 200)
              definirConteudos(resposta.data)
            else
              console.log(resposta)
          })
          .catch(function(erro) {
            console.log(erro)
            alert(erro.message)
          })  

        ObterLinguagens()
        .then(function(resposta) {
            if (resposta.status == 200)
              definirlinguagens(resposta.data)
            else if (resposta.status == 404)
              alert("Nenhum gênero encontrado!")
            else if (resposta.status == 500)      
              alert("problema com o servidor!")
            else      
              console.log(resposta)
          })
          .catch(function(erro) {

            console.log(erro)
          
          })
    }, [])

    return <>
    <Destaque fundo="/fundo.jpg">
        <Navegacao/>    
    </Destaque>
    { linguagem.length > 0 &&
        linguagem.map(function(linguagem, indice) {
            return <Sessao 
            key={ indice }
            linguagem={ linguagem }
            conteudos={ conteudos }
        />
        })
    }
    </>
   }