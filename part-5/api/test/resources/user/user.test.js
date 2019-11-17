import request from 'supertest';
import chai from 'chai';

import app from '../../../src/index';

const { expect } = chai;

describe('Suite de testes da API', () => {
  let expectedHello;
  let id;

  before(() => {
    expectedHello = 'API ESTUDOS: Olá, mundo!';
    id = false;
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

  it('[API][SUCCESSFUL] - Criação de usuários', done => {
    const name = 'Levina Passos';

    request(app)
      .post('/usuarios')
      .send({ name })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { _id } = res;
          id = _id;
          expect(res.name).to.equals(name);
        }

        done();
      });
  });

  it('[API][THROW] - Criação de usuários', done => {
    const expected = 'Nome do usuário não fornecido';
    request(app)
      .post('/usuarios')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { error } = res;
          expect(error).to.equals(expected);
        }

        done();
      });
  });

  it('[API][SUCCESSFUL] - Obter dados do usuário', done => {
    const expected = 'Levina Passos';
    request(app)
      .get('/usuarios')
      .send({ id })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { name } = res.shift();
          expect(name).to.equals(expected);
        }

        done();
      });
  });

  it('[API][THROW] - Obter dados do usuário', done => {
    request(app)
      .get('/usuarios')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          expect(res).to.be.empty;
        }

        done();
      });
  });

  it('[API][2][THROW] - Obter dados do usuário', done => {
    request(app)
      .get('/usuarios')
      .send({ _id: 123456 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          expect(res).to.be.empty;
        }
        done();
      });
  });

  it('[API][SUCCESSFUL] - Edição de usuários', done => {
    const name = 'Levina Passos - 1';

    request(app)
      .put('/usuarios')
      .send({ name, id })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { nModified } = res;
          expect(nModified).to.equals(1);
        }

        done();
      });
  });

  it('[API][SUCCESSFUL] - Exclusão de usuários', done => {
    request(app)
      .delete('/usuarios')
      .send({ id })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { deletedCount } = res;
          expect(deletedCount).to.equals(1);
        }

        done();
      });
  });

  it('[API][SUCCESSFUL] - Verificação de exclusão de usuários', done => {
    request(app)
      .delete('/usuarios')
      .send({ _id: 289892 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, { body: res }) => {
        if (err) {
          throw err;
        } else {
          const { deletedCount } = res;
          expect(deletedCount).to.equals(0);
        }

        done();
      });
  });
});
