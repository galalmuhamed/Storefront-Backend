import { Order, Order_Products, OrderStore } from '../models/orders';
import { Request, Response, NextFunction } from 'express';

const store = new OrderStore();

export const index = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const uid = parseInt(req.body.user_id);
		const orders = await store.index(uid);
		res.json(orders);
	} catch (err) {
		next(err);
	}
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = req.params.id;
		const uid = parseInt(req.body.user_id);
		const data = await store.show(id, uid);
		res.json(data);
	} catch (err) {
		next(err);
	}
};

export const create = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const order: Order = {
			status: 'active',
			user_id: parseInt(req.body.user_id),
		};
		const data = await store.create(order);
		res.json(data);
	} catch (err) {
		next(err);
	}
};
export const addProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const order: Order_Products = {
			quantity: parseInt(req.body.quantity),
			order_id: parseInt(req.params.id),
			product_id: parseInt(req.body.product_id),
		};
		const product = await store.addProduct(order);
		res.json(product);
	} catch (err) {
		next(err);
	}
};
