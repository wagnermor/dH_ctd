const dados = {
  firstNames: ["Ashley", "Emma", "Scarlett", "Stephany", "Abigail", "Mila", "Madelyn", "Melanie", "Margaret", "Wagner Moreira", "Mary", "April", "Mollie"],
  lastNames: ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "Martin", "Thompson", "Garcia", "Silva", "Silva", "Silva", "Silva", "Rodrigues", "Lewis"],
  numeroDeFaltas: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nota: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  startRandom: function(lista) {
    const index = Math.floor(Math.random() * (lista.length));
    return index;
  },
  fullName: function() {
    return this.firstNames[this.startRandom(dados.firstNames)] + " " + this.lastNames[this.startRandom(dados.lastNames)];
  },
  faltas: function() {
    return this.numeroDeFaltas[this.startRandom(this.numeroDeFaltas)];
  },
  notas: function() {
    let notas = [];
    for (let i = 0; i < 4; i += 1) {
      let random = this.startRandom(this.nota);
      notas.push(this.nota[random]);
    }
    return notas;
  }
};

module.exports = dados;

const nome1 = dados.notas();
// console.log(nome1);
