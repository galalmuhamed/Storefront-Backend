"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userHandler_1 = require("../../handlers/userHandler");
var express_1 = require("express");
var AuthToken_1 = __importDefault(require("../../middleware/AuthToken"));
var userRoute = (0, express_1.Router)();
userRoute
    .post('/', userHandler_1.create)
    .get('/', AuthToken_1.default, userHandler_1.index)
    .get('/:id', AuthToken_1.default, userHandler_1.show)
    .delete('/:id', AuthToken_1.default, userHandler_1.deleteUser);
exports.default = userRoute;
