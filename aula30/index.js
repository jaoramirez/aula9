//atividade1 
/*1. Leia o código abaixo
    
``jsx
function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
``

//a) O que vai ser impresso no console? 10 50 

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? não apareceria nad apois não teria como mostrar no terminal */

//atividade2
/*let textoDoUsuario = prompt("Insira um texto")

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/
//mostra se a frase e verdadeira quanfo tem a palavra cenoura 

function usuario(){
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")
let endereço = prompt("Qual o seu endereço?")
let profissao = prompt ("Qual é a sua profissão?")
alert(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)
}
usuario()