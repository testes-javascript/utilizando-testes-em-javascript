const chai = require('chai'),
  expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const getName = name => {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string') {
      resolve({ name: name });
    }
    reject('Parameter is not of type string');
  });
};

describe('Multiple Calls /', () => {
  it('Calls', done => {
    getName('Michael').then(result => {
      console.log(result);
    });
    getName('Douglas').then(result => {
      console.log(result);
    });
    done();
  });
  it('Call to getName not put the parameter', done => {
    expect(getName().catch(error => error)).to.eventually.equal(
      'Parameter is not of type string'
    );
    done();
  });
});
