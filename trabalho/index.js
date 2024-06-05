
//aqui vai ir o nome do usuario do banco de dados, tem que estra fora para ser global 

let usuario = []

function imprimeMenu(){
  let mensagem = ""
  mensagem += "==================================\n"
  mensagem += "Digite um número de acordo com a opção:\n"
  mensagem += "==================================\n"
  mensagem += "1- Cadastrar pessoa ;\n"
  mensagem += "2- Lista de doadores ;\n"
  mensagem += "3- Buscar doador por tipo sanguíneo ;\n"
  mensagem += "4- Buscar doador por data de última doação ;\n"
  mensagem += "5- Sair;\n"
  mensagem += "==================================\n"
  let opcao = Number(prompt(mensagem))
  return opcao 
}

function cadastraUsuario(){
    nome = prompt("Digite seu nome:"),
    idade = prompt("Digite sua idade:"),
    peso = prompt("Digite seu peso:"),
    sangue = prompt("Digite seu tipo sanguíneo:"),
    data = prompt("Digite sua data de doação:")
    usuario.push({nome, idade, peso, sangue, data})
    alert(`${nome}\n${idade} anos\n${peso} kg\n${sangue}\n${data}`)
}

function listaDoadores(){
    let mensagem = ""
    mensagem += "LISTA DE DOADORES:\n"
    mensagem += "Nome: Jéssica Rost,  Idade: 30 anos, Tipo sanguineo: A-,  Peso: 70kg \n"
    mensagem += "Nome: Pedro Rosa,    Idade: 19 anos, Tipo sanguineo: 0-,  Peso: 80kg \n"
    mensagem += "Nome: Gustavo silva, Idade: 24 anos, Tipo sanguineo: AB-, Peso: 63kg \n"
    mensagem += "Nome: laura Costa,   Idade: 49 anos, Tipo sanguineo: B+,  Peso: 59kg \n"
    for (let doador of usuario){
      mensagem = mensagem + `Nome; ${doador.nome},   Idade: ${doador.idade},   Tipo sanguineo: ${doador.sangue},  Pesso: ${doador.peso}kg \n`
  }
  alert(mensagem)
 }

function buscarPorSangue(){
let mensagem = ""
 mensagem = prompt("Digite o tipo sanguíneo que deseja procurar:")
}

function main(){
  let option = 0
  while(option !== 5){
    option = imprimeMenu()
    switch(option){
      case 1:
        cadastraUsuario()
        break;
      case 2: 
        listaDoadores()
        break; 
      case 3:
       buscarPorSangue()
       break;

      default:
        break;
    }
  }
}

//Chama função principal
main()
