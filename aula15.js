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
 let emoji = require('node-emoji')
 
 function perguntasClientes() {
  rl.question("Qual produto você procura?", function resposta (resposta) {
    let encontrado = false
    let produto = 0
    for (i= 0; i < produtos.length; i++) {
     if (resposta === produtos[i].nome) {
       encontrado = true
       produto = i
       console.log(`Yay! Temos seu produto ${chalk.blue(resposta)}!`)
        rl.question(`Qual a quantidade de ${chalk.blue(resposta)} deseja levar?`, function quantidade (quantidade) {
        if (quantidade >= 1 && quantidade <= produtos[produto].quantidade) {
            console.log(`Temos a quantidade disponível. O valor da compra é R$ ${chalk.green(produtos[produto].preco * quantidade /100)} reais`)
            rl.question("Deseja pagar agora?", function compra (compra) {
              if (compra === "Sim" || compra === "sim") {
                console.log("Sua compra foi confirmada. Obrigado");
                  rl.close();
              } else {
                console.log("Ok. Adicione o produto ao carrinho e conclua sua compra mais tarde.");
                rl.close();
              }
              
            })
 
        } else {
            rl.question(`A quantidade máxima deste produto no estoque é  ${produtos[produto].quantidade}. Ainda deseja levar?`, function confirma (confirma) {
              if (confirma === "Sim" || confirma === "sim") {
                console.log("Sua compra foi confirmada. Obrigado!");
                  rl.close();
              } else if (confirma === "Não" || confirma === "não") {
                console.log("Que pena! Tente novamente em outra ocasião!");
                rl.close();
              }
              
          })
         }
      }) 
   }
   
  }
   
   if (!encontrado) {
      console.log(`Não temos o produto ${chalk.red(resposta)}`)
      
      rl.question("Deseja procurar outro produto?", function outro (outro) {
        if (outro === "Não" || outro === "não") {
          console.log("Ok, tente novamente outro dia");
          rl.close();
        } else if (outro === "Sim" || outro === "sim") {
          perguntasClientes(); 
        }
   })
   
  
  }


})

  
 }

 perguntasClientes();