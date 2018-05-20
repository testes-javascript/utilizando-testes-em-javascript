const assert = require('chai').assert;

let sum = (value1, value2) => {
  return value1 + value2;
};

let asserts = (value, equal) => {
  try {
    assert.equal(value, equal);
    console.log(
      '\x1b[42m',
      `value ${value} is equal ${equal} your test is valid`,
      '\x1b[0m'
    );
  } catch (err) {
    console.log('\x1b[31m', err.message, '\x1b[0m');
  }
};

asserts(sum(1, 1), 2);
