const chai = require('chai'),
  expect = chai.expect;

const fs = require('fs');

describe('Test Hooks', function () {
  describe('Execute test files', function () {
    let file;
    let tests = 1;
    let newFile;

    before(function () {
      file = 'teste.txt';
      fs.writeFileSync(file);
    });

    beforeEach(function () {
      console.log('Test beforeEach #' + tests++);
      fs.writeFileSync(file, 'Michael Douglas');
    });

    it('First Test', function () {
      let contents = fs.readFileSync(file, 'utf8');
      expect(contents).to.equal('Michael Douglas');
    });

    it('Second Test', function () {
      let contents = fs.readFileSync(newFile, 'utf8');
      expect(contents).to.equal('Michael Douglas Barbosa Araujo');
    });

    after(function () {
      try {
        fs.unlinkSync(file);
        fs.unlinkSync(newFile);
      } catch (err) {
        console.error(err.message);
      }
    });

    afterEach(function () {
      console.log('Test afterEach #' + tests++);
      newFile = 'novo.txt';
      fs.writeFileSync(newFile, 'Michael Douglas Barbosa Araujo');
    });
    
  });
});
