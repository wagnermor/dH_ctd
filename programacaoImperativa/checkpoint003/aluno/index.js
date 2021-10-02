module.exports = function Aluno(nome, faltas = 0, notas) {
  this.nome = nome;
  this.numeroDeFaltas = faltas;
  this.notas = notas;
  this.calcularMedia = function() {
    let media = this.notas.reduce((acc, cur) => acc + cur);
    return media / this.notas.length;
  },
  this.faltas = function() {
    this.numeroDeFaltas += 1;
  }
}
