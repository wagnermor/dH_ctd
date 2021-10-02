const numeros = [5, 7, 16];
const soma = numeros.reduce((acumulador, numero) =>{
  console.log(acumulador + ':' + numero);
  console.log(`Acumulador: ${acumulador} + Número: ${numero} = ${acumulador + numero}`);
  return acumulador + numero;
  // return acumulador;
});
console.log(soma);