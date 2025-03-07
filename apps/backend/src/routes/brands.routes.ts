import { Router } from 'express';
import BrandsController from '../controllers/brands.controller';

const router = Router();

router.get('/', BrandsController.getAllBrands);

export default router;
