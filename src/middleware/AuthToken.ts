import { Request, Response, NextFunction } from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';
const verifyAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorizationHeader = req.headers.authorization as string;
		const token = authorizationHeader && authorizationHeader.split(' ')[1];
		jwt.verify(token, config.TOKEN_SECRET as string);
		next();
	} catch (err) {
		res.status(401).send(`Error unAuthorized user ${err}`);
	}
};

export default verifyAuthToken;
