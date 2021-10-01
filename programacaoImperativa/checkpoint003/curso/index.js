const Aluno = require("../aluno");
const listaDeAlunos = require("../app");

const curso = {
  nomeDoCurso: "CTD",
  notaDeAprovacao: 5,
  faltasMaximas: 7,
  listaDeEstudantes: listaDeAlunos,
  adicionaAluno:function (nome, faltas, notas){
    thislistaDeEstudantes.push(new Aluno.NovoAluno(nome, faltas, notas));
  },
  aprovacao: function (aluno) {
    const mediaIgualOuMaior = aluno.calcularMedia() >= this.notaDeAprovacao && aluno.faltas < this.faltasMaxima;
    const mesmaFalta = aluno.calcularMedia() > this.notaDeAprovacao * 1.1 && aluno.faltas ===this.faltasMaximas;
    if (mediaIgualOuMaior) {
      return true;
    } else if (mesmaFalta) {
      return true;
    } else {
      return false;
    }
  },
  retornaResultados: function () {
    let listaDeResultado = [];
    for (estudante of this.listaDeEstudantes) {
      listaDeResultado.push(this.aprovacao(estudante));
    }
    return listaDeResultado;
  }
};

const resultado = curso.retornaResultados();
console.log(resultado);

module.exports = curso;
