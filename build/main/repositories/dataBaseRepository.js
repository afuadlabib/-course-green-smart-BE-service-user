"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DataBaseRepository {
    constructor(dbUrl) {
        this.dbUrl = dbUrl;
    }
    connect() {
        return mongoose_1.default.connect(this.dbUrl);
    }
}
exports.default = DataBaseRepository;
