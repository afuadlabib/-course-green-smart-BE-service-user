"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const user_1 = require("../schemas/user");
class UserService {
    static create(doc) {
        return this.User.create(doc);
    }
    static find() {
        return this.User.find();
    }
    static findOne(filterQuery) {
        return this.User.findOne(filterQuery);
    }
}
UserService.User = (0, mongoose_1.model)('users', new mongoose_2.Schema(user_1.UserSchema));
exports.default = UserService;
