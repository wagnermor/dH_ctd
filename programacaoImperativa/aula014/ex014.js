const calculadora = require('./calculadora');

let number = 10;
const p = (p) => console.log(p);

console.log(calculadora.divide(calculadora.multiplica(calculadora.subtrai(calculadora.soma(number, 5), 4), 4), 2));
p("*******");
p(calculadora.divide(calculadora.multiplica(calculadora.subtrai(calculadora.soma(number, 5), 4), 4), 2));
p("*******");
p(calculadora.soma(300, 800));
p(calculadora.subtrai(300, 800));
p(calculadora.multiplica(500, 3));
p(calculadora.divide(200, 8));
