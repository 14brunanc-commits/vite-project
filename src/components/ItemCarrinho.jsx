import { formatarMoeda } from "../utils/formatarMoeda"


function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade

  return (
    <article>
      <h2>{produto.nome}</h2>
      <p>Preço unitário: {formatarMoeda(produto.preco)}</p>
      <p>Quantidade: {produto.quantidade}</p>
      <p>Subtotal: {formatarMoeda(subtotal)}</p>
    </article>
  )
}

export default ItemCarrinho