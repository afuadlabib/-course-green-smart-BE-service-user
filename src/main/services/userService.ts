import { FilterQuery, Model, Query, model } from "mongoose";
import { Schema } from "mongoose";
import IUser, { UserSchema } from "../schemas/user";
import IService from "./Service";

export default class UserService implements IService{
    private static User: Model<any, any> = model('users', new Schema <IUser>(UserSchema))

    public static create (doc: any): Promise<any>{
        return this.User.create(doc);

    }

    public static find (): Query<any, any>  {
        return this.User.find();

    }

    public static findOne(filterQuery: FilterQuery<any>): Query<any, any> {
        return this.User.findOne(filterQuery);

    }

    public static findById(id: string){
        return this.User.findById(id);
    }


}
