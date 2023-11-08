import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import ConfigAppContext from "./config/configAppContext";
import DataBaseRepository from "./repositories/dataBaseRepository";
import { ServerResponse, IncomingMessage, Server } from "http";
import Routes from "./routes/routes";


export default class AppServer{
  protected static app: Express = ConfigAppContext.app;

  protected static port: number = ConfigAppContext.port;

  protected static db: DataBaseRepository = ConfigAppContext.createDatabaseRepository();

  protected static routes: Routes =  ConfigAppContext.createRouter();


  public static run(): Server<typeof IncomingMessage, typeof ServerResponse>{
    
    console.log("Connecting database ...");
    this.db.connect()
    console.log("Connect database successfully");

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
                  console.log(`Server Running Port: ${this.port}`);
                });
    
  }
  

}
