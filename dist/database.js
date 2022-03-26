"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config"));
var pg_1 = require("pg");
var Client = new pg_1.Pool({
    host: config_1.default.POSTGRES_HOST,
    database: config_1.default.ENV === 'dev' ? config_1.default.POSTGRES_DB : config_1.default.POSTGRES_DB_TEST,
    port: config_1.default.POSTGRES_PORT,
    user: config_1.default.POSTGRES_USER,
    password: config_1.default.POSTGRES_PASSWORD,
});
exports.default = Client;
