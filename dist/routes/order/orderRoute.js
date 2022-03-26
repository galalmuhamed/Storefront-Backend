"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orderHandler_1 = require("../../handlers/orderHandler");
var AuthTokenValidateUser_1 = __importDefault(require("../../middleware/AuthTokenValidateUser"));
var orderRoute = (0, express_1.Router)();
orderRoute
    .post('/', AuthTokenValidateUser_1.default, orderHandler_1.create)
    .get('/', AuthTokenValidateUser_1.default, orderHandler_1.index)
    .get('/:id', AuthTokenValidateUser_1.default, orderHandler_1.show)
    .post('/:id/product', AuthTokenValidateUser_1.default, orderHandler_1.addProduct);
exports.default = orderRoute;
