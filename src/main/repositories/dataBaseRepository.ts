import mongoose from "mongoose";

interface IDataBaseRepository {
  dbUrl: string;
  connect(): Promise<typeof mongoose>;
}

export default class DataBaseRepository implements IDataBaseRepository {
  dbUrl : string;

  constructor(dbUrl: string){
    this.dbUrl = dbUrl;
  }

  public connect() {
    return mongoose.connect(this.dbUrl);
  }
}


