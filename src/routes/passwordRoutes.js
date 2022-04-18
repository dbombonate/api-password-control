import { Router } from 'express';

import 'express-async-errors';

const router = new Router();

import newPasswordController from '../controllers/NewPasswordController';
import callNextPasswordController from '../controllers/CallNextPasswordController';
import listLastCalledPasswordController from '../controllers/ListLastCalledPasswordController';

router.post('/', newPasswordController.handle);
router.patch('/', callNextPasswordController.handle);
router.get('/', listLastCalledPasswordController.handle);

export default router;

// MIT WebService: http://192.168.1.168:6010/MIT_WCF/
