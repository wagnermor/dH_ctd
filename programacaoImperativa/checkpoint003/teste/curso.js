let listaEstudantes = require("./index");
let estudantes = require("./alunos");
//console.log(listaEstudantes);

// function Cursos(nomeCurso_, notaAprovacao_, faltasMaximas_) {
//     this.nomeCurso = nomeCurso_;
//         this.notaAprovacao = notaAprovacao_;
//         this.faltasMaximas = faltasMaximas_;
//         this.listaEstudantes = listaEstudantes
// };

// Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e
// retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
// aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
// faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
// aprovação.

// Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
// array de booleanos com os resultados se os alunos aprovaram ou não.

let cursos = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 6,
    faltasMaxima: 3,
    listaEstudantes: listaEstudantes,
    alunoNovo: function (aluno_, faltas_, notas_) {
        this.listaEstudantes.push(new estudantes.AddAluno(aluno_, faltas_, notas_))
    },
    aprovacao: function (aluno_) {
        if ((aluno_.calcularMedia() >= this.notaAprovacao) && (aluno_.faltas < this.faltasMaxima)) {
            return true;
        } else if ((aluno_.faltas === this.faltasMaxima) && (aluno_.calcularMedia() > this.notaAprovacao * 1.1)) {
            return true;
        } else {
            return false;
        }
    },
    resultados: function () {
        let lista = [];
        for (let estudante of this.listaEstudantes) {
            lista.push(this.aprovacao(estudante));
        }
        return lista;
    }
};

//cursos.alunoNovo("Patricia", 2, [3, 5, 9]);

//console.log(cursos.listaEstudantes);

//let msg = cursos.aprovacao(cursos.listaEstudantes[0]);
//console.log(msg);

let listaTrueFalse = cursos.resultados();
console.log(listaTrueFalse);

module.exports = cursos;