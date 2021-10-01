const aluno = require("./aluno");

// const wagner = new aluno('Wagner', 1, 10);
const aluno001 = new aluno.NovoAluno('Robert', 8, [9, 10, 8, 9]);
const aluno002 = new aluno.NovoAluno('George', 3, [8, 10, 8, 9]);
const aluno003 = new aluno.NovoAluno('Keny', 5, [7, 7, 8, 9]);
const aluno004 = new aluno.NovoAluno('Thomas', 0, [7, 7, 7, 7]);
const aluno005 = new aluno.NovoAluno('Nicole', 2, [8, 10, 8, 9]);
const aluno006 = new aluno.NovoAluno('Isaac', 0, [8, 10, 8, 9]);
const aluno007 = new aluno.NovoAluno('Richard', 1, [8, 10, 8, 9]);
const aluno008 = new aluno.NovoAluno('Wagner', 0, [8, 10, 8, 9]);

const listaDeAlunos = [aluno001, aluno002, aluno003, aluno004, aluno005, aluno006, aluno007, aluno008];
console.log(listaDeAlunos);
module.exports = listaDeAlunos;

