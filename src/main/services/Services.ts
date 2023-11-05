import { Query , Model, FilterQuery, CreateOptions} from "mongoose";
export default interface Services{
    entity: object;
    modelQuery: Model<any, any>;
    createOne?(doc: any[], options?: CreateOptions): Promise<any[]>;
    find?(): Query<any, any>;
    findOne?(): Query<any, any>
    findById?(id: any): Query<any, any>;
    updateOne?(filter: FilterQuery<any>): Query<any, any>;
    deleteOne?(filter: FilterQuery<any>): Query<any, any>;

}