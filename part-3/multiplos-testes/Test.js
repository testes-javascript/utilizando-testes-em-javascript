const chai = require('chai'),
  expect = chai.expect;

const Calculator = require('./App');

expect(Calculator('Sum')(1, 1)).to.equal(2);
expect(Calculator('Sub')(2, 1)).to.equal(1);
expect(Calculator('Sub')(2, 2)).to.equal(0);
expect(Calculator('Mul')(2, 2)).to.equal(4);
