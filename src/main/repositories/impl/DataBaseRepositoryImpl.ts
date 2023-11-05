import { ConnectOptions, Mongoose } from "mongoose";
import DataBaseRepository from "../DataBaseRepository";

export default class DataBaseRepositoryImpl implements DataBaseRepository {
  mongoose: Mongoose;
  url: string;
  connectOptions: ConnectOptions;

  constructor(mongoose: Mongoose, url: string, connectOptions: ConnectOptions) {
    this.mongoose = mongoose;
    this.url = url;
    this.connectOptions = connectOptions;
  }
  connect(): void {
    this.mongoose
      .connect(this.url, this.connectOptions)
      .then((): void => {
        console.log("Connect to Database Successfully");
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
