let chai = require('chai');
chai.use(require('chai-json'));
let expect = chai.expect;
let assert = chai.assert;

const { users } = require('./App');

// Bool
assert.equal(true, true);
assert.equal(false, false);

// Int
assert.equal(1, 1);
assert.equal(0, 0);

// Teste Error
try {
  assert.equal(0, 1, 'Valor diferentes');
} catch (error) {
  console.log(error.message);
}

// Json
expect('user.json').to.be.a.jsonFile();

// Object
jsonObj = {
  _id: '5b2ee24639181674db82ced5',
  isActive: false,
  name: 'Foster Rowe',
  company: 'ERSUM',
  email: 'fosterrowe@ersum.com'
};

try {
  expect('user.json').to.be.a.jsonFile().and.to.be.jsonObj(jsonObj);
} catch (error) {
  console.log('\n', error.message);
}

// Object
try {
  expect('repo.json').to.be.a
    .jsonFile()
    .and.contain.jsonWithProps({ repoName: 'douglas' });
} catch (error) {
  console.log('\n', error.message);
}
