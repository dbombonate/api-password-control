import { Router } from 'express';

import 'express-async-errors';

import storeController from '../controllers/StoreController';

const router = new Router();

router.get('/', storeController.index);
router.post('/', storeController.store);
router.get('/:id', storeController.show);
router.delete('/:id', storeController.delete);
router.patch('/:id', storeController.update);

export default router;
