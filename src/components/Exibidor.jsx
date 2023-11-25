import React from "react" 
import styled from "styled-components"

const Modelo = styled.div`

    background: #fff;
    display: flex;
    margin: 32px 0;
    overflow: hidden;

`

const ModeloImagens = styled.div`

    display: flex;
    overflow-x: scroll;
    max-width: 480px;

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

                src="https://picsum.photos/800/800?random=1" 
                alt="Foto do Produto" 
                height={ 450 }/>

            <img

                src="https://picsum.photos/800/800?random=2" 
                alt="Foto do Produto"
                height={ 450 }/>  

            <img

                src="https://picsum.photos/800/800?random=3"
                alt="Foto do Produto"
                height={ 450 }/>

        </ModeloImagens>

        <ModeloDados>
            <div> { props.produto.marca } </div>
            <div> { props.produto.modelo }</div>
            <div> R$ { props.produto.preco }.00 </div>
            <div> { props.produto.descricao }  </div>
            <button onClick={() => SalvarCarrinho(props.produto.codigo)}>Adicionar ao Carrinho</button>
        </ModeloDados>

    </Modelo>
    
    :

    <Modelo>
        <ModeloDados> Produto não encontrado! </ModeloDados>
    </Modelo>

}