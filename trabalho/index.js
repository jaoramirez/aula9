
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
    sangue = (prompt("Digite seu tipo sanguíneo:")).toUpperCase(),
    data = prompt("Digite sua data de doação:mm/dd/aa")
    usuario.push({nome, idade, peso, sangue, data})
    alert(`${nome}\n${idade} anos\n${peso} kg\n${sangue}\n${data}`)
}

function listaDoadores(){
    let mensagem = ""
    mensagem += "------------------------\n"
    mensagem += "LISTA DE DOADORES:\n"
    mensagem += "------------------------\n"
    mensagem += "Nome: Jéssica Rost,  Idade: 30 anos, Tipo sanguineo: A-,  Peso: 70kg \n"
    mensagem += "Nome: Pedro Rosa,    Idade: 19 anos, Tipo sanguineo: 0-,  Peso: 80kg \n"
    mensagem += "Nome: Gustavo silva, Idade: 24 anos, Tipo sanguineo: AB-, Peso: 63kg \n"
    mensagem += "Nome: laura Costa,   Idade: 49 anos, Tipo sanguineo: B+,  Peso: 59kg \n"
 
    //CODIGO TESTE - DELETAR DEPOIS
    //mensagem += completaEspacos(30,usuario[0].nome) + "|"
    //mensagem += completaEspacos(9,usuario[0].idade) + "|\n"

    for (let doador of usuario){
     mensagem = mensagem + `Nome: ${doador.nome} |Idade: ${doador.idade} |Tipo sanguineo: ${doador.sangue} |Pess: ${doador.peso}kg | Data: ${doador.data}\n`
  }
  alert(mensagem)
 }

 //function completaEspacos(tam,prop){
 // let strTratada = prop
 // let espFalt = tam - prop.length 
 // for(let i=0; i <= espFalt; i++) {
 //     strTratada = strTratada + "_"
// }
// return strTratada
//}
//fica de curiosodade 
//tentar fazer funsionar

function buscarPorSangue(){
 if (usuario.length === 0){
  alert("Não existe doadores com este tipo de sanguíneo!")
 } else {const buscarTipoSanguineo = prompt("Digite o tipo sanguíneo:").toUpperCase()

 let mensagem = ``
for (let doador of usuario){
  if (doador.sangue.includes(buscarTipoSanguineo)){
  mensagem += `\n Doador: ${doador.nome}\n Idade: ${doador.idade}\n Peso: ${doador.peso}\n Tipo Sanguíneo: ${doador.sangue}`
    }
   }
  alert(mensagem);
 }
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
      case 4:
        bucasrPorData()
        break;
      default:
        break;
    }
  }
}

//Chama função principal
main()
