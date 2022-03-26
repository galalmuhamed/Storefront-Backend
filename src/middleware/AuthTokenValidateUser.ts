import { Request, Response, NextFunction } from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';
const AuthTokenValidateUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorizationHeader = req.headers.authorization as string;
		const token = authorizationHeader && authorizationHeader.split(' ')[1];

		// to access data with typescript i have to use any.
		const decoded: any = jwt.verify(token, config.TOKEN_SECRET as string);
		if (decoded.user.id != req.body.user_id) {
			throw new Error('User id does not match!');
		}
		next();
	} catch (err) {
		res.status(401).send(`Error unAuthorized user ${err}`);
	}
};

export default AuthTokenValidateUser;
