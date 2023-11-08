import { Router } from "express"
import ConfigAppContext from "../config/configAppContext";

export default class UserRouter{
   router = Router();
   userController = ConfigAppContext.createUserController()

   useRouter(){
      return this.router.get("/", this.userController.find)    
   }
}
