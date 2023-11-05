import { Model, Query, FilterQuery, CreateOptions } from "mongoose";
import Services from "../Services";
import AuthorImpl from "../../schemas/impl/authorImpl";

export default class AuthorServiceImpl implements Services{
    entity: AuthorImpl;
    query: Model<any, any>;
    constructor(){
        this.entity= new AuthorImpl();
        this.query= this.entity.getModelQuery()
    }

    find(): Query<any, any> {
       return this.query.find()
    }

    findOne(): Query<any, any> {
        return this.query.findOne()
    }

    findById(id: any): Query<any, any> {
        return this.query.findById(id)
    }

    deleteOne(filter: FilterQuery<any>): Query<any, any> {
        return this.query.deleteOne(filter)
    }
    
    updateOne(filter: FilterQuery<any>): Query<any, any> {
        return this.query.updateOne(filter)
    }

    createOne(doc: any[], options?: CreateOptions ): Promise<any[]> {
        return this.query.create(doc, options)
    }
    
}