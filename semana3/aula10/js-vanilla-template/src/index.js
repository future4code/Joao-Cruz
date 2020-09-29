const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//a. true

console.log("e. ", typeof resultado)
// boolean
let array
console.log('a. ', array)
//a. [0]

array = null
console.log('b. ', array)
//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. [0]

array[i+1] = 19
console.log('e. ', array)
//e [2]
const valor = array[i+6]
console.log('f. ', valor)
//f. [7]


let idade = Number.parseInt(window.prompt("Qual e sua idade ?"));
console.log(idade);
let idadeAmigo = Number.parseInt(window.prompt("Qual e a idade do seu amigo?"));
console.log(idadeAmigo);
typeof(idade);
if (idade > idadeAmigo); {
   console.log("false");
} if(idadeAmigo > idade);{
    console.log("true");
}
let ListADeTarefas;
prompt("diga a primeira tarefa?");
ListaDeTarefas[0] = console.log[0]
prompt("diga a segunda tarefa?");
ListaDeTarefas[1] = console.log[1]
prompt("diga a terceira tarefa?");
ListaDeTarefas[2] = console.log[2]

let email= window.prompt("Digite um e-mail");
console.log("Seja bem vindo" + email);