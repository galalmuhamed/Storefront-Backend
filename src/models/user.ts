import Client from '../database';
import bcrypt from 'bcrypt';
import config from '../config';

export type User = {
	id?: string;
	first_name: string;
	last_name: string;
	password?: string;
};
const hashPass = (pass: string): string => {
	const hash = bcrypt.hashSync(
		pass + config.BCRYPT_PASSWORD,
		parseInt(config.SALT_ROUNDS as string)
	);
	return hash;
};

export class UserStore {
	async index(): Promise<User[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT id,first_name,last_name FROM users';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Get all Data ${err}`);
		}
	}
	async show(id: string): Promise<User> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT id,first_name,last_name FROM users WHERE id=($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot get this User ${err}`);
		}
	}
	async create(u: User): Promise<User> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO users (first_name, last_name, password) VALUES($1,$2,$3) RETURNING id,first_name,last_name';
			const result = await conn.query(sql, [
				u.first_name,
				u.last_name,
				hashPass(u.password as string),
			]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Create User ${err}`);
		}
	}
	async delete(id: string): Promise<User> {
		try {
			const conn = await Client.connect();
			const sql =
				'DELETE FROM users WHERE id = ($1) RETURNING id,first_name,last_name';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Delete User ${err}`);
		}
	}
}
