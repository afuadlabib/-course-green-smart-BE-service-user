"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configAppContext_1 = __importDefault(require("../config/configAppContext"));
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = configAppContext_1.default.createUserController();
    }
    useRouter() {
        return this.router
            .get("/", (req, res) => {
            this.userController.find(req, res);
        })
            .post("/login", (req, res) => {
            this.userController.login(req, res);
        })
            .post("/register", (req, res) => {
            this.userController.register(req, res);
        });
    }
}
exports.default = UserRouter;
