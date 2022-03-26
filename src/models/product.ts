import Client from '../database';

export type Product = {
	id?: string;
	name: string;
	price: number;
};

export class ProductStore {
	async index(): Promise<Product[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM products';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot get all Products ${err}`);
		}
	}
	async show(id: string): Promise<Product> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM products WHERE id=($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot show This Product ${err}`);
		}
	}
	async create(p: Product): Promise<Product> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO products (name, price) VALUES($1,$2) RETURNING *';
			const result = await conn.query(sql, [p.name, p.price]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Create new Product ${err}`);
		}
	}
	async delete(id: string): Promise<Product> {
		try {
			const conn = await Client.connect();
			const sql = 'DELETE FROM products WHERE id=($1) RETURNING *';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Delete Book ${err}`);
		}
	}
}
