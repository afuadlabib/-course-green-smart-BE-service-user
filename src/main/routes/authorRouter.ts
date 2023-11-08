import { Router } from "express"
import  userController from "../controllers/userController";

class UserRouter{
   router = Router();

   useRouter(){
      return this.router.get("/", userController.find)    
   }
}

export default new UserRouter()