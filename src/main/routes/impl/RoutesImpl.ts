import { Router } from "express";
import { appContext } from "../..";
import Routes from "../Routes";
import UserController from "./UserRouterImpl";

export default class RoutesImpl implements Routes{
  router: Router;
  userController: UserController;

  constructor() {
    this.router = appContext.createrRouter();
    this.userController = appContext.createUserController()
  }

  useRouter(): Router {
    return this.router
                  .use("/users", this.userController.useRouter())
                  
  }
}
