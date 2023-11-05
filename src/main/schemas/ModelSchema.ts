import { Schema, Model } from "mongoose";

export default interface ModelSchema {
    schema: Schema ;
    modelQuery: Model<any, any>;
    getModelQuery(): Model<any,any>;
}