import dotenv from 'dotenv';
import 'express-async-errors';
import express from 'express';

import './database';

import storeRoutes from './routes/storeRoutes';
import departmentRoutes from './routes/departmentsRoutes';
import passwordRoutes from './routes/passwordRoutes';

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
    this.app.use((error, req, res, next) => {
      console.log('error middleware');
      res.status(500).send({ erro: error.message });
    });
  }
}

export default new App().app;
