import supertest from 'supertest';
import app from '../../../server';

const request = supertest(app);

describe('Test endpoint /users', () => {
	const userInfo = {
		first_name: 'galal',
		last_name: 'mohamed',
		password: 'pass',
	};
	let token: string;
	let id: string;
	beforeAll(async () => {
		const res = await request.post('/users').send(userInfo);
		token = res.body.token;
		id = res.body.id;
	});

	it('Get All Users', async () => {
		const res = await request
			.get('/users')
			.set('Authorization', 'Bearer ' + token);
		expect(res.status).toBe(200);
	});

	it('Show Specific User ', async () => {
		const res = await request
			.get(`/users/${id}`)
			.set('Authorization', 'Bearer ' + token);
		expect(res.status).toBe(200);
		expect(res.body.id).toBe(id);
	});

	it('Delete User', async () => {
		const res = await request
			.delete(`/users/${id}`)
			.set('Authorization', 'Bearer ' + token);
		expect(res.status).toBe(200);
	});
});
