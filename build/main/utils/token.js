"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configAppContext_1 = __importDefault(require("../config/configAppContext"));
class GenerateToken {
    static createToken(payload) {
        return jsonwebtoken_1.default.sign(Object.assign({}, payload), configAppContext_1.default.Screat);
    }
    static compareToken(token) {
        return jsonwebtoken_1.default.verify(token, configAppContext_1.default.Screat);
    }
}
exports.default = GenerateToken;
