import {
  Schema,
  model,
  Model,
  Query,
  FilterQuery,
  UpdateQuery,
} from "mongoose";
import { AuthorSchema, IAuthor } from "../schemas/author";
import AuthorRepository from "../repositories/authorRepository";

export default class AuthorService {
  private static Author: AuthorRepository = model(
    "authors",
    new Schema<IAuthor>(AuthorSchema)
  );

  constructor() {}

  public static async create(doc: any): Promise<any> {
    return this.Author.create(doc);
  }

  public static async find(
    filter?: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Author.find({ ...filter }, { ...projection });
  }

  public static async findById(
    id: string,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Author.findById(id, { ...projection });
  }

  public static async findOne(
    filter: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Author.findOne(filter, { ...projection });
  }

  public static async updateOne(
    filter: FilterQuery<any>,
    update: UpdateQuery<any>
  ): Promise<Query<any, any>> {
    return this.Author.updateOne(filter, update);
  }

  public static async deleteOne(
    filter: FilterQuery<any>
  ): Promise<Query<any, any>> {
    return this.Author.deleteOne(filter);
  }
}
