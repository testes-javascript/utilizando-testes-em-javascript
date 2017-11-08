let assert = require('assert');
describe('Array', () => {
  describe('Teste de verificação de #indexOf() de elemento!', () => {
    it('O valor retornado de -1 está presente', () => {
        assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});