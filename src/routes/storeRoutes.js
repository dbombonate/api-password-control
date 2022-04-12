import { Router } from 'express';

import 'express-async-errors';

import checkErrors from '../middlewares/checkErrors';

import storeController from '../controllers/StoreController';

const router = new Router();

router.get('/', checkErrors, storeController.index);
router.post('/', checkErrors, storeController.store);
router.get('/:id', checkErrors, storeController.show);
router.delete('/:id', checkErrors, storeController.delete);
router.patch('/:id', checkErrors, storeController.update);

export default router;
