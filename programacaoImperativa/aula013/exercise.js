function Carro(nomeCarro, anoCarro) {
  this.nome = nomeCarro;
  this.ano = anoCarro;
}

let civic = new Carro("Civic", 2020);
let ravi = new Carro("Ravi", "2021");

// console.log(civic);
// console.log(ravi);

let dadosJson = '{"cidade": "Osasco", "bairro": "São Pedro"}';
let dadosConvertidos = JSON.parse(dadosJson);
console.log(dadosConvertidos);
console.log(dadosConvertidos.cidade);
console.log(dadosConvertidos.bairro);

let dadosJsonII = {pais: "Brasil", estado: "São Paulo"};
let dadosConvertidosII = JSON.stringify(dadosJsonII);
let dadosConvertidosIIPais = JSON.stringify(dadosJsonII.pais);
let dadosConvertidosIIEstado = JSON.stringify(dadosJsonII.estado);
console.log("****** stringfy ******");
console.log(dadosConvertidosII);
console.log(dadosConvertidosIIPais);
console.log(dadosConvertidosIIEstado);
console.log(`\n${dadosConvertidosII}\n${dadosConvertidosIIPais}\n${dadosConvertidosIIEstado}`);
console.log("****** parse ******");
let dadosRetornadosII = JSON.parse(dadosConvertidosII);
console.log(dadosRetornadosII);
console.log(dadosRetornadosII.pais);
console.log(dadosRetornadosII.estado);