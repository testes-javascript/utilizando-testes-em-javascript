const chai = require('chai'),
  expect = chai.expect;

describe('Testes', function () {
  describe('Teste 1', function () {
    it('0', function () {
      expect('teste').to.equals('teste');
    });
    it('1', function () {
      expect('teste').to.equals('teste');
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

    it('Teste 5', function () {
      expect('teste').to.equals('teste');
    });

    it('Teste 6', function () {
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
  describe.only('Teste 1', function () {
    it('0', function () {
      expect('teste').to.equals('teste');
    });
  });
});
