import { NextFunction, Response } from "express";
import UserService from "../services/userService";
import Token from "../utils/token";
import Encrypt from "../utils/ecrypt";
import RequestRepository from "../repositories/requestRepository";

export default class AuthController {
  constructor() {}

  public async login(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const filter: any = {};

      if (req.body.username) filter.username = req.body.username;
      else if (req.body.email) filter.email = req.body.email;

      const findUser = await UserService.findOne(filter);

      if (!findUser) throw new TypeError("Invalid email/username/password");
      else if (!Encrypt.compare(req.body.password, findUser.password))
        throw new TypeError("Invalid email/username/password");

      const data: any = {
        _id: findUser._id,
        username: findUser.username,
        email: findUser.email,
        address: findUser.address,
        birthDay: findUser.birthDay,
        imageUrl: findUser.imageUrl,
        role: findUser.role,
      };

      const token: string = Token.createToken({ id: data._id });

      return res.status(200).json({ token, data });
    } catch (error) {
      next(error);
    }
  }

  public async register(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      req.body.password = Encrypt.hash(req.body.password);

      const createData: any = await UserService.create({ ...req.body });

      const token: string = Token.createToken({ id: createData._id });

      const data = {
        username: createData.username,
        email: createData.email,
        address: createData.address,
        birthDay: createData.birthDay,
        imageUrl: createData.imageUrl,
        role: createData.role
      }

      return res.status(201).json({ token, data });
    } catch (error: any) {
      next(error);
    }
  }

  public async find(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data: object = await UserService.find();

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async findById(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data: object = await UserService.findById(req.params.id);

      if (!data) throw new TypeError("User not found");

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
