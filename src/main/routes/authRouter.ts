import { Router } from "express";
import AppContext from "../config/appContext";
import AuthController from "../controllers/authController";
import Middleware from "../middlewares/middleware";

export default class AuthRouter {
  private router: Router;

  private authController: AuthController;

  private middleware: Middleware;

  constructor() {
    this.router = Router();

    this.authController = AppContext.createUserController();

    this.middleware = AppContext.createMiddleware();
  }

  public useRouter() {
    return this.router

      .post("/login", this.authController.login)

      .post("/register", this.authController.register)

      .use(this.middleware.useAuth)

      .get("/:id",  this.authController.findById)

      .get("/", this.authController.find);
  }
}
