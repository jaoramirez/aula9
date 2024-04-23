//Exercício 1 e 2
/*let num1 = prompt("Escolha um número:")
let num2 = prompt("Escolha outro número:")

if (num1 === num2){
alert("Parabens, os números são iguais!!!")
} else { 
alert("Eles não são iguais!")
}
*/
// Exercício 3 
/*let num1 = prompt("Escolha um número:")
let num2 = prompt("Escolha outro número:")

if (num1 === num2){
alert("Parabens, os números são iguais!!!")
} else if (num1 <= num2){
alert ("O segundo é maior que o primeiro!!")
} else {
alert("O primeiro é maior que o segundo!!")
}*/

//Exercício 4 
/*let PokemonInicial = prompt("Escolha um dos três pokemons iniciais:")
switch (PokemonInicial){
    case 'Bulbasauro':
        console.log('Tipo planta')
        alert('Tipo plata')
        break
    case 'Charmander':
        console.log('Tipo fogo')
        alert('Tipo fogo')
        break 
    case 'Squrtle':
        console.log('Tipo água')
        alert('Tipo água')
        break
}*/

//Exercício 5 
let con1 = prompt("Você concluiu o ensino médio ? SIM - NAO")
let con2 = prompt("Tem mais de 18 anos ? SIM - NAO")
let con3 = prompt("Não esta cursando outra faculdade ? SIM - NAO")

if ((con1 == "SIM") && (con2 == "SIM") && (con3 == "NAO")) {
    alert('Pode entrar na faculdade')
} else {
    alert('Não pode entrar na faculdade')
}
