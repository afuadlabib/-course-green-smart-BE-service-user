import { FilterQuery, Model, Query, UpdateQuery, model } from "mongoose";
import { Schema } from "mongoose";
import IUser, { UserSchema } from "../schemas/user";
import IService from "./Service";

export default class UserService implements IService{
    private static User: Model<any, any> = model('users', new Schema <IUser>(UserSchema));

    constructor(){}

    public static async create (doc: any): Promise<any>{
        return this.User.create(doc);

    }

    public static async find (): Promise<Query<any, any>>  {
        return this.User.find();

    }

    public static async findOne(filter: FilterQuery<any>): Promise<Query<any, any>> {
        return this.User.findOne(filter);

    }

    public static async findById(id: string): Promise<Query<any, any>>{
        return this.User.findById(id);
    }

    public static async updateOne(filter: FilterQuery<any>, update: UpdateQuery<any> ): Promise<Query<any, any>>{
        return this.User.updateOne(filter, update);
    }

    public static async deleteOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.User.deleteOne(filter);
    }
}
