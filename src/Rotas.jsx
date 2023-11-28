import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Carrinho from "./pages/Carrinho"

export default function Rotas() {
    return <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <Inicio/> }/> 
        {/* <Route index path="/vitrine" element={ <Vitrine/> }/> */}
        {/* <Route path="/produto/:codigo" element={ <Produto/> }/> */}
        <Route path="/carrinho" element={ <Carrinho/> }/>
        {/* <Route path="/explorar" element={ <Explorar/> }/> */}
        {/* <Route path="/video/:codigo" element={ <Video/> }/>  */}
        {/* <Route path="/painel" element={ <Painel/> }/>  */}
      </Routes>
    </BrowserRouter> 
}