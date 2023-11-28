import React, {useState, useEffect} from "react"
import Navegacao from "../components/Navegacao"
import ProdutosExemplo from "../datas/ProdutosExemplo"
import Janela from "../components/Janela"
import ObterCarrinho from "../functions/ObterCarrinho"
import Pagamento from "../functions/pagamento"

export default function Carrinho(){
  const [ carrinho, definirCarrinho ] = useState([])
  useEffect(function() {
    const resultado = ObterCarrinho() 
    definirCarrinho(resultado)
  }, [])
  carrinho.map(function(codigo, indice) {
    for (const produto of ProdutosExemplo) {
      if (produto.codigo == codigo)
      return <tr key={ indice }>
          <td> { produto.codigo } </td>
          <td> { produto.modelo } </td>
          <td> R$ { produto.preco }.00 </td>
      </tr>
    }
  })
  const [ preco, definirPreco ] = useState(0)
  useEffect(function() {
    var total = 0
    carrinho.map(function(codigo) {
      for (const produto of ProdutosExemplo)
      if (produto.codigo == codigo)
      total += parseInt(produto.preco)
    })
    definirPreco(total)
  }, [carrinho])
  return<>
    <Navegacao titulo="VITRINE">
    <a href="/"> Início </a>
    <a href="/promocao"> Promoção </a>
    <a href="/carrinho"> Carrinho </a>
    <Janela>
    <table width="100%">
      <tbody>
        <tr>
          <td> Código </td>
          <td> Modelo do Produto </td>
          <td> R$ 1.000,00 </td>
        </tr>
      </tbody>
    </table>
      <h1> Total R$ {preco},00 </h1>
      <button onClick={Pagamento}> Pix </button>
    </Janela>
    </Navegacao>
  </>
}