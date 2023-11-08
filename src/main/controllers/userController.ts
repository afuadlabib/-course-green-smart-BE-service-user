import { Request, Response } from "express"
import UserService from "../services/userService";
import GenerateToken from "../utils/token";

export default class UserController{
    
    public async login(req: Request, res: Response){
        try {
            const filter: any = {}

            if(req.body.username) filter.username = req.body.username;

            else if(req.body.email) filter.email = req.body.email;

            const data = await UserService.findOne(filter);

            if(!data) return res.status(400).json({ msg: "Invalid email/username/password" })
            
            const token: string = GenerateToken.createToken({ id: data._id })

            return res.status(200).json({ token, data })

        } catch (error) {
            res.status(500).json({msg: "Error"})

        }
    }

    public async register(req: Request, res: Response) {
        try {
            const data: any = await UserService.create({ ...req.body })

            const token: string = GenerateToken.createToken({ id: data._id })

            return res.status(200).json({ token, data })

        } catch (error) {
            res.status(500).json({ msg: "Error"})
            
        }
    }

    public async find(req: Request, res: Response) {
        try {
            const data: object = await UserService.find()

            return res.status(200).json(data)

        } catch (error) {
            res.status(500).json({ msg: "Error" })
            
        }
    }

}
