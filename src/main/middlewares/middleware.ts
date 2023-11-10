import { NextFunction, Request, Response } from "express";
import Token from "../utils/token";
import UserService from "../services/userService";

export default class Middleware{

    constructor(){}

    public useAuth(req: Request, res: Response, next: NextFunction):  Response | void {
        
        try {
            const authorization: string | undefined = req.headers.authorization;

            if(!authorization) throw new TypeError("JsonWebTokenError");

            const [bearer, token] : string[] | undefined = authorization.split(" ");

            const payload : any = Token.compareToken(token);

            const findUser = UserService.findById(payload.id)

            if(!findUser) throw new TypeError("UnAuthorized");

            next()

        } catch (error) {
            next(error);

        }
    }

    public useErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): Response {
        let status: number;

        let error: any = { error: err.message }

        switch(err.message){
            case "Invalid email/username/password":           
                status = 400;
                break;

            case "JsonWebTokenError":

            case "invalid signature":

            case "UnAuthorized":
                status = 401;
                break;

            case "User not found":

            case "Author not found":
                status = 404;
                break;

            default:
                error = { error: "Internal server error" };

                status = 500;                
        }

        return res.status(status).json( error )
    }
}