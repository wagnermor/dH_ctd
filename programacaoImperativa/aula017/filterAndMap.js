let contador = 0;
const idades = [22, 8, 17, 14, 30];
const maiores = idades.filter((idade) =>{
  contador += 1;
  return idade > 18;
}).map((idadeDobrada) => {
  contador += 1;
  return idadeDobrada * 2;
});
console.log(contador);
console.log(maiores);