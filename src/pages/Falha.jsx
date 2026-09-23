import { Link } from "react-router-dom"

function Falha() {
  return (
    <main>
      <h1>Compra não aprovada</h1>

      <p>tentativa de golpe</p>

      <Link to="/pagamento">
        Tentar novamente
      </Link>
    </main>
  )
}

export default Falha