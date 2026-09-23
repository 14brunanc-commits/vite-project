import { Link } from "react-router-dom"

function Sucesso() {
  return (
    <main>
      <h1>Compra aprovada!</h1>

      <p>Sua compra foi realizada com sucesso.</p>

      <Link to="/">
        Voltar para o carrinho
      </Link>
    </main>
  )
}

export default Sucesso