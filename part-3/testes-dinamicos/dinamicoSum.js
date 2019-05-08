let assert = require('chai').assert;

function add () {
  return Array.prototype.slice.call(arguments).reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', () => {
  let tests = [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 }
  ];

  tests.map(test => {
    it('Corretamente adicionado ' + test.args.length + ' ao argumento', () => {
      let res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
