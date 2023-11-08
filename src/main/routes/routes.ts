import { Router } from "express";
import UserRouter from "./userRouter";
import ConfigAppContext from "../config/configAppContext";

interface IRoutes {
  router: Router;
  userRouter: UserRouter;
  useRouter(): Router;
}

export default class Routes implements IRoutes {
  router = Router();

  userRouter = ConfigAppContext.createUserRouter()

  useRouter(): Router {
    return this.router.use("/users", this.userRouter.useRouter());
  }
}

