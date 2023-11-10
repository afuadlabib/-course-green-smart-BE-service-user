import { Schema, model, Model, Query, FilterQuery, UpdateQuery } from "mongoose";
import { ITeacher, TeacherSchema } from "../schemas/teacher";

export default class TeacherService {
    private static Teacher: Model<any, any> = model("teachers", new Schema<ITeacher>(TeacherSchema))

    constructor(){}

    public static async create(doc: any): Promise<any>{
        return this.Teacher.create(doc);
    }

    public static async find(): Promise<Query<any, any>>{
        return this.Teacher.find();
    }

    public static async findById(id: string):  Promise<Query<any, any>> {
        return this.Teacher.findById(id);
    }

    public static async findOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.Teacher.findOne(filter);
    }

    public static async updateOne(filter: FilterQuery<any>, update: UpdateQuery<any>): Promise<Query<any, any>>{
        return this.Teacher.updateOne(filter, update)
    }

    public static async deleteOne(filter: FilterQuery<any>): Promise<Query<any, any>>{
        return this.Teacher.deleteOne(filter)
    }


}