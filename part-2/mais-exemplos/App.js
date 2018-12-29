let sum = (value1, value2) => {
  if (value1 === 0 && value2 === 0) {
    throw new Error('Erro: Parâmetros com valores invalidos!');
  }
  return value1 + value2;
};

module.exports = sum;
