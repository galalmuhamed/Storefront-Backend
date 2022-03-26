import { Router } from 'express';
import { index, show, create, addProduct } from '../../handlers/orderHandler';
import AuthTokenValidateUser from '../../middleware/AuthTokenValidateUser';

const orderRoute = Router();

orderRoute
	.post('/', AuthTokenValidateUser, create)
	.get('/', AuthTokenValidateUser, index)
	.get('/:id', AuthTokenValidateUser, show)
	.post('/:id/product', AuthTokenValidateUser, addProduct);
export default orderRoute;
