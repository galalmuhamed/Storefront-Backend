import supertest from 'supertest';
import app from '../../../server';

const request = supertest(app);

describe('Test endpoint /orders', () => {
	const productInfo = {
		name: 'Iphone 13',
		price: 1000,
	};
	const userInfo = {
		first_name: 'galal',
		last_name: 'mohamed',
		password: 'pass',
	};
	let token: string;
	let uid: string;
	let pid: string;
	let oid: string;
	beforeAll(async () => {
		const res = await request.post('/users').send(userInfo);
		token = res.body.token;
		uid = res.body.id;
		const ress = await request
			.post('/products')
			.set('Authorization', 'Bearer ' + token)
			.send(productInfo);
		pid = ress.body.id;
	});

	it('Create Order By User', async () => {
		const res = await request
			.post('/orders')
			.set('Authorization', 'Bearer ' + token)
			.send({ status: 'active', user_id: uid });
		oid = res.body.id;
		expect(res.status).toBe(200);
	});

	it('Get All Orders By User', async () => {
		const res = await request
			.get('/orders')
			.set('Authorization', 'Bearer ' + token)
			.send({ user_id: uid });
		expect(res.status).toBe(200);
	});

	it('Get Specific Order by User and id', async () => {
		const res = await request
			.get(`/orders/${oid}`)
			.set('Authorization', 'Bearer ' + token)
			.send({ user_id: uid });
		expect(res.status).toBe(200);
	});
	it('Add Product to Route', async () => {
		const res = await request
			.post(`/orders/${oid}/product`)
			.set('Authorization', 'Bearer ' + token)
			.send({ quantity: 10, product_id: pid, user_id: uid });
		expect(res.status).toBe(200);
	});
});
