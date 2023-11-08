import ConfigAppContext from "../config/configAppContext";
import User from "../models/user";
import { Model, Query, model } from "mongoose";
import { Schema } from "mongoose";
import IUser from "../models/user";
import UserSchema from "../models/schemas/UserSchema";

export default class UserService{

    static User = model('users', new Schema<IUser>(UserSchema))

    static create (doc: any): Promise<any>{
        return this.User.create(doc)
    }
    static find (): Query<any, any>  {
        return this.User.find()
    }
}
