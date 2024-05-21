import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-data', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:dataId', ProductControllers.getSingleProduct);

export const ProductRoutes = router;
