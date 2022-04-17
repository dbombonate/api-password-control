import { Router } from 'express';

import 'express-async-errors';

const router = new Router();

import newPasswordController from '../controllers/NewPasswordController';
import callNextPasswordController from '../controllers/CallNextPasswordController';
/* const callNextPasswordController = require('./app/controllers/CallNextPasswordController');
const listPasswordController = require('./app/controllers/ListPasswordsController');

routes.get('/', (req,res) => {
  res.send({ message: "Password Call API"})
});

routes.post('/api/passwords', newPasswordController.handle);

routes.get('/api/password', callNextPasswordController.handle);
routes.get('/api/password/list/:option', listPasswordController.handle); */

router.post('/', newPasswordController.handle);
router.patch('/', callNextPasswordController.handle);
router.get('/');

export default router;

// MIT WebService: http://192.168.1.168:6010/MIT_WCF/
