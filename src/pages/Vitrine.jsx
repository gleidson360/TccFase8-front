import React from "react";
import Navegacao from "../components/Navegacao";
import PrincipalLoja from "../components/PrincipalLoja";
import ProdutosExemplo from "../datas/ProdutosExemplos";

export default function Vitrine() {
    return <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Inicio </a>
            <a href="Carrinho"> Carrinho </a>
            <a href="Promocao"> Promoção </a> 
            <a href="/explorar"> Grátis </a>
        </Navegacao>

        <PrincipalLoja produtos={ ProdutosExemplo }/>
    </>
}