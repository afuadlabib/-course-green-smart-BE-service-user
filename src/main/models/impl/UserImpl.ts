import { Schema, model, Model } from "mongoose";
import ModelSchema from "../ModelSchema";
import User from "../User";
import UserSchema from "../schemas/UserSchema";

export default class UserImpl implements ModelSchema {
    schema: Schema;
    modelQuery: Model<any, any>;

    constructor(){
        this.schema = new Schema<User>( UserSchema ,{ timestamps: true });
        this.modelQuery = model("users", this.schema)
    }

    getModelQuery(): Model<any, any>{
        return this.modelQuery
    }
}