import { Mongoose, ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import DatabaseImpl from "../../repositories/impl/DataBaseRepositoryImpl";
import AppContext from "../AppContext";
import { Router } from "express";
import RoutesImpl from "../../routes/impl/RoutesImpl";
import UserController from "../../routes/impl/UserRouterImpl";
import DbConnectionOpt from "../config/DbConnectionOpt";

dotenv.config();

export default class AppContextImpl implements AppContext {
  readonly databaseUrl: string;
  readonly port: number;
  readonly mongoDbOptions: ConnectOptions;

  constructor() {
    this.databaseUrl = <string>process.env.MONGODB_URL;
    this.port = parseInt(<string>process.env.PORT);
    this.mongoDbOptions = <ConnectOptions> DbConnectionOpt;
  }
  static run() {
    return new AppContextImpl();
  }

  createMongoose(): Mongoose {
    return new Mongoose();
  }

  createDataBaseImpl(): DatabaseImpl {
    return new DatabaseImpl(
      this.createMongoose(),
      this.databaseUrl,
      this.mongoDbOptions
    );
  }

  createrRouter(): Router {
    return Router();
  }

  createRoutes(): RoutesImpl {
    return new RoutesImpl();
  }

  createUserController(): UserController{
    return new UserController
  }
}
