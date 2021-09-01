let originalFilms = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let animation = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

//Ex:01 =>
function convertUppercase(qualquerNome) {
  for (let index = 0; index < qualquerNome.length; index += 1) {
    qualquerNome[index] = qualquerNome[index].toUpperCase();
  }
  return qualquerNome;
}

//Ex: 02 =>
function addedElement(array1, array2) {
  for (let index = array2.length - 1; index >= 0; index -= 1) {
    array1.push(array2.pop());
  }
  convertUppercase(array1);
  return array1;
}

//Ex: 03 =>
function findAddedElement(array1, array2) {
  array2.pop(); // removel último índice de  array2
  addedElement(array1, array2);// adiciona os índices de array2 em array1
  convertUppercase(array1);// converte letras em caixa alta(letra maiúscula)
  return array1;
}

//Ex: 04 =>
function comparePoints(asia, europa) {
  let compare = [];
  for (let i = 0; i < asia.length; i ++) {
    compare.push(asia[i] === europa[i]);
  }
  return compare;
}

// testes:
console.log(`=> Exercício 01:`);
let originalFilms1 = originalFilms.slice(0,originalFilms.length);// cria cópia de array
console.table(convertUppercase(originalFilms1));

console.log(`=> Exercício 02:`);
let originalFilms2 = originalFilms.slice(0,originalFilms.length);// cria cópia de array
let animation2 = animation.slice(0,animation.length);// cria cópia de array
console.table(addedElement(originalFilms2, animation2));

console.log(`=> Exercício 03:`);
let originalFilms3 = originalFilms.slice(0,originalFilms.length);// cria cópia de array
let animation3 = animation.slice(0,animation.length);// cria cópia de array
console.table(findAddedElement(originalFilms3, animation3));

console.log(`=> Exercício 04:`);
const asiaPoints = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const europaPoints = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
console.table(comparePoints(asiaPoints, europaPoints));