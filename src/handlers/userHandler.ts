import { UserStore, User } from '../models/user';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

const store = new UserStore();

export const index = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users = await store.index();
		res.json(users);
	} catch (err) {
		next(err);
	}
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = req.params.id;
		const users = await store.index();
		const uids = users.map(item => item.id);
		const uid = uids.includes(id);
		if (!uid) {
			res.status(404).send('User not found');
			return;
		}
		const data = await store.show(id);
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
		const userInfo: User = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			password: req.body.password,
		};
		if (
			userInfo.first_name === '' ||
			userInfo.last_name === '' ||
			userInfo.password === ''
		) {
			res
				.status(400)
				.send('Cannot First Name, Last Name And password to be Empty');
			return;
		}
		const data = await store.create(userInfo);
		const token = jwt.sign({ user: data }, config.TOKEN_SECRET as string);
		res.json({ ...data, token });
	} catch (err) {
		next(err);
	}
};

export const deleteUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id;
		const user = await store.delete(id);
		res.json(user);
	} catch (err) {
		next(err);
	}
};
