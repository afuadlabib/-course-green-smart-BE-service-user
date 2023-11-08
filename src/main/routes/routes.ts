import { Router } from "express";
import UserRouter from "./userRouter";
import ConfigAppContext from "../config/configAppContext";

export default class Routes{
  router : Router= Router();

  userRouter: UserRouter = ConfigAppContext.createUserRouter()

  public useRouter(): Router {
    return this.router.use("/users", this.userRouter.useRouter());
  }
}

