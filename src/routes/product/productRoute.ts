import { Router } from 'express';
import {
	index,
	show,
	create,
	deleteProduct,
} from '../../handlers/productHandler';
import verifyAuthToken from '../../middleware/AuthToken';

const productRoute = Router();

productRoute
	.get('/', index)
	.get('/:id', show)
	.post('/', verifyAuthToken, create)
	.delete('/:id', verifyAuthToken, deleteProduct);

export default productRoute;
