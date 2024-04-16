//let a 
//let b
//let c
//let resultado 

//Leitura de dados informados pelpo úsuario
//a = true
//b = false
//c = true

//teste de comparação
//resultado = a && b
//alert(resultado)

//resultado = b && c 
//alert(resultado)

//resultado = a && c 
//alert(resultado)

//resultado = a && b && c 
//alert(resultado)

//resultado = a || b
//alert(resultado)

//resultado = b || c
//alert(resultado)

//resultado = a || c
//alert(resultado)

//resultado = a || b || c
//alert(resultado)

let nome
let anoNascimento
let anoAtual
let idade
let maiorIdade
let idade2050

nome = prompt("Qual é o seu nome ?")
anoNascimento = prompt("Que ano em que você nasceu ?")
anoAtual = prompt("Que anos estamos?")

idade = anoAtual - anoNascimento
maiorIdade = idade >= 18
idade2050 = 2050 - anoNascimento

alert("seu nome é "${nome})
alert("Você tem "${idade})
alert("É maior de idade?" ${maiorIdade})
alert(idade2050)
