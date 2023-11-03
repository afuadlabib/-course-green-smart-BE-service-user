import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Request, Response } from "express";
import { connectDB } from './config/config.db';
import rootRouter from './routes/root.router';

dotenv.config()
connectDB()

const app: Express = express();
const port: number = parseInt(<string> process.env.PORT);



app
    .use(cors())
    .use(morgan("dev"))
    .use(bodyParser.urlencoded({extended: true}))
    .use(express.json({ limit: "3MB" }))
    .get("/", (req: Request, res: Response) =>{
        res.status(200).send("Welcome To Service Users")
    })
    .use("/api/v1/service-users", rootRouter)
    .listen(port, (): void => {
        console.log(`Server Running Port: ${port}`);
    })

