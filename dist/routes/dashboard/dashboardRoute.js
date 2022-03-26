"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dashboardHandler_1 = require("../../handlers/dashboardHandler");
var dashboardRoute = (0, express_1.Router)();
dashboardRoute.get('/', dashboardHandler_1.popularProducts);
exports.default = dashboardRoute;
