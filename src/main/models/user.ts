import IRole from "./role";
import IHistory from "./history";
import { Schema, model, Model } from "mongoose"
import UserSchema from "./schemas/UserSchema";

export interface IUser extends IHistory {
  username: string;
  email: string;
  password: string;
  role: IRole;
  birthDay: string;
  imageUrl: string;
  address: string;
}

export class User {
  getUser(): Model<any, any>{
    return model('users', new Schema<IUser>(UserSchema))
  }
}

export default new User()