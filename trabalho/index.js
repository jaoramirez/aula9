
//aqui vai ir o nome do usuario do banco de dados, tem que estra fora para ser global 

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
    let nome = prompt("Digite seu nome:")
    let idade = prompt("Digite sua idade:")
    let peso = prompt("Digite seu peso:")
    let sangue = prompt("Digite seu tipo sanguíneo:")
    let data = prompt("Digite sua data de doação:")
}alert(`${nome}\n${idade} anos\n${peso} kg\n${sangue}\n${data}`)
 
listaDoadores.push(nome)

function listaDoadores(){
  let mensagem = ''
  mensagem += alert(`${nome}`)
}

function buscarPorSangue(){
let mensagem = ""
 mensagem = prompt("Digite o tipo sanguíneo que deseja procurar:")

}

function main(){
  let option = 0
  while(option !== 5 ){
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
        break
    }
  }
}

//Chama função principal
main()
