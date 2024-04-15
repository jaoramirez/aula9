// Receba as variáveis 
let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:") 
//MENSAGEN: Digite as horas que vc trabalha por dia 
let horasTrabalho = prompt("Digite as horas em que você trabalha por dia:")
let salarioDia = prompt("Digite o seu salário diário:")
// Verificando as variáveis 
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
// converte o que é nessesário 
let horasTrabNumber = Number(horasTrabalho)
let saldiasNumber = Number(salarioDia)
// processando valores
let valHoraNumber = horasTrabNumber/saldiasNumber
// Convesão para não dar erro no NULL
let valorHora = String(valHoraNumber)
const mensagem = "Seu valor hora e "+ valorHora + "!!!"
// Verificando variáveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saída de valores pra Front End
alert(mensagem)
