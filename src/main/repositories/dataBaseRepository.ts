import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

interface IDataBaseRepository {
  url: string;
  connect(): Promise<typeof mongoose>;
}

export class DataBaseRepository implements IDataBaseRepository {
  url = <string> process.env.MONGODB_URL;
  connect() {
    return mongoose.connect(this.url);
  }
}

export default new DataBaseRepository();
