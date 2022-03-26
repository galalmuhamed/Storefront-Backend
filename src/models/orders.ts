import Client from '../database';

export type Order = {
	id?: string;
	status?: string;
	user_id: number;
};
export type Order_Products = {
	id?: string;
	quantity: number;
	order_id: number;
	product_id: number;
};

export class OrderStore {
	async index(uid: number): Promise<Order[]> {
		try {
			const conn = await Client.connect();
			const sql =
				'SELECT * FROM orders INNER JOIN order_products ON order_products.order_id = orders.id WHERE user_id = ($1)';
			//"SELECT * FROM orders INNER JOIN order_products ON order_products.order_id = orders.id WHERE user_id = ($1)" if we dont add product on order no order found i can use LEFT JOIN to show
			//"SELECT * FROM orders WHERE user_id = ($1)"
			const result = await conn.query(sql, [uid]);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Get All Orders ${err}`);
		}
	}

	async show(id: string, uid: number): Promise<Order> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM orders WHERE id = ($1) AND user_id = ($2)';
			const result = await conn.query(sql, [id, uid]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Get Specific Order ${err}`);
		}
	}

	async create(o: Order): Promise<Order> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO orders(status,user_id) VALUES ($1,$2) RETURNING *';
			const result = await conn.query(sql, [o.status, o.user_id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Create Order ${err}`);
		}
	}
	async addProduct(op: Order_Products): Promise<Order_Products> {
		try {
			const conn = await Client.connect();
			const sql = `INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1,$2,$3) RETURNING *`;
			const result = await conn.query(sql, [
				op.quantity,
				op.order_id,
				op.product_id,
			]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Add Product ${err}`);
		}
	}
}
