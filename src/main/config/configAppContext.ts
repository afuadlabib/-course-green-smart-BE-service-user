import express, { Express } from "express" 
import { configDotenv } from "dotenv";
import DataBaseRepository from "../repositories/dataBaseRepository";
import Routes from "../routes/routes";
import UserRouter from "../routes/userRouter";
import AuthController from "../controllers/userController";
import Token from "../utils/token";
import Middleware from "../middlewares/middleware";

configDotenv()

export default class ConfigAppContext {
    static app = express();

    static port = parseInt(<string>process.env.PORT);
    
    static dbUrl = <string> process.env.MONGODB_URL;
    
    static Screat = <string> process.env.SECREAT;

    public static createRoutes(): Routes {
        return new Routes()
    }

    public static createUserRouter(): UserRouter {
        return new UserRouter()
    }

    public static createDatabaseRepository(): DataBaseRepository{
        return new DataBaseRepository(this.dbUrl)
    }

    public static createUserController(): AuthController{
        return new AuthController()
    }

    public static createToken(): Token{
        return new Token()
    }

    public static createMiddleware(): Middleware{
        return new Middleware()
    }

}
