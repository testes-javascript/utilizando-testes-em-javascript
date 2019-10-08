import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Enconding'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
      })
    );
    this.server.use(compression());
    this.server.use(helmet());
    this.server.use(bodyParser.json({ type: 'application/*+json' }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
