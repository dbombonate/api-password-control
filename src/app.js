import dotenv from 'dotenv';
import 'express-async-errors';
import express from 'express';

import './database';

import swaggerUiExpress from 'swagger-ui-express';

import storeRoutes from './routes/storeRoutes';
import departmentRoutes from './routes/departmentsRoutes';
import passwordRoutes from './routes/passwordRoutes';
import docsRoutes from './routes/docsRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/stores', storeRoutes);
    this.app.use('/api/departments', departmentRoutes);
    this.app.use('/api/passwords', passwordRoutes);
    this.app.use('/docs', swaggerUiExpress.serve, docsRoutes);
    this.app.use((error, req, res, next) => {
      console.log(error);
      res.status(500).send({ erro: error.message });
    });
  }
}

export default new App().app;
