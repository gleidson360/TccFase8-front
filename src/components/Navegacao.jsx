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
        <ModeloTitulo> { props.titulo } </ModeloTitulo>
        <ModeloBotoes> { props.children } </ModeloBotoes>
    </Modelo>
}