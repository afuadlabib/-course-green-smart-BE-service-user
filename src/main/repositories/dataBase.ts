import mongoose from "mongoose";

interface IDataBase {
  dbUrl: string;
  connect(): Promise<typeof mongoose>;
}

export default class DataBase implements IDataBase {
  dbUrl : string;

  constructor(dbUrl: string){
    this.dbUrl = dbUrl;
  }

  public connect() {
    return mongoose.connect(this.dbUrl);
  }
}




