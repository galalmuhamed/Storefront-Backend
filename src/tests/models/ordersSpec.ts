import { Order, OrderStore } from '../../models/orders';

import { ProductStore } from '../../models/product';
import { UserStore } from '../../models/user';

describe('Order Model', () => {
	const oStore = new OrderStore();
	const uStore = new UserStore();
	const pStore = new ProductStore();
	let oid: number | string;
	let uid: number;
	let pid: number;
	let opid: string;

	it('Order Model should have a index method', () => {
		expect(oStore.index).toBeDefined();
	});

	it('Order Model should have a create method', () => {
		expect(oStore.create).toBeDefined();
	});

	it('Order Model should have a Show method', () => {
		expect(oStore.show).toBeDefined();
	});
	it('Order Model should have a Add Product method', () => {
		expect(oStore.addProduct).toBeDefined();
	});

	beforeAll(async () => {
		const user = await uStore.create({
			first_name: 'galal',
			last_name: 'mohamed',
			password: 'pass',
		});
		uid = user.id as unknown as number;

		const product = await pStore.create({
			name: 'Iphone 13',
			price: 1000,
		});
		pid = product.id as unknown as number;
	});

	it('Create Order by UID and PID', async () => {
		const orderInfo: Order = {
			status: 'active',
			user_id: uid,
		};
		const order = await oStore.create(orderInfo);
		oid = order.id as string;
		expect(order).toEqual({
			id: oid,
			status: 'active',
			user_id: uid,
		});
	});

	it('Get all Order by User UID', async () => {
		const orders = await oStore.index(uid);
		expect(orders).toBeTruthy();
	});

	it('Get Specific Order by order id and UID ', async () => {
		const order = await oStore.show(oid as string, uid);
		expect(order).toEqual({
			id: oid as string,
			status: 'active',
			user_id: uid,
		});
	});
	it('ADD Product To Order', async () => {
		const product = await oStore.addProduct({
			quantity: 10,
			order_id: oid as number,
			product_id: pid,
		});
		opid = product.id as string;
		expect(product).toEqual({
			id: opid,
			quantity: '10' as unknown as number,
			order_id: oid as number,
			product_id: pid,
		});
	});
});
