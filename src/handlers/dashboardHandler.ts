import { Request, Response, NextFunction } from 'express';
import { DashboardStore } from '../services/dashboard';

const store = new DashboardStore();

export const popularProducts = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const product = await store.popularProducts();
		res.json(product);
	} catch (err) {
		next(err);
	}
};
