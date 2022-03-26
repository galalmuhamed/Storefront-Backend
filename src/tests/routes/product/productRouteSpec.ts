import supertest from 'supertest';
import app from '../../../server';

const request = supertest(app);

describe('Test endpoint /products', () => {
	const productInfo = {
		name: 'Iphone 13',
		price: 1000,
	};
	const userInfo = {
		first_name: 'ahmed',
		last_name: 'mohamed',
		password: 'pass',
	};
	let token: string;
	let uid: string;
	let pid: string;

	beforeAll(async () => {
		const res = await request.post('/users').send(userInfo);
		token = res.body.token;
		uid = res.body.id;
	});
	afterAll(async () => {
		await request
			.delete(`/users/${uid}`)
			.set('Authorization', 'Bearer ' + token);
	});

	it('Get All Products', async () => {
		const res = await request.get('/products');
		expect(res.status).toBe(200);
	});

	it('Create Products', async () => {
		const res = await request
			.post('/products')
			.set('Authorization', 'Bearer ' + token)
			.send(productInfo);
		pid = res.body.id;
		expect(res.status).toBe(200);
	});

	it('Get Specific Products', async () => {
		const res = await request.get(`/products/${pid}`);
		expect(res.status).toBe(200);
	});

	it('Delete Product', async () => {
		const res = await request
			.delete(`/products/${pid}`)
			.set('Authorization', 'Bearer ' + token);
		expect(res.status).toBe(200);
	});
});
