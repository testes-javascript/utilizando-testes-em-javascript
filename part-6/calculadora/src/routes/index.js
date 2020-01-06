import { Router } from 'express';
import MathController from '../controllers/MathController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Calculadora: Olá, mundo!',
  });
});

routes.get('/calculadora', (req, res) => {
  res.render('calculadora');
});

routes.post('/realizarexpressao', MathController.math);

export default routes;
