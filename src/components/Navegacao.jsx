import react from "react";
import styled from "styled-components";

const Modelo = styled.div`
    overflow: hidden;
    align-items: center; 
    background: linear-gradient(black, transparent); 
    display: flex; 
    gap: 32px; 
    height: 32px; 
    padding: 32px; 

`

const ModeloTitulo = styled.div`
    font-size: 32pt;
    padding: 32px 0;
    text-align: center;
`
// const ModeloImagem = styled.img` 
//   height: 48px; 
// ` 

const ModeloBotoes = styled.div`
    display: flex;
    gap: 32px;
    justify-content: center;
`

const ModeloLink = styled.a` 
  color: #fff; 
  text-decoration: none; 
`

export default function Navegacao(props) {
    return <Modelo>
        {/* <ModeloImagem src="./logo.png" alt="logo"/>  */}
        <ModeloTitulo> { props.titulo } </ModeloTitulo>
        <ModeloBotoes> { props.children } </ModeloBotoes>
        <ModeloLink href="#"> Filmes </ModeloLink> 
        <ModeloLink href="#"> Séries </ModeloLink> 
        <ModeloLink href="#"> Em alta </ModeloLink> 
    </Modelo>
}