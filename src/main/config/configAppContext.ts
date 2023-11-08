import express, { Express } from "express" 
import { configDotenv } from "dotenv";
import DataBaseRepository from "../repositories/dataBaseRepository";
import Routes from "../routes/routes";
import UserRouter from "../routes/userRouter";
import UserController from "../controllers/userController";
import GenerateToken from "../utils/token";

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

    public static createDatabaseRepository(){
        return new DataBaseRepository(this.dbUrl)
    }

    public static createUserController(){
        return new UserController()
    }

    public static createGenerateToken(){
        return new GenerateToken()
    }

}