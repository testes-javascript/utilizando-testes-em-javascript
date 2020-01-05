import express from 'express';
import bodyParser from 'body-parser';
import mustacheExpress from 'mustache-express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.templateEngine();
  }

  templateEngine() {
    this.server.engine('mustache', mustacheExpress());

    this.server.set('view engine', 'mustache');
    this.server.set('views', __dirname + '/views');
  }

  middlewares() {
    this.server.use(bodyParser.json({ type: 'application/*+json' }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
