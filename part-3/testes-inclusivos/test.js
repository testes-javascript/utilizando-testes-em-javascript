const chai = require('chai'),
  expect = chai.expect;

describe('Testes', function () {
  describe('Teste 1', function () {
    it('0', function () {
      expect('teste1').to.equals('teste1');
    });
    it('1', function () {
      expect('teste1').to.equals('teste1');
    });

    it('Teste 2', function () {
      expect('teste').to.equals('teste');
    });

    it('Teste 3', function () {
      expect('teste').to.equals('teste');
    });

    it('Teste 4', function () {
      expect('teste').to.equals('teste');
    });

    it.skip('Teste 5', function () {
      expect('teste').to.equals('teste');
    });

    it.skip('Teste 6', function () {
      expect('teste').to.equals('teste');
    });

    it('Teste 7', function () {
      expect('teste').to.equals('teste');
    });

    it('Teste 8', function () {
      expect('teste').to.equals('teste');
    });

    it('Teste 9', function () {
      expect('teste').to.equals('teste');
    });
  });
  describe.skip('Teste 1', function () {
    it('0', function () {
      expect('teste').to.equals('teste');
    });
  });
});
