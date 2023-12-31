import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Inicio from "./pages/Inicio"
import Vitrine from "./pages/Vitrine"
import Produto from "./pages/Produto" 
import Promocao from "./pages/Promocao" 

import Carrinho from "./pages/Carrinho"
import Explorar from "./pages/Explorar"
import Video from "./pages/Video" 
import Painel from "./pages/Painel" 

export default function Rotas() {
    return <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <Vitrine/> }/> 
        <Route index path="/vitrine" element={ <Vitrine/> }/>
        <Route path="/produto/:codigo" element={ <Produto/> }/> 
        <Route path="/promocao" element={ <Promocao/> }/>
        <Route path="/carrinho" element={ <Carrinho/> }/> 
        <Route path="/explorar" element={ <Explorar/> }/>
        <Route path="/video/:codigo" element={ <Video/> }/> 
        <Route path="/painel" element={ <Painel/> }/>
      </Routes>
    </BrowserRouter> 
}