
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
      alert(`${nome}\n${idade} anos\n${peso} kg\n${sangue}\n${data}`)
  }
  
  function listaDoadores(){
    let mensagem = ""
    let nome 
    mensagem += "1- Ana Clara \n 2- Carlos Alberto \n 3- Vito Gustavo \n 4- Maria Vitória \n","5-",{nome}
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
          break
  
        default:
          break
      }
    }
  }
  
  //Chama função principal
  main()