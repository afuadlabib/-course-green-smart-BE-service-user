import express from "express";
import { configDotenv } from "dotenv";
import DataBase from "../repositories/dataBase";
import Routes from "../routes/routes";
import AuthRouter from "../routes/authRouter";
import AuthController from "../controllers/authController";
import Token from "../utils/token";
import Middleware from "../middlewares/middleware";
import Encrypt from "../utils/ecrypt";
import AuthorController from "../controllers/authorController";
import AuthorRouter from "../routes/authorRouter";
import StudentController from "../controllers/studentController";
import TeacherController from "../controllers/teacherController";
import TeacherRouter from "../routes/teacherRouter";
import StudentRouter from "../routes/studentRouter";

configDotenv();


export default class AppContext {
  static app = express();

  static port = parseInt(<string>process.env.PORT);

  static dbUrl = <string>process.env.MONGODB_URL;

  static Screat = <string>process.env.SECREAT;



  constructor() {}

  public static createRoutes(): Routes {
    return new Routes();
  }

  public static createUserRouter(): AuthRouter {
    return new AuthRouter();
  }

  public static createDatabaseRepository(): DataBase {
    return new DataBase(this.dbUrl);
  }

  public static createUserController(): AuthController {
    return new AuthController();
  }

  public static createMiddleware(): Middleware {
    return new Middleware();
  }

  public static createEncrypt(): Encrypt {
    return new Encrypt();
  }

  public static createToken(): Token {
    return new Token();
  }

  public static createAuthorController(): AuthorController {
    return new AuthorController();
  }

  public static createAuthorRouter(): AuthorRouter {
    return new AuthorRouter();
  }

  public static createStudentController(): StudentController {
    return new StudentController();
  }

  public static createStudentRouter(): StudentRouter {
    return new StudentRouter();
  }

  public static createTeacherController(): TeacherController {
    return new TeacherController();
  }

  public static createTeacherRouter(): TeacherRouter {
    return new TeacherRouter();
  }

}
