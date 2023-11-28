export default function ObterCarrinho(resultado) {
  const lista = JSON.parse(resultado || "[]") 
  return lista
}