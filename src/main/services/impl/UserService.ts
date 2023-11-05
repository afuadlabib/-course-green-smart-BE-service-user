import { Model, Query, FilterQuery, CreateOptions } from "mongoose";
import Services from "../Services";
import AuthorImpl from "../../models/impl/AuthorImpl";

export default class AuthorServiceImpl implements Services{
    entity: AuthorImpl;
    modelQuery: Model<any, any>;
    constructor(){
        this.entity= new AuthorImpl();
        this.modelQuery= this.entity.getModelQuery()
    }

    find(): Query<any, any> {
       return this.modelQuery.find()
    }

    findOne(): Query<any, any> {
        return this.modelQuery.findOne()
    }

    findById(id: any): Query<any, any> {
        return this.modelQuery.findById(id)
    }

    deleteOne(filter: FilterQuery<any>): Query<any, any> {
        return this.modelQuery.deleteOne(filter)
    }
    
    updateOne(filter: FilterQuery<any>): Query<any, any> {
        return this.modelQuery.updateOne(filter)
    }

    createOne(doc: any[], options?: CreateOptions ): Promise<any[]> {
        return this.modelQuery.create(doc, options)
    }
    
}