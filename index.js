 // Array
  let participantes = [
  {   nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
    },
    {
    nome: "Diego Machado",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 1, 20, 10, 21),
    dataCheckIn: null
  },
  {
    nome: "Laura Silva",
    email: "laura@gmail.com",
    dataInscricao: new Date(2024, 0, 15, 15, 45),
    dataCheckIn: new Date(2024, 0, 20, 9)
  },
  {
    nome: "Ana Paula",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 4, 10, 14, 30),
    dataCheckIn: new Date(2024, 4, 10, 9)
  },
  {
    nome: "Pedro Souza",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 6, 5, 17, 10),
    dataCheckIn: new Date(2024, 6, 5, 17)
  },
  {
    nome: "Lucas Ferreira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 3, 3, 21, 0),
    dataCheckIn: new Date(2024, 3, 3, 21)
  },
  {
    nome: "Carla Mendes",
    email: "carla@gmail.com",
    dataInscricao: new Date(2024, 8, 8, 12, 0),
    dataCheckIn: new Date(2024, 8, 8, 9)
  },
  {
    nome: "Mariana Santos",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 7, 7, 7, 30),
    dataCheckIn: new Date(2024, 7, 7, 9)
  },
  {
    nome: "Felipe Oliveira",
    email: "felipe@gmail.com",
    dataInscricao: new Date(2024, 10, 12, 11, 11),
    dataCheckIn: new Date(2024, 10, 12, 8)
  },
  {
    nome: "Tatiane Costa",
    email: "tatiane@gmail.com",
    dataInscricao: new Date(2024, 9, 1, 18, 18),
    dataCheckIn: new Date(2024, 9, 1, 10)
  }
  
]
 
 const criarNovoParticipante = (participante) => {
 
 const dataInscricao = dayjs(Date.now())
 .to(participante.dataInscricao)
 
 let dataCheckIn = dayjs(Date.now())
 .to(participante.dataCheckIn)
  //condicional
  if(participante.dataCheckIn == null ) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>`
  }
  return `
<tr>
  <td>
    <Strong> 
       ${participante.nome}
    </Strong>
    <br>
    <small>
       ${participante.email}
    </small>
  </td>
  <td> ${ dataInscricao} </td>
  <td>${ dataCheckIn}</td>
</tr> 
  `
} 
 
 
 
 const atualizarLista = (participantes) =>{
    let output = "";
    for(let participante of participantes){
      output = output + criarNovoParticipante(participante)
    }
   // substituir inforamação do HTML
   document
   .querySelector('tbody')// Pesquisa pelo seletor "O seletor não e nada mais do que a Tag 'th' exemplo"
   .innerHTML =  output } // arrow

 atualizarLista(participantes)

 const adicionarParticipante = (event) => {
  event.preventDefault() // ele nao deixa fazer o padrao,de inviar o formulario


// aqui vai pegar os dados do formulario
  const dadosDoFormulario = new FormData(event.target) // target é alvo "Quem e o alvo"

const participante = {
  nome: dadosDoFormulario.get('nome'),
  email: dadosDoFormulario.get('email'), 
 dataInscricao: new Date(),
 dataCheckIn: null
 }

// Verificar se o participante já existe
const participanteExistente = participantes.find(
  (p) => p.email == participante.email
 )  
    if(participanteExistente){
      alert('Email já cadastrado!')
        return
}
 
 participantes = [participante, ...participantes]
atualizarLista(participantes)

// limpar o formulario
event.target.querySelector('[name="name"]').value = "" //selector de atributo ou tag
event.target.querySelector('[name="email"]').value = ""
 }

 const fazerCheckIn = (event) => {
 
 // confirmar se realmente quer o check-in
 const  mensagenConfirmacao = 'Tem certeza que deseja fazer o chek-in'
 if(confirm(mensagenConfirmacao) == false){
  return
 }
 
  // encontra o participante dentro da lista
 const participante = participantes.find(
  (p) => p.email == event.target.dataset.email
 ) // find "encontrar"

 // atualizar o check-in do participante

participante.dataCheckIn = new Date()

 // atualizar a lista de participantes
 atualizarLista(participantes)
 
 }


 