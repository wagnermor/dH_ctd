let teste = require("./calc");
const test = require("./calc");
const numbers = require("./desafio01");

console.log(teste.divide(10,2));
console.log(teste);
console.log(test.chamaNome('Wagner'));
console.log(teste.falaCarro("Corola"));
console.log(test.modulo(5,2));

const {sobrenome, ...details} = {nome: 'Lucas',
  sobrenome: 'Santos',
  idade: 25};
  console.log(sobrenome);
  console.log(details);
  console.log(test);
  console.log(numbers);
