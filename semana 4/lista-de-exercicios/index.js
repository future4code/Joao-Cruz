/* 1 exercicio
funcão conversosrDeMoeda(valorEmDolar){ "esta linha estabelece a funbção e já nos apresenta um dados do qualnos iremos precisar prencher valorEmDolar"
const contacao = number(prompt)("informe"...));"solicita a segunda informação,  no código ja converte o pedido em número ";
 return "R$"+ (valorEmDolar * cotacao); "nessa linha retorna a conta q  o valor em dolar informado no começo * o valor pedido na var cotação"
}
const meuDinheiro = convrsorDeMoeda(100); "call back da função converorDeMoeda na const meuDinheiro já informando valor"
console.log(MeuDinheiro) "imprimindo no console o resultado"
*/
/*2 exercicio-
    nomeia a função (investeDinheiro) e pede os seguintes dados (tipoDeInvestimento, e o valor)
    abre parenteses da função e declara a variável valorApósInvestimnto;
    apre um switch que para vincular ao codigo os tiupos de possibilidades as quais os dados fornecidos serão calculadas.
    apresenta 4 tipos de opções como "Poupanca" "RendaFixa 'CDB" "Ações"  ultima opção q informa ao usuário caso ele tenha escolhido opção invalida
    ao final retorna os ados já calculado de acordo com a opção solicitada.
    após o fechamento do último parenteses, são declaradas duas const de novos montantes, onde a primeira opção escolhe ações com o valor de 150 ( 150 * 1.1) e o segundo valor de 200 na opção tesouoro direto ("Tipo de investimento incorreto"), pois não há nenhum case como tesouro direto
    */
/*3
são declaradas 3 arrays, sendo a primeira com 14 numero, array 1 e array 2 com 0;
 apresentado condicional de if o numero da const numeros que for dividido por 2 e sobrar 0 da divisão, ser alocado no array 1, else ser alocado no array 2.
 primeiro console.log console.log   
array.numero 1 "7 numeros" [12, 64, 44, 84, 48, 14]
array.numero2 "8 numeros" [25, 55, 121, 11, 51, 73, 111, 283]

*/
/*4
 declarada const numeros com 25 numeros
 a primeira let informa que e = a infinito
 a segunda let informa que e igual a 0
  
 if (numero < numero1){
      numero1 = numero    "numero 1 e mutavel, todo elemento do array menor que ele e transormara nele percorrendo com toda const numero "
  }
  if (numero > numero2){
                                "todo elemento que passa do primeiro if por ser maior qu o numero1, chega ao numero 2 e caso seja maior que 0 se torna o numero2"
      numero2 = numero
  }
*/

/*

1
a) false
b) false
c)true
d) false
e) false
*/
2

let nmr = 70
let i = 0
for(i = 0; i<nmr*2; i++) {
    if(i % 2 == 0){
        array.push(i)
    }
    
    
}
//não consegui imaginar como faz isso com const quantidadeDeNumerosPares



console.log(array)

5
function criaRetangulo (lado1, lado2, base){
    
    if(lado1 === lado2 === lado3){
        console.log("Equilatero")
    } else if(lado1 === lado2 !== lado3){
        console.log("Isósceles")
    } else if(lado1 !== lado2 !== lado3){
        console.log("Escaleno")
    }
}

function funcao(a, b) {
    Maior(a,b) 
    Divisivel(a,b)
    dif(a,b)
    
        //i.
        function Maior(a,b) {
                if (a > b){
                    console.log(`maior é: ${a}`)
            } else {
                console.log(`maior é: ${b}`)                
            }    
        }  
        //ii.
        function Divisivel(a, b) {
            if (a % b == 0) {
                console.log( `${a}  divisivel por ${b}`)
            } else {
                console.log(`${a} não divisivel por ${b}`)            
            }         
            if (b % a == 0) {
            console.log( `${b} divisivel por ${a}`)            
        } else  {
            console.log( `${b} não é divisivel por ${a}`)}         
        }        
        // iii.
        function dif(a,b) {
            if (a > b) {
                console.log(a-b)
            } else {
                console.log(b-a)
            } 
}
funcao(10,200)

//1.

let list = [40,22,28,64,10,40,18,72,20,70,92,19]

function maior (array){
    let novoMaior = [list[0]]
    let m = list[0]
    for (x of array) {
        if (x > m){
            m = x
            novoMaior.push(x)
        }
    }
    let indice = novoMaior.length - 2
    
    console.log(`${novoMaior[indice]}, \n ${novoMaior}`) 
    
}

function menor(array){
    let novoMenor =[lista[0]]
    let m = lista[0]
    for(x of array){
        if (x < m){
            m = x
            novoMenor.push(x)
        }
    }
    let indice = novoMenor.length - 2
    
    console.log(`${novoMenor[indice]}, \n ${novoMenor}`)
    
    
}

maior(lista)
menor(lista)

//2
let ola = () => { return alert("Hello Future4")}

/*Objetos */
/*2*/
function criaRetangulo (lado1, lado2){
    let objt = {
        largura:lado1,
        altura: lado2,
        perimetro: permt(lado1,lado2),
        area: are(lado1, lado2)
    }
    return objt
}
function permt(a,b){
    return 2*(a+b)
}
function are(a,b){
    return a * b
}
console.log(criaRetangulo(2,10))}
/* 3*/
let favfilm = {
    name: "The Nightmare on Elm Street",
    year: 1986,
    director: "Wes Craven",
    actor: ["Robert Englund", "Heather Langenkamp", " Johnny Depp", " John Saxon", "Amanda Wyss"]
}

console.log(`Venha assistir ao filme ${favfilm.name}, de ${favfilm.year}, dirigito por
${favfilm.dirctor} estrelado por ${favfilm.actor}.`)

/*4*/
let idntdde = {
    nome: "João",
    sobrenome: "daCruz",
    idade: 25
}

function anonimizar(idntdde){
    let novaIdntdde = {
        ...idntdde,
        nome: "Annonnymous",
        sobrenome: "Annonnymous",
        idade: "Annonnymous"

    }
}
/*5*/
/* 1 */

let pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = pessoas.filter((adulto, i, array) => {
    if (adulto.idade >= 20) {
        return true
    }
    return false 
})

console.log(adultos)

const adolescentes = pessoas.filter((adolescente, i, array) => {
    if (adolescente.idade < 20) {
        return true
    }
    return false 
})

console.log(adolescentes)

/* 2 */
const arrayEx2 = [1, 2, 3, 4, 5, 6]

const multiplicadoPor2 = arrayEx2.map((numero, i, array) => {
    return numero * 2
})

const multiplicadoPor3 = arrayEx2.map((numero, i, array) => {
    return numero * 3
})

const parImpar = arrayEx2.map((numero, i, array) => {
    if (numero % 2 === 0) {
       return `${numero} é par` 
    } else if(numero % 2 !== 0) {
        return `${numero} é ímpar`
    }
})

/* 3 */
const parque = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const podemEntrar = parque.filter((autorizado, i, array) => {
    if ((autorizado.altura >= 1.5) && (autorizado.idade >= 14) && (autorizado.idade <= 60)) {
        return true
    }
    return false 
})

console.log(podemEntrar)

const proibidoEntrar = parque.filter((proibido, i, array) => {
    if ((proibido.altura < 1.5) || (proibido.idade < 14) || (proibido.idade > 60)) {
        return true
    }
    return false 
})

/* 5 */

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente, i, array) => {
    compras => {
        return compras.reduce((a, b) => a + b, 0);
    }
    cliente.saldoTotal -= compras
})