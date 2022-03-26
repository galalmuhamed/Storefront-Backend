"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productHandler_1 = require("../../handlers/productHandler");
var AuthToken_1 = __importDefault(require("../../middleware/AuthToken"));
var productRoute = (0, express_1.Router)();
productRoute
    .get('/', productHandler_1.index)
    .get('/:id', productHandler_1.show)
    .post('/', AuthToken_1.default, productHandler_1.create)
    .delete('/:id', AuthToken_1.default, productHandler_1.deleteProduct);
exports.default = productRoute;
