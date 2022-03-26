"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_1 = require("../../services/dashboard");
describe('Dashboard Services', function () {
    var store = new dashboard_1.DashboardStore();
    it('Popular Products service should have a popularProduct method', function () {
        expect(store.popularProducts).toBeDefined();
    });
});
