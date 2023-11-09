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
const userService_1 = __importDefault(require("../services/userService"));
const token_1 = __importDefault(require("../utils/token"));
class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body.username, ">>>>>>>>");
                const filter = {};
                if (req.body.username)
                    filter.username = req.body.username;
                else if (req.body.email)
                    filter.email = req.body.email;
                const data = yield userService_1.default.findOne(filter);
                console.log(data);
                if (!data)
                    return res.status(400).json({ msg: "Invalid email/username/password" });
                const token = token_1.default.createToken({ id: data._id });
                return res.status(200).json({ token, data });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error" });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const data = yield userService_1.default.create(Object.assign({}, req.body));
                const token = token_1.default.createToken({ id: data._id });
                return res.status(200).json({ token, data });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error" });
            }
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService_1.default.find();
                return res.status(200).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error" });
            }
        });
    }
}
exports.default = UserController;
