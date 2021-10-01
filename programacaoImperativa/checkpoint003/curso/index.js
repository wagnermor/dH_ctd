const NovoAluno = require("../aluno");

const curso = {
  nomeDoCurso: "CTD",
  notaDeAprovacao: 5,
  faltasmaximas: 10,
  lista:[],
  addAlunos: function(nome, faltas, notas) {
    this.lista.push((new NovoAluno(nome, faltas, notas)));
  },
  aprovou: function(aluno) {
    const notaMaxima = this.notaDeAprovacao <= aluno.calcularMedia() && this.faltasmaximas > aluno.numeroDeFaltas;
    const faltasMaximas = (this.faltasmaximas === aluno.numeroDeFaltas) && ((this.notaDeAprovacao * 1.1) < aluno.calcularMedia());
    if (notaMaxima) {
      return true;
    } else if(faltasMaximas) {
      return true;
    } else {
      return false;
    }
  },
  retornaResultado: function() {
    const listaDeResultado = [];
    for (let estudante of this.lista) {
      listaDeResultado.push(this.aprovou(estudante));
    }
    return listaDeResultado;
  }
}

// console.log(curso.lista);
module.exports = curso;
