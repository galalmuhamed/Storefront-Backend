import supertest from 'supertest';
import app from '../../../server';

const request = supertest(app);

describe('Test endpoint /popularProducts', () => {
	it('GET 5 Popular Product', async () => {
		const res = await request.get('/popularProducts');
		expect(res.status).toBe(200);
	});
});
