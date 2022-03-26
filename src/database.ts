import config from './config';
import { Pool } from 'pg';

const Client = new Pool({
	host: config.POSTGRES_HOST,
	database: config.ENV === 'dev' ? config.POSTGRES_DB : config.POSTGRES_DB_TEST,
	port: config.POSTGRES_PORT as unknown as number,
	user: config.POSTGRES_USER,
	password: config.POSTGRES_PASSWORD,
});

export default Client;
