function inverteString(string) {
  console.log(string.split(""));
  console.log(string.split("").reverse());
  console.log(string.split("").reverse().join(""));
}
inverteString("America do Sul");

//========================================================================================
function inverteArray(array) {
  console.log(array.reverse());
}
inverteArray(["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espirito Santo"]);

//========================================================================================
function somaArray(array) {
  return array.reduce((soma, numbero)=> soma + numbero);
}
console.log(`**** Soma array ****\n**** Com reduce e arrow function ****`)
console.log(somaArray([1, 2, 3]));
console.log(somaArray([10,3,10,4]));
console.log(somaArray([-5, 100]));
console.log(somaArray(['o','l','á']));
//========================================================================================
function somaArray2 (array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  console.log(typeof (soma));
  return soma;
}
console.log(`**** Soma array ****\n**** Com for ****`);
console.log(somaArray2([1, 2, 3]));
console.log(somaArray2([10,3,10,4]));
console.log(somaArray2([-5, 100]));
console.log(somaArray2(['o','l','á'])); // =========> bugou!!!!! a variável soma é do tipo numero e inicia a string com 0
//========================================================================================
function somaArray3 (array) {
  let soma = 0;
  for (let numero of array) {
    soma += numero;
  }
  return soma;
}
console.log(`**** Soma array ****\n**** Com for of ****`);
console.log(somaArray3([1, 2, 3]));
console.log(somaArray3([10,3,10,4]));
console.log(somaArray3([-5, 100]));
//========================================================================================
function join(array) {
  let mensagem = '';
  for (let letra of array) {
    mensagem += letra;
  }
  return mensagem;
}
console.log(`**** Join ****\n**** Com for of ****`);
console.log(join(['o','l','á']));
console.log(join(['t','c','h','a','u']));
//========================================================================================
//COLEÇÃO DE FILMES E MAIS:
let filmesESeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

function arrayUppercase(array) {
  let lista = [];
  for (let index = 0; index < array.length; index += 1) {
    lista.push(array[index].toUpperCase());
  }
  return lista;
}
console.log(arrayUppercase(filmesESeries));