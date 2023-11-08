import { Model, Schema, model } from "mongoose";
import IHistory from "./history";
import AuthorSchema from "./schemas/AuthorSchema";

export interface IAuthor extends IHistory {
  name: string;
  userId: bigint;
}


export class Author{
  getAuthor(): Model<any, any> {
    return model('authors', new Schema<IAuthor>(AuthorSchema))
  }
}


export default new Author()