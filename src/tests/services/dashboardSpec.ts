import { DashboardStore } from '../../services/dashboard';

describe('Dashboard Services', () => {
	const store = new DashboardStore();
	it('Popular Products service should have a popularProduct method', () => {
		expect(store.popularProducts).toBeDefined();
	});
});
