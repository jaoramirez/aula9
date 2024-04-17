/*let idade 
let idadeAmigo
let diferençadeidade

idade = prompt("Qual é a sua idade?")
idadeAmigo = prompt("Qual é a idade do seu amigo")

resultado = idade >= idadeAmigo
alert(`sua idade é mairo que a do seu amigo? ${resultado}`)

diferençadeidade = idade - idadeAmigo
alert(`a difereça de idade é ${diferençadeidade}`)*/

//let numeroUm 

//numeroUm = prompt("Digite um número par:")

//console.log((numeroUm % 2)== 0)

/*let idadeAnos 
idadeAnos = Number(prompt("quantos anos você tem ?"))
//idade em meses
alert(idadeAnos * 12)
// idade em dias 
alert(idadeAnos * 365)
//idade em horas 
alert(idadeAnos * 8766)*/

let num1
let num2
num1 = Number(prompt("Escolha um númer:"))
num2 = Number(prompt("Escolha outro númer:"))

resultado = num1 >= num2 
alert(`O primeiro numero é maior que segundo? ${resultado}`)

resultado2 = num1 === num2
alert(`O primeiro numero é igual ao segundo? ${resultado2}`)
 
resultado3 = (num1 % num2) == 0 
alert(`O primeiro numero é divisível pelo segundo? ${resultado3}`) 

resultado4 = (num2 % num1) == 0
alert(`O segundo numero é divisível pelo primeiro? ${resultado4}`)
