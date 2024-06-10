
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
  //faz voltar para as outras opções
 }

 function cadastraUsuario(){
    nome = prompt("Digite seu nome:"),
    idade = prompt("Digite sua idade:"),
    peso = prompt("Digite seu peso:"),
    sangue = (prompt("Digite seu tipo sanguíneo:")).toUpperCase(),
    data = prompt("Digite sua data de doação: mm/dd/aa")
    usuario.push({nome, idade, peso, sangue, data}) 
    // O push serve para colocar as informações dentro do objeto 
    alert(`${nome}\n${idade} anos\n${peso} kg\n${sangue}\n${data}`)
  }

 function listaDoadores(){
  //let para decrarar algo 
    let mensagem = ""
    mensagem += "------------------------\n"
    mensagem += "LISTA DE DOADORES:\n"
    mensagem += "------------------------\n"
 //a mensgem servepara mostrar oque etsa escrito
    for (let doador of usuario){
     mensagem = mensagem + ` |Nome: ${doador.nome}\n |Idade: ${doador.idade}\n |Tipo sanguineo: ${doador.sangue}\n |Pess: ${doador.peso}kg \n | Data: ${doador.data}\n------------------------\n`
  }
  alert(mensagem)
 }
 
 function buscarPorSangue(){
 if (usuario.length === 0){
  alert("Não existe doadores registrados!")
 } 

 const buscarTipoSanguineo = prompt("Digite o tipo sanguíneo que deseja buscar:").toUpperCase()
 let existe = false
 let mensagem = ``

  for (let doador of usuario){
  // colocar oque é includs
    if (doador.sangue.includes(buscarTipoSanguineo)){
   //if/else são blocos que permitem fazer uma condicional Eles recebem uma condição e o código
   // ○ do if é executado se a condição for true
   // ○ do else é executado se a condição for false
    
      mensagem +="Lista de doadores do tipo sanguíneo desejado:\n"
      mensagem +="----------------------------------------------------\n"
      mensagem =  mensagem + ` | Doador: ${doador.nome}\n | Idade: ${doador.idade}\n | Peso: ${doador.peso}kg\n | Tipo Sanguíneo: ${doador.sangue}\n------------------------\n`
      existe = true
    } 
  }
  if(!existe){
    mensagem = "Não há nenhum doador registrado com esse tipo sanguíneo!!"
  }
 alert(mensagem)
 }


 function buscarPorData(){
    if (usuario.length === 0){
     alert("Não existe doadores registrados!!")
     return// retorna a função
    } 

    const buscarData = prompt("Digite o mês que deseja buscar:")
   let existe = false
    let mensagem = ``

   for (let doador of usuario){//for… of… : Permite percorrer os elementos de um array de uma forma bem mais simples de se ler
     if (doador.data.includes(buscarData)){
        mensagem +="Lista de doadores na data desejada:\n"
        mensagem +="----------------------------------------------------\n"
        mensagem =  mensagem + ` | Doador: ${doador.nome}\n | Idade: ${doador.idade}\n | Peso: ${doador.peso}kg\n | Tipo Sanguíneo: ${doador.sangue}\n | Data: ${doador.data}\n------------------------\n`
        existe = true
      }
    }
    if(!existe){
      mensagem = "Nenhum doador encontrado nessa data de doação!!"
    }
   alert(mensagem)
 }
 // função é um bloco de codigo que pode sere chamdo apartir de seu nome 
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
        buscarPorData()
        break;
      case 5:
        alert ("Saindo do sistema!")
        break;
      default:
        alert("Opção invalida, tentar novamente.")
        break;
    }
  }
 }

 //Chama função principal
 main()

//● Numbers: representam números
//● Strings: representam texto
//● Boolean: são tipos que recebem apenas dois valores: /verdadeiro (true) ou falso (false)
// typeof: permite ver o tipo do valor de uma variáve