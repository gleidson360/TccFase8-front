import axios from "axios"

export default function SalvarConteudo(conteudo) {
    return axios({
    method: "POST",
    url: "http://localhost:4000/conteudo",
    data: {
      capa: conteudo.capa,
      video: conteudo.video,
      titulo: conteudo.titulo,
      descricao: conteudo.descricao,
      linguagem: conteudo.linguagem,
  
    }
})
}