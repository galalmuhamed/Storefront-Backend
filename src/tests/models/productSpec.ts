import { Product, ProductStore } from '../../models/product';

describe('Product Model', () => {
	const store = new ProductStore();
	let id: string;

	it('Product Model should have a index method', () => {
		expect(store.index).toBeDefined();
	});

	it('Product Model should have a create method', () => {
		expect(store.create).toBeDefined();
	});

	it('Product Model should have a Show method', () => {
		expect(store.show).toBeDefined();
	});

	it('Product Model should have a Delete method', () => {
		expect(store.delete).toBeDefined();
	});

	it('Create Product', async () => {
		const productInfo: Product = {
			name: 'Iphone 13',
			price: 1000,
		};
		const product = await store.create(productInfo);
		id = product.id as string;
		expect(product).toEqual({
			id: id,
			name: 'Iphone 13',
			price: '1000' as unknown as number,
		});
	});

	it('Show Product', async () => {
		const product = await store.show(id);
		expect(product).toEqual({
			id: id,
			name: 'Iphone 13',
			price: '1000' as unknown as number,
		});
	});

	it('Delete Product', async () => {
		const product = await store.delete(id);
		expect(product).toEqual({
			id: id,
			name: 'Iphone 13',
			price: '1000' as unknown as number,
		});
	});
});
