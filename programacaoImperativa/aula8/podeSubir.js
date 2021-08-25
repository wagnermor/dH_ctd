/* 01 */function podeSubir(altura, acompanhada) {
  const rulesHeight = altura >= 1.40 && altura <= 2.0;
  const rulesCompanion = altura >= 1.20 && altura < 1.40 && acompanhada === true;
  //const rulesLowHeight = altura < 1.20 
  return (rulesHeight || rulesCompanion)? `TRUE` : `FALSE`;
}

/* 02 */function podeSubir2(altura, acompanhada) {
  const rulesHeight = altura >= 1.40 && altura <= 2.0;
  const rulesCompanion = altura >= 1.20 && altura < 1.40 && acompanhada === true;
  //const rulesLowHeight = altura < 1.20 
  if (rulesHeight)
    return `Acesso autorizado`;
  else if (rulesCompanion)
    return `Acesso autorizado somente com acompanhante`;
  else
    return `Acesso negado.`;
}
console.log(`1 true: ${podeSubir2(1.40, true)}`);
console.log(`2 false: ${podeSubir2(2.01, true)}`);
console.log(`3 true: ${podeSubir2(1.40, false)}`);
console.log(`4 false: ${podeSubir2(2.01, false)}`);
console.log(`5 true: ${podeSubir2(1.20, true)}`);
console.log(`6 false: ${podeSubir2(1.20, false)}`);
console.log(`7 false: ${podeSubir2(1.19, true)}`);
console.log(`8 false: ${podeSubir2(1.19, false)}`);