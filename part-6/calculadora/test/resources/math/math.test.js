import request from 'supertest';
import chai from 'chai';

import app from '../../../src/index';

const { expect } = chai;

import MathController from '../../../src/controllers/MathController';

describe('Suite de testes da Cálculadora', () => {
  let expectedHello;

  before(() => {
    expectedHello = 'Calculadora: Olá, mundo!';
  });

  it('Primeiro teste', () => {
    expect('teste').to.equals('teste');
  });

  it('[API] - Teste para garantir que a API subiu e está rodando', () => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { message } = res;
          expect(expectedHello).to.equals(message);
        }
      });
  });

  it('[RENDER] - Teste de renderização da cálculadora', done => {
    request(app)
      .get('/calculadora')
      .expect('Content-type', /html/)
      .expect(200)
      .end(done);
  });
});
