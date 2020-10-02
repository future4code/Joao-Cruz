/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log(carta.valor) */
console.log("Bem vindo ao jogo de Blackjack!")

if (confirm ("Quer iniciar uma nova rodada?")){
   console.log("Vamos começar");

} else{
   console.log("O jogo acabou");
}
const usuario1 = comprarCarta();
   
   console.log(usuario1.texto)
   console.log(usuario1.valor)
   const usuario2 = comprarCarta();
   
   console.log(usuario2.texto)
   console.log(usuario2.valor)
   let somaUsuario = (usuario1.valor + usuario2.valor)
   const computador1 = comprarCarta();
   
   console.log(computador1.texto)
   console.log(computador1.valor)
   const computador2 = comprarCarta();
   
   console.log(computador2.texto)
   console.log(computador2.valor)
   
   let somaComputador = (computador1.valor + computador2.valor)
   
alert(`Usuário - cartas: ${usuario1.texto + usuario2.texto} | ${usuario1.valor + usuario2.valor} - pontuação ${somaUsuario}
Computador - cartas: ${computador1.texto + computador2.texto} | ${computador1.valor + computador2.valor} - pontuação ${somaComputador}`)
 if (somaUsuario>somaComputador){
   console.log("Usuário venceu")
} else if (somaComputador>somaUsuario) {
   console.log("Computador Venceu")
} 
else if(somaUsuario===somaComputador ){
   console.log("Enpate")
} 
 else{
    console.log("Acabou")
 }
  
   if (confirm ("Quer iniciar uma nova rodada?")){
      console.log("Vamos começar");
   
   } else{
      console.log("O jogo acabou");
   }
 if (usuario1 && usuario2 === cartas[0]){
   const usuario1 = comprarCarta();
   
   console.log(usuario1.texto)
   console.log(usuario1.valor)
   const usuario2 = comprarCarta();
   
   console.log(usuario2.texto)
   console.log(usuario2.valor)
   let somaUsuario = (usuario1.valor + usuario2.valor)
   const computador1 = comprarCarta();
 } 
 if(computador1 && computador === cartas[0]){
   const usuario1 = comprarCarta();
   
   console.log(usuario1.texto)
   console.log(usuario1.valor)
   const usuario2 = comprarCarta();
   
   console.log(usuario2.texto)
   console.log(usuario2.valor)
   let somaUsuario = (usuario1.valor + usuario2.valor)
   const computador1 = comprarCarta();
 } 

