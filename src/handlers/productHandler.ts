import { Product, ProductStore } from '../models/product';
import { Request, Response, NextFunction } from 'express';

const store = new ProductStore();

export const index = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const products = await store.index();
		res.json(products);
	} catch (err) {
		next(err);
	}
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = req.params.id;
		const products = await store.index();
		const pids = products.map(item => item.id);
		const pid = pids.includes(id);
		if (!pid) {
			res.status(404).send('Product not Found');
			return;
		}
		const product = await store.show(id);
		res.json(product);
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
		const productInfo: Product = {
			name: req.body.name,
			price: parseInt(req.body.price),
		};
		if (productInfo.name === '') {
			res.status(400).send('Cannot Name to be Empty');
			return;
		}
		const product = await store.create(productInfo);
		res.json(product);
	} catch (err) {
		next(err);
	}
};

export const deleteProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id;
		const product = await store.delete(id);
		res.json(product);
	} catch (err) {
		next(err);
	}
};
