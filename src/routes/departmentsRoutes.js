import { Router } from 'express';

import 'express-async-errors';

import checkErrors from '../middlewares/checkErrors';

import departmentController from '../controllers/DepartmentController';

const router = new Router();

router.get('/', checkErrors, departmentController.index);
router.get('/:id', checkErrors, departmentController.show);
router.post('/', checkErrors, departmentController.store);
router.delete('/:id', checkErrors, departmentController.delete);
router.patch('/:id', checkErrors, departmentController.update);

export default router;
