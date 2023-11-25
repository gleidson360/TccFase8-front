import React from "react";
import Navegacao from "../components/Navegacao";
import PrincipalLoja from "../compoents/PrincipalLoja";
import ProdutosExemplos from "../data/ProdutosExemplos";

export default function Vitrine() {
    return <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Inicio </a>
            <a href="Carrinho"> Carrinho </a>
            <a href="Promocao"> Promoção </a> 
        </Navegacao>
    </>
}