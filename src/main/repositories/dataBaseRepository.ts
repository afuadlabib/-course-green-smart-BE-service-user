import mongoose from "mongoose";
import ConfigAppContext from "../config/configAppContext";

interface IDataBaseRepository {
  dbUrl: string;
  connect(): Promise<typeof mongoose>;
}

export default class DataBaseRepository implements IDataBaseRepository {
  dbUrl : string;

  constructor(dbUrl: string){
    this.dbUrl = dbUrl;
  }

  connect() {
    return mongoose.connect(this.dbUrl);
  }
}


