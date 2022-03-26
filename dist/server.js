"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config"));
var server_1 = __importDefault(require("./routes/server"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var port = config_1.default.PORT;
app.use('/', server_1.default);
app.listen(port, function () {
    console.log("server lestion to http://localhost:".concat(port));
});
exports.default = app;
