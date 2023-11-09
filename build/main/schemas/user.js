"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const role_1 = __importDefault(require("./role"));
exports.UserSchema = {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(role_1.default), required: true },
    birthDay: { type: String, required: true },
    imageUrl: { type: String, required: true },
    address: { type: String, required: true },
    isDeleted: { type: Boolean },
    createdBy: { type: String },
    deletedBy: { type: String },
};
