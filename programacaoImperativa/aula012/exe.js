// const alicia = [23, 69, 32];
// const bob = [12, 67, 43];

// function encontrarGanhador(a, nomeDeA, b, nomeDeB) {
//   let pontosAlicia = 0;
//   let pontosBob = 0;
  
//   if (alicia.length === bob.length) {
    
//     for (let i = 0; i < alicia.length; i += 1 ) { 
      
//       if (a[i] > b[i]) {
//         pontosAlicia++;
//       } else if(a[i] < b[i]) {
//         pontosBob += 1;
//       } 
//     }
//   }

//   return (pontosAlicia > pontosBob) ? `Alicia com ${pontosAlicia} pontos` : `Bob com ${pontosBob}`;
// }

// console.log(`O ganhador é: ${encontrarGanhador(alicia, bob)}`);
let n = [1,2,3]

function somaArray(a){
  let soma = 0;
  for (let i = 0; i < a.length; i++) {
    soma += a[i];
  }
      return soma;
 }
 console.log(somaArray(n));