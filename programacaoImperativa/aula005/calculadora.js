function adicionar(numero1, numero2) {
  return numero1 + numero2;
}

function subtrair(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

function divisao(numero1, numero2) {
  if (numero2 === 0) return `!!! ERRO !!!\nO divisor não pode ser igual a zero\nO número ${numero1} não pode ser dividido por zero`;
  return numero1 / numero2;
}

function quadradoDoNumero(numero) {
  return multiplicacao(numero, 2);
}

function mediaDeTresNumeros(numero1, numero2, numero3) {
  let somatorio = numero1 + numero2 + numero3;
  return divisao(somatorio, 3);
}

function calculaPorcentagem(numero, porcentagem) {
  let porcentagemDecimal = porcentagem / 100;
  return multiplicacao(numero, porcentagemDecimal);
}

function geradorDePorcentagem(valorPercentual, valorTotal) {
  return multiplicacao(divisao(valorPercentual, valorTotal), 100);
  
}

console.log("---------- Teste de Operações / Caluladora ----------");
console.log(`Adicionar: ${adicionar(8, 2)}`);
console.log(`Subtrair: ${subtrair(8, 2)}`);
console.log(`Multiplicar: ${multiplicacao(8, 2)}`);
console.log(`Dividir: ${divisao(8, 2)}`);
console.log(`Divisor = 0: ${divisao(8, 0)}`);
console.log(`Quadrado do númro: ${quadradoDoNumero(2)}`);
console.log(`Media de 3 números: ${mediaDeTresNumeros(3, 5, 8)}`);
console.log(`Calcula Porcentagem: ${calculaPorcentagem(100, 10)}`);
console.log(`Gerador de Porcentagem: ${geradorDePorcentagem(2, 200)}%`);
console.log(Math.PI);