import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// import all models
import Store from '../models/Store';
import Department from '../models/Department';
import Password from '../models/Password';

// declare all models above
const models = [Store, Department, Password];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
