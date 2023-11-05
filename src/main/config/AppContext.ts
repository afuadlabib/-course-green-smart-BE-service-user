import { ConnectOptions, Mongoose } from "mongoose";
import DataBaseRepositoryImpl from "../repositories/impl/DataBaseRepositoryImpl";
import { Router } from "express";
import RoutesImpl from "../routes/impl/RoutesImpl";

export default interface Context {
    readonly databaseUrl: string;
    readonly port: number;
    readonly mongoDbOptions: ConnectOptions;

    createDataBaseImpl() : DataBaseRepositoryImpl;
    createMongoose() : Mongoose;
    createrRouter() : Router;
    createRoutes(): RoutesImpl;
}

