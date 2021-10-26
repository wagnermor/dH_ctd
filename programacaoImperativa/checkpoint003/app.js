const NovoAluno = require('./aluno');
const curso = require("./curso");
const dados = require('./dados');

for (let i = 0; i < 5; i ++) {
  let geraEstudante = new NovoAluno(dados.fullName(), dados.faltas(), dados.notas());
  curso.lista.push(geraEstudante);
}

curso.addAlunos("Covidelson",2,[5,5,5,5]);
curso.addAlunos("Covidelson Júnior",9 ,[5.5,5.5,5.5,5.5]);

const covidelson = curso.aprovou(curso.lista[curso.lista.length - 2]);
const covidelsonJr = curso.aprovou(curso.lista[curso.lista.length - 1]);

console.log(curso.lista);
console.log(curso.lista[6]);
curso.lista[6].faltas();
console.log(curso.lista[6]);
// console.log(covidelsonJr);
console.log(curso.retornaResultado());
console.log(curso.lista[0].calcularMedia(), curso.lista[1].calcularMedia(),curso.lista[2].calcularMedia(), curso.lista[3].calcularMedia(),curso.lista[4].calcularMedia(), curso.lista[5].calcularMedia(), curso.lista[6].calcularMedia());
