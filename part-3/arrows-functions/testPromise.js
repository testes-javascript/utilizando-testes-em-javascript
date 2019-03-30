const chai = require('chai'),
  expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

let NameAndLastNameArrow = {
  name: 'Michael',
  lastName: 'Araujo',

  concatName: function () {
    return `Olá: ${this.name} ${this.lastName}`;
  },

  showName: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(modify => modify + this.concatName());
      }, 1000);
    });
  }
};

describe('Tests Arrow Functions: ', () => {
  it('Test: NameAndLastNameArrow [Equal]:', () => {
    expect(
      NameAndLastNameArrow.showName().then(modify => modify(' - '))
    ).to.eventually.equal(' - Olá: Michael Araujo');
  });
});
