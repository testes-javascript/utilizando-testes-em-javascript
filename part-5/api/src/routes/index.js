import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'API ESTUDOS: Olá, mundo!',
  });
});

export default routes;
