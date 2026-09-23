import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
/*import { cartaoEhRepetido } from "../utils/pagamento"*/
import { usePagamento } from "../hooks/usePagamento"
import produtos from "../data/produtos"
import ResumoCompra from "../components/ResumoCompra"
import { useNavigate } from "react-router-dom"

const schemaPagamento = z.object({
    titular: z.string().min(1, "Informe o titular do cartão"),

    cartao: z.string().refine(
        (valor) => {
            const numero = valor.replace(/[\s-]/g, "")
            return /^\d{16}$/.test(numero)
        },
        "O cartão deve ter 16 dígitos"
    ),

    validade: z.string().regex(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Use o formato MM/AA"
    ),

    cvv: z.string().regex(
        /^\d{3}$/,
        "O CVV deve ter 3 dígitos"
    ),
})

function Pagamento() {
    const navigate = useNavigate()
    const { processando, processarPagamento } = usePagamento()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaPagamento),
    })

    function onSubmit(dados) {
        processarPagamento(dados)
    }

    return (
        <main>
            <h1>Pagamento</h1>
            <ResumoCompra produtos={produtos} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="titular">Titular do cartão</label>

                    <input
                        id="titular"
                        type="text"
                        aria-invalid={errors.titular ? "true" : "false"}
                        aria-describedby={errors.titular ? "titular-error" : undefined}
                        {...register("titular")}
                    />

                    {errors.titular && (
                        <p id="titular-error" role="alert">
                            {errors.titular.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="cartao">Número do cartão</label>

                    <input
                        id="cartao"
                        type="text"
                        inputMode="numeric"
                        aria-invalid={errors.cartao ? "true" : "false"}
                        aria-describedby={errors.cartao ? "cartao-error" : undefined}
                        {...register("cartao")}
                    />

                    {errors.cartao && (
                        <p id="cartao-error" role="alert">
                            {errors.cartao.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="validade">Validade</label>

                    <input
                        id="validade"
                        type="text"
                        placeholder="MM/AA"
                        inputMode="numeric"
                        aria-invalid={errors.validade ? "true" : "false"}
                        aria-describedby={errors.validade ? "validade-error" : undefined}
                        {...register("validade")}
                    />

                    {errors.validade && (
                        <p id="validade-error" role="alert">
                            {errors.validade.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="cvv">CVV</label>

                    <input
                        id="cvv"
                        type="text"
                        inputMode="numeric"
                        aria-invalid={errors.cvv ? "true" : "false"}
                        aria-describedby={errors.cvv ? "cvv-error" : undefined}
                        {...register("cvv")}
                    />

                    {errors.cvv && (
                        <p id="cvv-error" role="alert">
                            {errors.cvv.message}
                        </p>
                    )}
                </div>


                <button type="submit" disabled={processando}>
                    {processando ? "Processando compra…" : "Pagar"}
                </button>
                
                <button type="button" onClick={() => navigate("/")}>
                    Voltar para o carrinho
                </button>
            </form>
        </main>
    )
}

export default Pagamento