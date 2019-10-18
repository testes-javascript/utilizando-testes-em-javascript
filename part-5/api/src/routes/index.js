import { Router } from 'express';
import OlaMundoController from '../app/controllers/OlaMundoController';
import UserController from '../app/controllers/UserController';

const routes = new Router();

routes.get('/olaMundo', OlaMundoController.olaMundo);

// Usuarios
routes.get('/usuarios', UserController.read);
routes.post('/usuarios', UserController.create);
routes.put('/usuarios', UserController.update);
routes.delete('/usuarios', UserController.delete);

routes.get('/', (req, res) => {
  res.json({
    message: 'API ESTUDOS: Olá, mundo!',
  });
});

export default routes;
