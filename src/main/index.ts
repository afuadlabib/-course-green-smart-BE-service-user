import express, { Express, Router } from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import AppContextImpl from "./config/impl/AppContextImpl";
import DataBaseRepositoryImpl from "./repositories/impl/DataBaseRepositoryImpl";
import RoutesImpl from "./routes/impl/RoutesImpl";

export const appContext = AppContextImpl.run();

const app: Express = express();
const mongoDb: DataBaseRepositoryImpl = appContext.createDataBaseImpl();
const port: number = appContext.port;
const routes: RoutesImpl = appContext.createRoutes();

mongoDb.connect()

app
  .use(cors())
  .use(morgan("dev"))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.json({ limit: "3MB" }))
  .get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Welcome To Service Users");
  })
  .use("/api/v1/service-users", routes.useRouter())
  .listen(port, (): void => {
    console.log(`Server Running Port: ${port}`);
  });
