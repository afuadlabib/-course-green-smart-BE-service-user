import { Query, model } from "mongoose";
import { Schema } from "mongoose";
import IUser, { UserSchema } from "../models/user";

export default class UserService{

    private static User = model('users', new Schema (UserSchema))

    static create (doc: any): Promise<any>{
        return this.User.create(doc)
    }
    static find (): Query<any, any>  {
        return this.User.find()
    }
}
