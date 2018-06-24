let chai = require('chai');
chai.use(require('chai-json'));
let expect = chai.expect;
let assert = chai.assert;

const { users } = require('./App');

// Bool
assert.equal(true, true);
assert.equal(false, false);

// Int
assert.equal(1, 1);
assert.equal(0, 0);

// Teste Error
assert.equal(0, 1, 'Valor diferentes');

// Json
expect('user.json').to.be.a.jsonFile();
