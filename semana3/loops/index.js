//exercício 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// realizara o teste agregando (++) 1 até chegar me 5.
//exercício 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//irá exibir todos os números acima de 18
//exercício 3 
//a.
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0; i< 12; i++){
    const elemento = numeros[i]
    console.log(elemento)
} 
//b.
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0; i< 12; i++){
    const elemento = numeros[i]
    console.log(elemento/10)
 //c.
 const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0; i< 12; i++){
    const elemento = numeros[i]
    console.log(elemento%0)   
//d.
 const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0; i< 12; i++){
    const elemento = numeros[i]
    console.log("o elemento do índex" + elemento)   
//e.
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 21; i< 1; i++){
    const elemento = numeros[i]
    console.log("o menor elemento" + elemento)
    const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for(let i = 130; i< 1; i++){
        const elemento = numeros[i]
        console.log("o maior elemento" + elemento)