import { index, show, create, deleteUser } from '../../handlers/userHandler';
import { Router } from 'express';
import verifyAuthToken from '../../middleware/AuthToken';

const userRoute = Router();

userRoute
	.post('/', create)
	.get('/', verifyAuthToken, index)
	.get('/:id', verifyAuthToken, show)
	.delete('/:id', verifyAuthToken, deleteUser);

export default userRoute;
