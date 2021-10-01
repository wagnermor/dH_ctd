
function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
  this.calcularMedia = function() {
    let media = this.notas.reduce((acc, cur) => acc + cur);
    return media / this.notas.length;
  };
  this.calculaFaltas = () => this.faltas += 1;
};

module.exports = {
  NovoAluno: Aluno,
}
