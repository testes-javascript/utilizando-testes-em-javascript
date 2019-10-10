import { Router } from 'express';
import OlaMundoController from '../app/controllers/OlaMundoController';

const routes = new Router();

routes.get('/olaMundo', OlaMundoController.olaMundo);

routes.get('/', (req, res) => {
  res.json({
    message: 'API ESTUDOS: Olá, mundo!',
  });
});

export default routes;
