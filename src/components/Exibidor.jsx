import React from "react" 
import styled from "styled-components"
import SalvarCarrinho from "../functions/SalvarCarrinho";

const Modelo = styled.div`
    background: #000;
    display: flex;
    margin: 32px 0;
    overflow: hidden;

`

const ModeloImagens = styled.div`
    display: flex;
    // overflow-x: scroll;
    max-width: 700px;
`
const ModeloImg = styled.img`

`
const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;

`
export default function Exibidor(props) {


    return Object.keys(props.produto).length > 0 ?


    <Modelo> 

        <ModeloImagens>
            <img
                src={ props.produto.imagens }
                alt="Foto do Produto"
                height={ 400 }
                width={ 700 }
                />
        </ModeloImagens>

        <ModeloDados>
            <div> { props.produto.modelo }</div>
            <div> R$ { props.produto.preco }.00 </div>
            <div> { props.produto.descricao }  </div>

            <button onClick={ () => SalvarCarrinho(props.produto.codigo) }>
                Adicionar ao Carrinho
            </button>
        </ModeloDados>
        
        
    </Modelo>
    
    :

    <Modelo>
        <ModeloDados> Produto não encontrado! </ModeloDados>
    </Modelo>

}


