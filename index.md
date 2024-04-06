Link pra acessar aqui = fronteditor.dev/nlw-unite

#HTMl

*Hypertext*
<a href="https://google.com">google.com</a> " É uma tag que pode clicar, quando clicalr ele manda pra outro navegador é um Link

*Markup*
<h1> título </h1>; "Tag é comsiderada uma linha, e voçê da  uma instrução pra ela 'um texto'"

<form> // serve para agrupar ideias de formularios, campos  
 <fieldset> 
  <legend>
  </legend> // serve para ter um textinho 
  <div>serve pra agrupar outras tags;
         <input type="text"// serve para escrever 
          placeholder="Nome Completo" // 
 </fieldset> // conjunto de cantos
</form>

<table> "table => Criar uma tabela"
 <thead> "thead => Cabeçalho da table"
     <tr>  " tr =>  Cada uma das linhas"
       <th> " th => nomes
       </th>
    </tr>
</thead>
  <tbody> "Corpo da table
   <tr> // linhas
     <td> // informações que eu quero ver em cada parte da table
        <Strong> // deixa o nome em negrito
        Diego Fernandes
        </Strong>
        <br> // quebra de linha
        <small>
          diego@gmail.com
        <small>
     </td>
     <td>Há 3 dias </td>
     <td>Há 3 minutos</td>
    </tr> 
   </tbody>
 </table>




#JavaScript
```js;
//variaveis
const mensagem = `oi, tudo bem?`;
// tipos de dados
  // number
  //string
// funcao
alert(mensagem)  

-----------------------------------------
// objeto javascript
 const participante = { 
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 25, 22, 00)

 }
 // Array
 let participantes = [
{   nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 25, 22, 00)
}
                    ]
// Estrutura de repetição - loop
let output = "";

    for(let participante of participantes){
      output = output + criarNovoParticipante(participante)
    }
      


# CSS 
Cascading StyleSheet
