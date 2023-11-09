import { Router } from "express";
import UserRouter from "./userRouter";
import ConfigAppContext from "../config/configAppContext";
import Middleware from "../middlewares/middleware";

export default class Routes{
  private router : Router= Router();

  private userRouter: UserRouter = ConfigAppContext.createUserRouter();

  private middleware: Middleware = ConfigAppContext.createMiddleware();

  public useRouter(): Router {
    return this.router
                  .use("/auths", this.userRouter.useRouter())
                  .use(this.middleware.useErrorHandler)


  }
}

