import Client from '../database';

export type Dashboard = {
	product_id: string;
	name: string;
	count: string;
};

export class DashboardStore {
	async popularProducts(): Promise<Dashboard[]> {
		try {
			const conn = await Client.connect();
			const sql =
				' SELECT order_products.product_id, name ,COUNT(*) FROM order_products  INNER JOIN products ON products.id = order_products.product_id GROUP BY order_products.product_id, name ORDER BY COUNT(*) DESC LIMIT 5';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Get Popular Products ${err}`);
		}
	}
}
