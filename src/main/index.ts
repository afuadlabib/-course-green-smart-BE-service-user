import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dataBaseRepository from "./repositories/dataBaseRepository";
import routes from "./routes/routes";
import { configDotenv } from "dotenv";

configDotenv()

const app: Express = express();
const port: number = parseInt(<string>process.env.PORT)

dataBaseRepository.connect()

app
  .use(cors())
  .use(morgan("dev"))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.json({ limit: "3MB" }))
  .get("/", (req: Request, res: Response) => {
    res.status(200).send("Welcome To Service Users");
  })
  .use("/api/v1", routes.useRouter())
  .listen(port, (): void => {
    console.log(`Server Running Port: ${port}`);
  });
