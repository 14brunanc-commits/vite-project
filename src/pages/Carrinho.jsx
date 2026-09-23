import produtos from "../data/produtos"
import ItemCarrinho from "../components/ItemCarrinho"
import ResumoCompra from "../components/ResumoCompra"
import { Link } from "react-router-dom"

function Carrinho() {
  return (
    <main>
      <h1>Meu carrinho</h1>

      <section>
        {produtos.map((produto) => (
          <ItemCarrinho
            key={produto.id}
            produto={produto}
          />
        ))}
      </section>

      <ResumoCompra produtos={produtos} />

      <Link to="/pagamento">
        Finalizar compra
      </Link>
    </main>
  )
}

export default Carrinho