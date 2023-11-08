import { Request, Response } from "express"
import userService from "../services/userService";

export class UserController{
    async find(req: Request, res: Response) {
        const data = await userService.find()
        res.status(200).json(data)
    }

}

export default new UserController();