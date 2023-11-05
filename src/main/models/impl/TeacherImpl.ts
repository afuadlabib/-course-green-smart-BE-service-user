import { Schema, model, Model } from "mongoose";
import ModelSchema from "../ModelSchema";
import Teacher from "../Teachers";
import TeacherSchema from "../schemas/TeacherSchema";

export default class TeacherImpl implements ModelSchema {
    schema: Schema;
    modelQuery: Model<any, any>;

    constructor(){
        this.schema = new Schema<Teacher>( TeacherSchema ,{ timestamps: true });
        this.modelQuery = model("teachers", this.schema)
    }

    getModelQuery(): Model<any, any>{
        return this.modelQuery
    }
}