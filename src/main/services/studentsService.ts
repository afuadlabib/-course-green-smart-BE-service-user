import { Schema, model, Model, Query, FilterQuery, UpdateQuery } from "mongoose";
import { IStudent, StudentSchema } from "../schemas/student";

export default class StudentService {
    private static Student: Model<any, any> = model("students", new Schema<IStudent>(StudentSchema))

    constructor(){}

    public static async create(doc: any): Promise<any>{
        return this.Student.create(doc);
    }

    public static async find(): Promise<Query<any, any>>{
        return this.Student.find();
    }

    public static async findById(id: string):  Promise<Query<any, any>> {
        return this.Student.findById(id);
    }

    public static async findOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.Student.findOne(filter);
    }

    public static async updateOne(filter: FilterQuery<any>, update: UpdateQuery<any>): Promise<Query<any, any>>{
        return this.Student.updateOne(filter, update)
    }

    public static async deleteOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.Student.deleteOne(filter)
    }


}