/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

 let produtos = [
  { nome: "cupcake",
    preco: 1500,
    quantidade: 30

  },

  { nome: "pão de queijo",
    preco: 300,
    quantidade: 100

  },

  { nome: "cafezinho",
    preco: "500",
    quantidade: 500

  },

  { nome: "broa de milho",
    preco: 300,
    quantidade: 100
  }

 ];

 const chalk = require('chalk')

 function perguntasClientes() {
  rl.question("Qual produto você procura?", function resposta (resposta) {
    let encontrado = false
    for (i= 0; i <= produtos.length; i++) {
     if (resposta === produtos[i].nome) {
       encontrado = true
       console.log(`Yay! Temos seu produto ${chalk.blue(produtos[i].nome)}!`)
     } 
   }
   if (!encontrado) {
      console.log(`Não temos o produto ${chalk.red(resposta)}`)
   }
   rl.close()
  })
  
 }

 perguntasClientes();