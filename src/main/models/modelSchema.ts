import { Schema, Model } from "mongoose";

export default interface IModelSchemas {
    schema: Schema ;
    modelQuery: Model<any, any>;
    getModelQuery(): Model<any,any>;
}