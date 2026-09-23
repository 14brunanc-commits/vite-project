import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cartaoEhRepetido } from "../utils/pagamento"

export function usePagamento() {
  const [processando, setProcessando] = useState(false)
  const navigate = useNavigate()

  async function processarPagamento(dados) {
    setProcessando(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    if (cartaoEhRepetido(dados.cartao)) {
      navigate("/falha")
    } else {
      navigate("/sucesso")
    }

    setProcessando(false)
  }

  return {
    processando,
    processarPagamento,
  }
}