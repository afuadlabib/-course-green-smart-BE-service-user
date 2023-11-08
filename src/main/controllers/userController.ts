import { Request, Response } from "express"
import UserService from "../services/userService";

export default class UserController{

    async find(req: Request, res: Response) {
        const data = await UserService.find()
        return res.status(200).json(data)
    }

}
