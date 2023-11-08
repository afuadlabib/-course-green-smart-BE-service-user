import user from "../models/user"
import { Model } from "mongoose"

interface IUserService{
    user: Model<any, any>;
    create(doc: any): Promise<Model<any, any>>;
    find(): Promise<Model<any, any>>;
}

export class UserService implements IUserService {
    user = user.getUser();

    async create (doc: any) {
        return this.user.create(doc)
    }
    async find () {
        return this.user.find()
    }
}
export default new UserService();