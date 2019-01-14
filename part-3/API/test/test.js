process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();
chai.use(chaiHttp);

describe('API suite of tests', () => {
  describe('All protocols GET /', () => {
    it('it should GET hello world', () => {
      chai.request(server).get('/').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    });
    it('the page should be 404', () => {
      chai.request(server).get('/404').end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
      });
    });
  });
});
