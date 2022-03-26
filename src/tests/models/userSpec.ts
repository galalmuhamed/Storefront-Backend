import { User, UserStore } from '../../models/user';

describe('User Model', () => {
	const store = new UserStore();
	let id: string;

	it('User Model should have a index method', () => {
		expect(store.index).toBeDefined();
	});

	it('User Model should have a create method', () => {
		expect(store.create).toBeDefined();
	});

	it('User Model should have a Show method', () => {
		expect(store.show).toBeDefined();
	});

	it('User Model should have a Delete method', () => {
		expect(store.delete).toBeDefined();
	});

	it('Create User', async () => {
		const userInfo: User = {
			first_name: 'galal',
			last_name: 'mohamed',
			password: 'pass',
		};
		const user = await store.create(userInfo);
		id = user.id as string;
		expect(user).toEqual({
			id: id,
			first_name: 'galal',
			last_name: 'mohamed',
		});
	});

	it('Show user', async () => {
		const user = await store.show(id);
		expect(user).toEqual({
			id: id,
			first_name: 'galal',
			last_name: 'mohamed',
		});
	});

	it('Delete user', async () => {
		const user = await store.delete(id);
		expect(user).toEqual({
			id: id,
			first_name: 'galal',
			last_name: 'mohamed',
		});
	});
});
