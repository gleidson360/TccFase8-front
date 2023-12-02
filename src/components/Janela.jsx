import React from "react" 
import styled from "styled-components"

const Modelo = styled.div`
    background: #000;
    margin: 0 auto;
    overflow: hidden;
    padding: 32px;
    width: 768px;
    `

export default function Janela(props) {
  return <Modelo> 
    { props.children }
  </Modelo>
}