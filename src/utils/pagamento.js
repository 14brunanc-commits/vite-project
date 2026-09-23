export function cartaoEhRepetido(cartao) {
  const numero = cartao.replace(/[\s-]/g, "")

  return /^(\d)\1{15}$/.test(numero)
}