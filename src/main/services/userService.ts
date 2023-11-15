import { FilterQuery, Model, Query, UpdateQuery, model } from "mongoose";
import { Schema } from "mongoose";
import IUser, { UserSchema } from "../schemas/user";
import IService from "./Service";
import UserRepository from "../repositories/userRepository";

export default class UserService implements IService {
  private static User: UserRepository = model(
    "users",
    new Schema<IUser>(UserSchema)
  );

  constructor() {}

  public static async create(doc: any): Promise<any> {
    return this.User.create(doc);
  }

  public static async find(
    filter?: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.User.find(
      { ...filter },
      {
        password: 0,
        ...projection,
      }
    );
  }

  public static async findOne(
    filter: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.User.findOne(filter, {
      ...projection,
    });
  }

  public static async findById(
    id: string,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.User.findById(id, {
      password: 0,
      ...projection,
    });
  }

  public static async updateOne(
    filter: FilterQuery<any>,
    update: UpdateQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.User.updateOne(filter, update);
  }

  public static async deleteOne(
    filter: FilterQuery<any>
  ): Promise<Query<any, any>> {
    return this.User.deleteOne(filter);
  }
}
