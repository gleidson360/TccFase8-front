import React, { useState } from "react"

import styled from "styled-components"
import ConteudoInicial from "../datas/ConteudoInicial"
import SalvarConteudo from "../functions/SalvarConteudo"

const Modelo = styled.div`

  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`


const ModeloInterno = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function Formulario() {
  const [conteudo, definirConteudo] = useState(ConteudoInicial)
  
  function Mudar(evento) {
    const campo = evento.target.name
    const valor = evento.target.value
    definirConteudo({ ...conteudo, [campo]: valor })
  }

  function Enviar(evento) {
    SalvarConteudo(conteudo)
      .then(function (resposta) {
        if (resposta.status === 201)
          alert("Conteúdo enviado com sucesso!")
        else
          console.log(resposta)
      })
      .catch(function (erro) {
        console.log(erro)
      })

    evento.preventDefault()

    definirConteudo(ConteudoInicial)

  }

  return <Modelo>
    <ModeloInterno onSubmit={Enviar}>

      <input
        value={conteudo.capa} onChange={Mudar}
        type="url" name="capa" placeholder="Capa" required />


      <input
        value={conteudo.video} onChange={Mudar}
        type="url" name="video" placeholder="Video" required />


      <input
        value={conteudo.titulo} onChange={Mudar}
        type="text" name="titulo" placeholder="Título" required />


      <input
        value={conteudo.descricao} onChange={Mudar}
        type="text" name="descricao" placeholder="Descrição..." required />

      <input
        value={ conteudo.linguagem } onChange={ Mudar }
        type="text" name="linguagem" placeholder="Linguagem" required/>

      <input type="submit" value="Enviar" />

    </ModeloInterno>

  </Modelo>

}