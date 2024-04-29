//1
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Realiza o tetse se o numerp é par 
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// se for par 
//c) Para que tipos de números a mensagem é "Não passou no teste"?
// se não for par

//2
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//a) Para que serve o código acima?
// Para escolher uma fruta e no final mostra a fruta e o seu valor 
//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//"O preço da fruta maça é R$2.25"
//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Nenhuma

//3
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//a) O que a primeira linha está fazendo?
//pedindo para escrever un número
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//se ele escrever o numero 10 a mensagem será "Esse número passou no teste", se ele escrever o numero -10 a mensagem será O preço da fruta  Pêra  é  R$  5
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//sim pois tem o let mensagem
//se ele escrever um número negatripo sim, pois o código não tem um else para der a resposta de uma outra alternatriva alem de um nunmero possitivo 

//1
/*let idade = Number(prompt("Quantos anos vc tem?"))
if (idade >= 18){
   alert('Pode dirigir')
}else{
   alert('Não pode dirigir')
}*/

//2
/*let turno = prompt ("qual é o turno qem que vc estuda ? digitar M (matutino) ou V (Vespertino) ou N (Noturno).")
if ( turno == "M" ){
    alert("Bom Dia!!")
}else if (turno == "V" ){
    alert("Boa tarde!!")
}else if (turno == "N") {
    alert("Boa Noite!")
}*/

//3
/*let turno = prompt ("qual é o turno qem que vc estuda ? digitar M (matutino) ou V (Vespertino) ou N (Noturno).")
switch (turno){
case 'M' :
    alert("Bom Dia!!")
    break
case 'V' :
    alert("Boa tarde!!")
    break
case 'N' :
   alert("Boa Noite!")
}
*/
//4
/*let filme = prompt("Qual gênero de filme você gostria de ver ?")
let valor = Number(prompt("Qual o valor do ingresso?")) 
filme = filme.toUpperCase()

if ((filme === 'FANTASIA') && (valor < 15)){
  alert ("Bom filme !!!")
}else{
  alert('Escolha outro filme')
}*/
//1
/*let numero = Number(prompt("Escreva um numero:"))
let soma = 0
while(numero !== 0){
  soma = soma + numero
  numero = Number(prompt('Escrva outro numero'))
}
alert(soma)*/

/*let array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
 for(let i = 0; i < 6; i++) {
     if( array[i] > maiorNumero){
     maiorNumero = array[i]
     }
}
alert(maiorNumero)*/

//4
/*const palavras = ["Oi","sumida","tudo","bem?","Saudades"]
let frase = ""

for (let indices of palavras){
  frase = frase + indices + " "
}
alert(frase)*/

//exercicio 1
/*let valor = 1
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/
//10
//

// exercicio 2 
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/
//a) O que vai ser impresso no console?
//Os numeros maiores de 18

//exercicio 3 
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
// exercicio 1
/*let bichos = Number(prompt("Quantos bichinhos de estimação você tem"))
let pragas = []
let frase = ""

if (bichos == 0){
  alert( "Que pena! Você pode adotar um pet!")
} else if (bichos > 0){
  for (let i = 0; i < bichos; i = i + 1){
    nome = prompt("Qual o nome das suas pragas?")
    pragas.push(nome)
  }
}
for (let percorrer of pragas){
  frase = frase + percorrer + ", "
}
alert(frase)*/

// exercicio 2

//a) Imprimir cada valor do array original:
/*const arrayOriginal = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(arrayOriginal[i]);
}*/

//b) Imprimir cada valor do array original dividido por 10:
/*const arrayOriginal = [10, 20, 30, 40, 50];
for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(arrayOriginal[i] / 10);
}*/

/*c) Criar um novo array contendo somente os números pares do array original e imprimir esse novo array:
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];
for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] % 2 === 0) {
    numerosPares.push(arrayOriginal[i]);
  }
}
console.log(numerosPares);*/

//d) Criar um novo array contendo strings no formato "O elemento do índex i é: numero" e imprimir este novo array:
/*const arrayOriginal = [10, 20, 30, 40, 50];
const stringsFormatadas = [];
for (let i = 0; i < arrayOriginal.length; i++) {
  stringsFormatadas.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`);
}
console.log(stringsFormatadas);*/

/*e) Imprimir o maior e o menor números contidos no array original:
const arrayOriginal = [10, 5, 20, 30, 15];
let maior = arrayOriginal[0];
let menor = arrayOriginal[0];
for (let i = 1; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] > maior) {
    maior = arrayOriginal[i];
  }
  if (arrayOriginal[i] < menor) {
    menor = arrayOriginal[i];
  }
}
console.log(`Maior número: ${maior}, Menor número: ${menor}`);*/
