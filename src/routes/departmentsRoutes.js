import { Router } from 'express';

import 'express-async-errors';

import departmentController from '../controllers/DepartmentController';

const router = new Router();

router.get('/', departmentController.index);
router.get('/:id', departmentController.show);
router.post('/', departmentController.store);
router.delete('/:id', departmentController.delete);
router.patch('/:id', departmentController.update);

export default router;
