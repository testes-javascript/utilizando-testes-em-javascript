import request from 'supertest';
import chai from 'chai';

import app from '../../../src/index';

const { expect } = chai;

describe('Suite de testes da API', () => {
  let expectedHello;

  before(() => {
    expectedHello = 'API ESTUDOS: Olá, mundo!';
  });

  it('Primeiro teste', () => {
    expect('teste').to.equals('teste');
  });

  it('[API] - Ola mundo', () => {
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
});
