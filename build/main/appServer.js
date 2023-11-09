"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const configAppContext_1 = __importDefault(require("./config/configAppContext"));
const os_1 = require("os");
class AppServer {
    static run() {
        return this.app
            .use((0, cors_1.default)())
            .use((0, morgan_1.default)("dev"))
            .use(express_1.default.urlencoded({ extended: false }))
            .use(express_1.default.json({ limit: "3MB" }))
            .get("/", (req, res) => {
            res.status(200).send("Welcome To Service Users");
        })
            .use("/api/v1", this.routes.useRouter())
            .listen(this.port, () => {
            console.log(`Server Running: ${os_1.platform} Port: ${this.port}`);
            console.log("Connecting database ...");
            this.db.connect();
            console.log("Connect database successfully");
        });
    }
}
AppServer.app = configAppContext_1.default.app;
AppServer.port = configAppContext_1.default.port;
AppServer.db = configAppContext_1.default.createDatabaseRepository();
AppServer.routes = configAppContext_1.default.createRoutes();
exports.default = AppServer;
