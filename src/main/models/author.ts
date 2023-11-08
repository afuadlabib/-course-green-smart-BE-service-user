import { Model, Schema, model } from "mongoose";
import IHistory from "./history";
import AuthorSchema from "./schemas/AuthorSchema";

export interface IAuthor extends IHistory {
  name: string;
  userId: bigint;
}


export default class Author{
  
  getAuthor(): Model<any, any> {
    const authors = new Schema<IAuthor>(AuthorSchema)
    return model('authors', authors)
  }
}

