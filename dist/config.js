"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, PORT = _a.PORT, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_PORT = _a.POSTGRES_PORT, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, SALT_ROUNDS = _a.SALT_ROUNDS, TOKEN_SECRET = _a.TOKEN_SECRET;
exports.default = {
    PORT: PORT,
    POSTGRES_HOST: POSTGRES_HOST,
    POSTGRES_PORT: POSTGRES_PORT,
    POSTGRES_DB: POSTGRES_DB,
    POSTGRES_DB_TEST: POSTGRES_DB_TEST,
    POSTGRES_USER: POSTGRES_USER,
    POSTGRES_PASSWORD: POSTGRES_PASSWORD,
    ENV: ENV,
    BCRYPT_PASSWORD: BCRYPT_PASSWORD,
    SALT_ROUNDS: SALT_ROUNDS,
    TOKEN_SECRET: TOKEN_SECRET,
};
