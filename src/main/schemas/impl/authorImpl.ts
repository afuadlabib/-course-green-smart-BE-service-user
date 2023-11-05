import { Schema, model, Model } from "mongoose";
import Author from "../Author";
import ModelSchema from "../ModelSchema";

export default class AuthorImpl implements ModelSchema {
    schema: Schema;
    modelQuery: Model<any, any>;

    constructor(){
        this.schema = new Schema<Author>(
            {
                name: { type: String, required: true },
                userId: { type: Number },
                isDeleted: { type: Number, required: true },
                createdBy: { type: Number, required: true },
                deletedBy: { type: Number, required: true },
            },{ timestamps: true }
        );

        this.modelQuery = model("authors", this.schema)
    }

    getModelQuery(): Model<any, any>{
        return this.modelQuery
    }
}