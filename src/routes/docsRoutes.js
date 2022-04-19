import { Router } from 'express';

import swaggerUiExpress from 'swagger-ui-express';
import swaggerFile from '../../swagger/swagger_output.json';

const router = new Router();

router.get('/', swaggerUiExpress.setup(swaggerFile));

export default router;
