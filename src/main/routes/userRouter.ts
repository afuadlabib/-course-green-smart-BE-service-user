import { Router } from "express"
import ConfigAppContext from "../config/configAppContext";

export default class UserRouter{
   private router = Router();

   private userController = ConfigAppContext.createUserController()

   public useRouter(){
      return this.router
                        .get("/", this.userController.find)

                        .post("/login", this.userController.login)
                        
                        .post("/register", this.userController.register)
   }
}
