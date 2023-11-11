import { NextFunction, Request, Response } from "express";
import Token from "../utils/token";
import UserService from "../services/userService";
import IUser from "../schemas/user";


export default class Middleware {
  constructor() {}

  public async useAuth(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const authorization: string | undefined = req.headers.authorization;

      if (!authorization) throw new TypeError("JsonWebTokenError");

      const [bearer, token]: string[] | undefined = authorization.split(" ");

      const payload: any = Token.compareToken(token);

      const findUser: any = await UserService.findById(payload.id);

      if (!findUser) throw new TypeError("UnAuthorized");

      req.currentUser = findUser

      next();
    } catch (error) {
      next(error);
    }
  }

  public useErrorHandler(
    err: Error | any,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response {
    let status: number;

    let errorData: any = {
        name: err.name,
        message: err.message
    };

    if (err.errors) {
      err.message = "ValidatorError";
      let errors: any[] = [];
      for (let e in err.errors) {
        errors.push(err.errors[e].message);
      }

      errorData.errors = errors
    }

    switch (err.message) {
      case "Invalid email/username/password":
      case "ValidatorError":
        status = 400;
        break;

      case "JsonWebTokenError":

      case "invalid signature":

      case "UnAuthorized":
        status = 401;
        break;

      case "User not found":

      case "Student not found":

      case "Author not found":

      case "Teacher not found":
        status = 404;
        break;

      default:
        errorData = { error: "Internal server error" };

        status = 500;
    }

    return res.status(status).json({...errorData});
  }
}
