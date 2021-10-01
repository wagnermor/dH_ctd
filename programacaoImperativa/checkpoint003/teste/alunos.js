// Turma: NT01
// Room: 02
// Integrantes: Davi Dutra, Jhonathan Weber, Marcio Silva, Patricia Kushima Assano, Willian da Cruz

// Checkpoint 3:
// Passo 1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
//(number) e notas (array de números). Crie um construtor para ele e importe-o como o
//módulo aluno.


function AddAluno(nome_, faltas_, notas_) {
  this.nome = nome_;
  this.faltas = faltas_;
  this.notas = notas_;
  this.calcularMedia = () => {
      let media = this.notas.reduce((previousValue, currentValue) => previousValue + currentValue) / this.notas.length;
      // A função reduce recebe um callback como parâmetro que por suas vez recebe outros 2 
      //parâmetros sendo o primeiro o acumulator e o segundo o currentValue (valor do índice atual da iteração do array)
      // A função reduce precisa ter um let e return
      return media;
      // let somaNotas = 0;
      // for(let nota in aluno.notas){
      //     somaNotas = somaNotas + aluno.notas[nota];
      // }
      // let retorno = somaNotas/aluno.notas.length;
      // return retorno;
  };
  this.calcularFaltas = () => this.faltas += 1;
}

module.exports = {
  AddAluno: AddAluno
};
//console.log(estudantes.calcularMedia)


// Passo 2 - Nosso objeto aluno (neste caso, objeto estudantes) terá o método calcularMedia que retorna a média de suas notas.
//Também terá um método chamado faltas (neste caso, método faltou), que simplesmente aumenta o número de faltas
//em 1.

// Passo 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
// curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
// estudantes (um array composto pelos alunos criados no passo 1).


// Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
// chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
// propriedade lista de estudantes do objeto curso.