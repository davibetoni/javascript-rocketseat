/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
  * receitas: []
  * despesas : []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo

*/

function CashFlow(revenues, expenses) {
  this.revenues = revenues
  this.expenses = expenses
}
const sum = (array) => {
  return array.reduce((a, b) => a + b, 0)
}
const balance = (revenue, expense) => {
  const total_balance = revenue - expense
  let message

  if (total_balance >= 0) {
    message = 'Saldo positivo: '
  } else {
    message = 'Saldo negativo: '
  }
  console.log(message + total_balance)
  return total_balance
}

const revenues = [100, 340.25, 1000, 400]
const expenses = [280, 398.50, 50]

const cashFlowFamily = new CashFlow(revenues, expenses)

const familyBalance = balance(sum(cashFlowFamily.revenues), sum(cashFlowFamily.expenses))