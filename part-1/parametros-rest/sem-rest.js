const calc = (value1, value2, type) => {
  switch (type) {
    case 'sum':
      return value1 + value2;
      break;

    case 'sub':
      return value1 - value2;
      break;

    case 'div':
      return value1 / value2;
      break;

    case 'mult':
      return value1 * value2;
      break;

    default:
      return undefined;
      break;
  }
};

console.log('***** Iniciando os testes *****');
console.group();
console.log(`Somando: ${calc(1, 1, 'sum')}`);
console.log(`Subtraindo: ${calc(4, 2, 'sub')}`);
console.log(`Dividindo: ${calc(4, 2, 'div')}`);
console.log(`Multiplicando: ${calc(2, 1, 'div')}`);
console.groupEnd();
console.log('***** Finalizando os testes *****');
