import { Router, Request, Response } from "express";

const rootRouter: Router = Router();

rootRouter
    .get("/", (req: Request, res: Response): void =>{
        res.send("Users Services")
    } )

export default rootRouter;
