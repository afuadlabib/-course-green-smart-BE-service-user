import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import AppContext from "./config/appContext";
import DataBaseRepository from "./repositories/dataBaseRepository";
import { ServerResponse, IncomingMessage, Server } from "http";
import Routes from "./routes/routes";
import { platform } from "os";

export default class AppServer{
  private static app: Express = AppContext.app;

  private static port: number = AppContext.port;

  private static db: DataBaseRepository = AppContext.createDatabaseRepository();

  private static routes: Routes =  AppContext.createRoutes();

  constructor(){}

  public static run(): Server<typeof IncomingMessage, typeof ServerResponse>{

    return this.app
    
                .use(cors())

                .use(morgan("dev"))

                .use(bodyParser.urlencoded({ extended: true }))

                .use(express.json({ limit: "3MB" }))

                .get("/", (req: Request, res: Response) => {
                  res.status(200).send("Welcome To Service Users");

                })

                .use("/api/v1", this.routes.useRouter())

                .listen(this.port, (): void => {
                  console.log(`[${new Date()}]: Server Running ${platform} Port ${this.port}`);

                  console.log(`[${new Date()}]: Connecting database ...`);

                  this.db.connect();

                  console.log(`[${new Date()}]: Connect database successfully`);

                });
    
  }
  

}
