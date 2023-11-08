"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataBaseRepository_1 = __importDefault(require("../repositories/dataBaseRepository"));
const dotenv_1 = require("dotenv");
const userService_1 = __importDefault(require("../services/userService"));
const bcrypt_1 = __importDefault(require("../utils/bcrypt"));
const role_1 = __importDefault(require("../models/role"));
(0, dotenv_1.configDotenv)();
const database = new dataBaseRepository_1.default(process.env.MONGODB_URL);
const pass = bcrypt_1.default.hash("admin");
database.connect();
const admin = {
    username: "admin",
    email: "admin@mail.com",
    password: pass,
    role: role_1.default.ADMIN,
    address: "address",
    birthDay: "12",
    imageUrl: "http://test.com",
    createdBy: "admin",
    deletedBy: "admin",
    isDeleted: false
};
const user1 = {
    username: "user",
    email: "user@mail.com",
    password: pass,
    role: role_1.default.STUDENT,
    address: "address",
    birthDay: "12",
    imageUrl: "http://test.com",
    createdBy: "user1",
    deletedBy: "user1",
    isDeleted: false
};
const user2 = {
    username: "user2",
    email: "user2@mail.com",
    password: pass,
    role: role_1.default.STUDENT,
    address: "address",
    birthDay: "12",
    imageUrl: "http://test.com",
    createdBy: "user2",
    deletedBy: "user2",
    isDeleted: false
};
const seeding = () => __awaiter(void 0, void 0, void 0, function* () {
    const u1 = yield userService_1.default.create(admin);
    const u2 = yield userService_1.default.create(user1);
    const u3 = yield userService_1.default.create(user2);
    console.log([u1, u2, u3]);
});
seeding();
