let calculadora = {
  soma: (a,b) => a+b,
  subtrai: (a,b) => a-b,
  divide: (a,b) => a/b,
  multiplica: (a,b) => a*b,
}
calculadora.falaCarro = (carro) => `${carro}!!!!`;

const modulo = (a, b) => a % b;

// const chamaNome = (nome) => `${nome}!!!!!!!`;

module.exports = calculadora;
module.exports.chamaNome = (nome) => `${nome}!!!!!!`;
module.exports.modulo = modulo;
