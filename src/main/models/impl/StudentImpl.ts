import { Schema, model, Model } from "mongoose";
import ModelSchema from "../ModelSchema";
import Student from "../Students";
import StudentSchema from "../schemas/StudentSchema";

export default class StudentImpl implements ModelSchema {
    schema: Schema;
    modelQuery: Model<any, any>;

    constructor(){
        this.schema = new Schema<Student>( StudentSchema ,{ timestamps: true });
        this.modelQuery = model("students", this.schema)
    }

    getModelQuery(): Model<any, any>{
        return this.modelQuery
    }
}