import { Router } from "express";
import userRouter from "./authorRouter";

interface IRoutes {
  router: Router;
  useRouter(): Router;
}

export class Routes implements IRoutes {
  router = Router();
  useRouter() {
    return this.router.use("/users", userRouter.useRouter());
  }
}

export default new Routes();
