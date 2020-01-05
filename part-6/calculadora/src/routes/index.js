import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Cálculadora: Olá, mundo!',
  });
});

routes.get('/calculadora', (req, res) => {
  res.render('calculadora');
});

export default routes;
