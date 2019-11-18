import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Cálculadora: Olá, mundo!',
  });
});

export default routes;
