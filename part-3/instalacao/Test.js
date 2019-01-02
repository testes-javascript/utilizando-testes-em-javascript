const should = require('chai').should();

let sum = (value1, value2) => {
  if (value1 === 0 && value2 === 0) {
    throw new Error('Erro: Parâmetros com valores invalidos!');
  }
  return value1 + value2;
};

describe('Suite de testes soma()', () => {
  describe('#equal()', () => {
    it('Vericar se ao somar 1 + 2 é igual a 3', () => {
      should.equal(3, sum(1, 2));
    });
  });

  describe('#not.equal()', () => {
    it('Vericar se ao somar 1 + 1 não é igual a 3', () => {
      should.not.equal(3, sum(1, 1));
    });
  });
});
