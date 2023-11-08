"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configAppContext_1 = __importDefault(require("../config/configAppContext"));
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userRouter = configAppContext_1.default.createUserRouter();
    }
    useRouter() {
        return this.router.use("/users", this.userRouter.useRouter());
    }
}
exports.default = Routes;
