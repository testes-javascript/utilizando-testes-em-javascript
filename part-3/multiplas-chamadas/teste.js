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
    getName().then(result => {
      console.log(result);
      done();
    });
    getName().then(result => {
      console.log(result);
      done();
    });
  });
});
