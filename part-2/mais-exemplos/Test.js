const should = require('chai').should();

const sum = require('./App');

// Bool
should.not.equal(true, sum(2, 2));

// Int
should.not.equal(2, sum(1, 2));
should.not.equal(3, sum(3, 2));

// Throw
(function () {
  sum(0, 0);
}.should.throw());

(function () {
  sum(0, 0);
}.should.throw(/Erro: Parâmetros com valores invalidos!/));

// Not Throw
(function () {
  sum(1, 1);
}.should.not.throw());

(function () {
  sum(1, 1);
}.should.not.throw(/Erro: Parâmetros com valores invalidos!/));
