console.log(`*** MENU ***\n1 - Pipoca - 10 segundos (padrão);\n2 - Macarrão - 8 segundos (padrão);\n3 - Carne - 15 segundos (padrão);\n4 - Feijão - 12 segundos (padrão);\n5 - Brigadeiro - 8 segundos (padrão);\n`);

function Microondas(opcao = 0, tempo = 0) {  
  const pipoca = 10, macarrao = 8, carne = 15, feijao = 12, brigadeiro = 8;

  const pronto = `Prato pronto, bom apetite!!!`;
  const queimou = `À comida queimou.`;
  const insuficiente = `Tempo insuficiente.`;
  const bum = `kabumm!!!`
  const menuError = `Prato inexistente`;

  if(opcao === 1 && tempo === 0) 
    tempo = pipoca;
  else if (opcao === 2 && tempo === 0) 
    tempo = macarrao;
  else if (opcao === 3 && tempo === 0) 
    tempo = carne;
  else if (opcao === 4 && tempo === 0) 
    tempo = feijao;
  else if (opcao === 5 && tempo === 0) 
    tempo = brigadeiro;
  else if (opcao <= 0 || opcao > 5)
      return menuError;

  if (opcao === 1 && (tempo >= pipoca && tempo < pipoca * 2)) 
    return pronto;
  else if (opcao === 1 && tempo === pipoca * 2)
    return queimou;
  else if (opcao === 1 && tempo < pipoca)
    return insuficiente;
  else if( opcao === 1 && tempo >= pipoca * 3)
    return bum;
  else if (opcao === 2 && (tempo >= macarrao && tempo < macarrao * 2)) 
    return pronto;
  else if (opcao === 2 && tempo === macarrao * 2)
    return queimou;
  else if (opcao === 2 && tempo < macarrao)
    return insuficiente;
  else if( opcao === 2 && tempo >= macarao * 3)
    return bum;
    else if (opcao === 3 && (tempo >= carne && tempo < carne * 2)) 
    return pronto;
  else if (opcao === 3 && tempo === carne * 2)
    return queimou;
  else if (opcao === 3 && tempo < carne)
    return insuficiente;
  else if( opcao === 3 && tempo >= carne * 3)
    return bum;
    else if (opcao === 4 && (tempo >= feijao && tempo < feijao * 2)) 
    return pronto;
  else if (opcao === 4 && tempo === feijao * 2)
    return queimou;
  else if (opcao === 4 && tempo < feijao)
    return insuficiente;
  else if( opcao === 4 && tempo >= feijao * 3)
    return bum;
    else if (opcao === 5 && (tempo >= brigadeiro && tempo < brigadeiro * 2)) 
    return pronto;
  else if (opcao === 5 && tempo === brigadeiro * 2)
    return queimou;
  else if (opcao === 5 && tempo < brigadeiro)
    return insuficiente;
  else if( opcao === 5 && tempo >= brigadeiro * 3)
    return bum;
}


console.log(`Opção 1 e tempo padrão: ${Microondas(1)}`);
console.log(`Opção 1 e tempo alterado: ${Microondas(1, 19)}`);
console.log(`Opção 1 e tempo menor: ${Microondas(1, 9)}`);
console.log(`Opção 1 e tempo maior: ${Microondas(1, 20)}\n`);
console.log(`Opção 2 e tempo padrão: ${Microondas(2)}`);
console.log(`Opção 2 e tempo alterado: ${Microondas(1, 15)}`);
console.log(`Opção 2 e tempo menor: ${Microondas(2, 7)}`);
console.log(`Opção 2 e tempo maior: ${Microondas(2, 16)}\n`);
console.log(`Opção 3 e tempo padrão: ${Microondas(3)}`);
console.log(`Opção 3 e tempo alterado: ${Microondas(1, 29)}`);
console.log(`Opção 3 e tempo menor: ${Microondas(3, 14)}`);
console.log(`Opção 3 e tempo maior: ${Microondas(3, 30)}\n`);
console.log(`Opção 4 e tempo padrão: ${Microondas(4)}`);
console.log(`Opção 4 e tempo alterado: ${Microondas(1, 23)}`);
console.log(`Opção 4 e tempo menor: ${Microondas(4, 11)}`);
console.log(`Opção 4 e tempo maior: ${Microondas(4, 24)}\n`);
console.log(`Opção 5 e tempo padrão: ${Microondas(5)}`);
console.log(`Opção 5 e tempo alterado: ${Microondas(1, 15)}`);
console.log(`Opção 5 e tempo menor: ${Microondas(5, 7)}`);
console.log(`Opção 5 e tempo maior: ${Microondas(5, 16)}\n`);
console.log(`Menu error: ${Microondas(-1)}`);
console.log(`Menu error: ${Microondas()}`);
console.log(`Menu error: ${Microondas(6)}\n`);
