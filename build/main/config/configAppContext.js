"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const dataBaseRepository_1 = __importDefault(require("../repositories/dataBaseRepository"));
const routes_1 = __importDefault(require("../routes/routes"));
const userRouter_1 = __importDefault(require("../routes/userRouter"));
const userController_1 = __importDefault(require("../controllers/userController"));
const token_1 = __importDefault(require("../utils/token"));
(0, dotenv_1.configDotenv)();
class ConfigAppContext {
    static createRoutes() {
        return new routes_1.default();
    }
    static createUserRouter() {
        return new userRouter_1.default();
    }
    static createDatabaseRepository() {
        return new dataBaseRepository_1.default(this.dbUrl);
    }
    static createUserController() {
        return new userController_1.default();
    }
    static createGenerateToken() {
        return new token_1.default();
    }
}
ConfigAppContext.app = (0, express_1.default)();
ConfigAppContext.port = parseInt(process.env.PORT);
ConfigAppContext.dbUrl = process.env.MONGODB_URL;
ConfigAppContext.Screat = process.env.SECREAT;
exports.default = ConfigAppContext;
