import { Schema, model, Model, Query, FilterQuery, UpdateQuery } from "mongoose";
import { AuthorSchema, IAuthor } from "../schemas/author";

export default class AuthorService {
    private static Author: Model<any, any> = model("authors", new Schema<IAuthor>(AuthorSchema))

    constructor(){}

    public static async create(doc: any): Promise<any>{
        return this.Author.create(doc);
    }

    public static async find(): Promise<Query<any, any>>{
        return this.Author.find();
    }

    public static async findById(id: string):  Promise<Query<any, any>> {
        return this.Author.findById(id);
    }

    public static async findOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.Author.findOne(filter);
    }

    public static async updateOne(filter: FilterQuery<any>, update: UpdateQuery<any>): Promise<Query<any, any>>{
        return this.Author.updateOne(filter, update)
    }

    public static async deleteOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.Author.deleteOne(filter)
    }


}