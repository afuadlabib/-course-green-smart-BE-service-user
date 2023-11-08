import { Router } from "express";
import UserRouter from "./userRouter";
import ConfigAppContext from "../config/configAppContext";

export default class Routes{
  private router : Router= Router();

  private userRouter: UserRouter = ConfigAppContext.createUserRouter()

  public useRouter(): Router {
    return this.router.use("/users", this.userRouter.useRouter());

  }
}

