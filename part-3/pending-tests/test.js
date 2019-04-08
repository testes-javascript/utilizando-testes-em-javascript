const chai = require('chai'),
  expect = chai.expect;

const getFormattedAge = age => `Sua idade é: ${age}`;

describe('Pending Test', function () {
  it('Pending Test - 1');
  it('Pending Test - 2');
  it('Test Formatted Age', function () {
    expect(getFormattedAge(27)).to.equal('Sua idade é: 27');
  });
  it('Pending Test - 4');
  it('Pending Test - 5');
});
