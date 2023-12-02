import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 32px 0;
`
const Produto = styled.div`
    background: #000;
    padding: 8px;
    transition: 0.2s;

    &:hover {
        transform: rotateZ(2deg) scale(1.1);
        transition: 0.2s;
    }
`
const ProdutoImagem = styled.img`
    height: 220px;
    object-fit: cover;
    width: 420px;
`
const ProdutoDados = styled.div`
    text-align: center;
`

export default function PrincipalLoja(props) {
    return <Modelo>
        {
            props.produtos.map(function(produto, indice) {
                return <Produto key={ indice }>
                    <a href={ "/produto/" + produto.codigo }>
                        <ProdutoImagem
                            src={ produto.imagens[0] }
                            alt="Foto do Produto"/>
                        <ProdutoDados>
                            <div> { produto.modelo } </div>
                            <div> R$ { produto.preco } </div>
                        </ProdutoDados>
                    </a> 
                </Produto>
            })
                
        }
    </Modelo>
}
