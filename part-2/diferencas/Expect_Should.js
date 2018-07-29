const chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

const nome = 'Michael';

expect(nome).to.be.a('string');

expect(nome).to.be.a('string').to.equals('michael');
