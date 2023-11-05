import { ConnectOptions, Mongoose } from "mongoose";

export default interface DataBaseRepository {
    mongoose: Mongoose;
    url: string;
    connectOptions: ConnectOptions;
    connect(): Promise<any>;
}