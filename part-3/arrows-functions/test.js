const chai = require('chai'),
  expect = chai.expect;

let NameAndLastNameArrow = {
  name: 'Michael',
  lastName: 'Araujo',

  concatName: function () {
    return `Olá: ${this.name} ${this.lastName}`;
  },

  showName: function () {
    return modify => modify + this.concatName();
  }
};

describe('Tests Arrow Functions: ', () => {
  it('Test: NameAndLastNameArrow [Equal]:', () => {
    expect(NameAndLastNameArrow.showName()(' - ')).to.equal(
      ' - Olá: Michael Araujo'
    );
  });
});
