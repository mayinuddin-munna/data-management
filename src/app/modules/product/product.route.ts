import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProduct);
router.put('/update-product/:productId', ProductControllers.updateProduct);
router.delete('/delete-product/:productId', ProductControllers.deleteProduct);

router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getSingleProduct);

export const ProductRoutes = router;
