import { NextFunction, Request, Response } from "express"
import UserService from "../services/userService";
import Token from "../utils/token";
import Encrypt from "../utils/ecrypt";
import { Types } from "mongoose";
import { error } from "console";
export default class AuthController{
    
    public async login(req: Request, res: Response, next: NextFunction){
        try {
            const filter: any = {}

            if(req.body.username) filter.username = req.body.username;

            else if(req.body.email) filter.email = req.body.email;
            
            const data = await UserService.findOne(filter);

            if(!data) {
                return res.status(400).json({ error: "Invalid email/username/password" })

            } else if (!Encrypt.compare(req.body.password, data.password)){
                return res.status(400).json({ error: "Invalid email/username/password" })

            }
            
            const token: string = Token.createToken({ id: data._id })

            return res.status(200).json({ token, data })

        } catch (error) {
            next(error)

        }
    }

    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            const data: any = await UserService.create({ ...req.body })

            const token: string = Token.createToken({ id: data._id })

            return res.status(200).json({ token, data })

        } catch (error) {

            next(error)
            
        }
    }

    public async find(req: Request, res: Response, next: NextFunction) {
        try {
            const data: object = await UserService.find()

            return res.status(200).json(data)

        } catch (error) {

            next(error)
            
        }
    }

    public async findOne(req: Request, res: Response, next: NextFunction){
        try{
            
            const data: object = await UserService.findById(req.params.id);
            if(!data) throw new TypeError("User not found")
            return res.status(200).json(data)

        } catch (error){

            next(error)
        }
    }

}
