"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class Encrypt {
    static hash(password) {
        return bcrypt_1.default.hashSync(password, this.salt);
    }
    static compare(password, encrypted) {
        return bcrypt_1.default.compareSync(password, encrypted);
    }
}
Encrypt.salt = bcrypt_1.default.genSaltSync(10);
exports.default = Encrypt;
