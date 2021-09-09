let conta = {
  numero: 123456,
  tipoDeConta: "corrente",
  saldo: 19999.99,
  titular: "covidelson"
};

function Conta(numeroDaConta, tipo, saldo, titular) {
  this.numero = numeroDaConta;
  this.tipo = tipo;
  this.saldo = saldo;
  this.titular = titular;
};

let abgael = new Conta(5486273622, "conta corrente", 277771, "abgael natte");
let ramon = new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let jarret = new Conta(9582019689, "Conta Poupança", 27363, "jarret lafuente");
let ansel = new Conta(1761924656, "Conta Poupança", 32415, "Ansel Ardley");
let jacki = new Conta(7401971607, "Conta Poupança", 18789, "jacki shurmer");
let jobi = new Conta(630841470, "Conta Corrente", 28776, "jobi mawtus");
let thomasin = new Conta(4223508636, "Conta Corrente", 2177, "thomasin latour");
let lonnie = new Conta(185979521, "Conta Poupança", 25994, "lonnie Verheijden");
let alonso = new Conta(3151956165, "Conta Corrente", 7601, "alonso wannan");
let bendite = new Conta(2138105881, "Conta Poupança", 33196, "bendite huggett");

let listaContas = [abgael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite];

let banco = {
  clientes: listaContas,
  consultarCliente: function(titular) {
    console.log(titular);
  },
  deposito: function(titular, valor) {
    titular.saldo += valor;
    console.log(`Depósito realizado, seu novo saldo é : $ ${titular.saldo}`);
  },
  saque: function(titular, valor) {
    titular.saldo - valor < 0 ? console.log(`Fundos insuficientes`) : titular.saldo -= valor, console.log(`Extração feita com sucesso, seu novo saldo é: ${titular.saldo}`);
  },
};


// console.log(JSON.stringify(listaContas));
console.table(listaContas);
console.log(jobi.saldo);
banco.deposito(jobi,2);
// banco.consultarCliente(abgael);
// banco.deposito(abgael, 1);
// banco.consultarCliente(abgael);
// banco.saque(abgael, 1);
// banco.consultarCliente(abgael);

// banco.deposito(abgael, 1000000);
// banco.consultarCliente(abgael);
// banco.saque(abgael, 1000000);
// banco.consultarCliente(abgael);