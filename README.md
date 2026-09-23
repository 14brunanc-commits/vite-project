# Checkout React

Aplicação de checkout desenvolvida com React e Vite como parte da avaliação do curso.

## Funcionalidades

* Resumo do carrinho com produtos, quantidades e valores.
* Cálculo do total da compra.
* Formulário de pagamento.
* Validação dos dados utilizando React Hook Form e Zod.
* Validação do número do cartão com 16 dígitos.
* Validação da validade no formato MM/AA.
* Validação do CVV com 3 dígitos.
* Simulação de processamento da compra.
* Identificação de cartões com todos os dígitos repetidos.
* Página de sucesso para pagamentos aprovados.
* Página de falha para tentativas com números de cartão repetidos.
* Navegação entre as telas do checkout.

## Tecnologias utilizadas

* React
* Vite
* React Router
* React Hook Form
* Zod
* JavaScript
* JSX
* CSS

## Estrutura principal

```text
src/
├── components/
│   ├── ItemCarrinho.jsx
│   └── ResumoCompra.jsx
├── data/
│   └── produtos.js
├── hooks/
│   └── usePagamento.js
├── utils/
│   ├── formatarMoeda.js
│   └── pagamento.js
├── App.jsx
└── main.jsx
```

## Rotas

* `/` — Resumo do carrinho
* `/pagamento` — Formulário de pagamento
* `/sucesso` — Compra realizada com sucesso
* `/falha` — Falha no pagamento

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse o endereço disponibilizado pelo Vite no navegador.

## Fluxo de pagamento

O usuário inicia no resumo do carrinho e pode acessar a tela de pagamento.

Após preencher os dados corretamente, o sistema simula o processamento da compra. Se o número do cartão possuir todos os dígitos iguais, o usuário é direcionado para a página de falha. Caso contrário, é direcionado para a página de sucesso.
