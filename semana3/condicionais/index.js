const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//condicional se o numero apresentado dividido por 2 sobrar 0 passou se não reprova.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*
a. Para informar o valor da fruta escolhida
b."O preço da maçã é R$ 2.25
c. mostraria o valor da pêra e do default
O preço da pêra é R$ 5.5
5
*/
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
/*
a- esta dizndo que a varíavel informada e um número
b. se o número fosse 10 seria "Esse número passou no teste", se fosse -10 não apareceria nada.
c. a varíavel menssagem foi decdlarada apenas no escopo do if, não em escopo global.
*/
//exercício 5
const numero = Number(prompt("Digite a idade."));
if(numero > 18){
    console.log("Pode dirigir");
} else(numero <18){
    console.log("Não pode dirigir");
}
//exercicio 6
let idade = Number(prompt("Digite a idade."));
let permicividade
switch (idade){
    case idade<18:
    permicividade === false;
    console.log("Não pode dirigir")
    break;
    switch (idade){
        case idade>18:
        permicividade === true;
        console.log("Pode dirigir");
        break;
}}

//exercício 7
const filme = prompt("Qual e o gênero");
let valor = Number (prompt('Qual é o valor ?'));
if (filme === "fantasia" && valor < 15,00 ){
    console.log("Filme aprovado");
} else{
    console.log("Escolah outro filme");
}
