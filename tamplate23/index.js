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
let turno = prompt ("qual é o turno qem que vc estuda ? digitar M (matutino) ou V (Vespertino) ou N (Noturno).")
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
