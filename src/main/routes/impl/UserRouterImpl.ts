import { Router, Request, Response } from "express"
import { appContext } from '../../index'
import Routes from "../Routes";
export default class UserRouterImpl implements Routes{

     router: Router;

     constructor(){
        this.router = appContext.createrRouter()
     }

     useRouter(): Router {
        return this.router
                        .get("/", async (req: Request, res: Response) : Response =>{
                            return res.send("Test Get")
                        })
                        
     }
    
}