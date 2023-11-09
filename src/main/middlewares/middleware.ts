import { NextFunction, Request, Response } from "express";
import Token from "../utils/token";
import UserService from "../services/userService";

export default class Middleware{

    useAuth(req: Request, res: Response, next: NextFunction):  Response | void {
        
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

    useErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): Response {

        let status: number;

        let error: any = { error: err.message }

        switch(err.message){
            case "JsonWebTokenError":
            case "UnAuthorized":
                status = 401
                return res.status(status).json( error );
            case "User not found":
                status = 404
                return res.status(status).json( error );

            default:
                status = 500
                error = { error: "Internal server error" }
                return res.status(status).json( error )
        }
    }
}