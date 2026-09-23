import { formatarMoeda } from "../utils/formatarMoeda"

function ResumoCompra({ produtos }) {
  const total = produtos.reduce(
    (acumulado, produto) =>
      acumulado + produto.preco * produto.quantidade,
    0
  )

  return (
    <section>
      <h2>Resumo da compra</h2>
      <p>Total: {formatarMoeda(total)}</p>
    </section>
  )
}

export default ResumoCompra