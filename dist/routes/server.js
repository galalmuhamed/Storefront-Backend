"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoute_1 = __importDefault(require("./user/userRoute"));
var productRoute_1 = __importDefault(require("./product/productRoute"));
var orderRoute_1 = __importDefault(require("./order/orderRoute"));
var dashboardRoute_1 = __importDefault(require("./dashboard/dashboardRoute"));
var route = (0, express_1.Router)();
route.get('/', function (req, res) {
    res.send('hello world');
});
route.use('/users', userRoute_1.default);
route.use('/products', productRoute_1.default);
route.use('/orders', orderRoute_1.default);
route.use('/popularProducts', dashboardRoute_1.default);
exports.default = route;
