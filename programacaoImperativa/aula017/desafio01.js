//Ex01
const numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const par = numeros.map((numero) => {
  return numero + 1;
});

//Ex02
const nomes = ["Joana", "Inês", "Maria", "Isaura", "Gedeir", "Dezoita", "Sara", "Isabelly"];

const nomesSelecionados = nomes.filter((nome, index) => {
  if (nome === "Maria"){
    console.log(index);
    let nuIndex = index;
    console.log(nuIndex);
    return `${nuIndex}`;
  }
});

console.log(nomesSelecionados);

//Ex03
const ex03 = () => {
  const numeros = [1, 5, 9, 3, 7];
  const newNumeros = numeros.reduce((acumulador, numero) => {
    return `${acumulador} - ${numero}`;
  });
  console.log(newNumeros);
}

ex03();