import { Router } from 'express';
import brands from './brands.routes';

const router = Router();

router.use('/brands', brands);

export default router;
