import { Schema, model, Model } from "mongoose";
import Author from "../Author";
import ModelSchema from "../ModelSchema";
import AuthorSchema from "../schemas/AuthorSchema";

export default class AuthorImpl implements ModelSchema {
    schema: Schema;
    modelQuery: Model<any, any>;

    constructor(){
        this.schema = new Schema<Author>( AuthorSchema ,{ timestamps: true });
        this.modelQuery = model("authors", this.schema)
    }

    getModelQuery(): Model<any, any>{
        return this.modelQuery
    }
}