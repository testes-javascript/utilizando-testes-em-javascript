const assert = require('assert');

const sum = require('./App');

// Bool
assert.equal(true, true);
assert.equal(false, false);

// Int
assert.equal(1, 1);
assert.equal(0, 0);

// Teste Error
assert.equal(0, 1, 'Valor diferentes');
