import dotenv from 'dotenv';
import express from 'express';

import 'express-async-errors';
import './database';

import storeRoutes from './routes/storeRoutes';
import departmentRoutes from './routes/departmentsRoutes';

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
  }
}

export default new App().app;
