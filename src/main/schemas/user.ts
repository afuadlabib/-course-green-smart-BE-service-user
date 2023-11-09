import IRole from "./role";
import IHistory from "./history";

export default interface IUser extends IHistory {
  username: string;
  email: string;
  password: string;
  role: IRole;
  birthDay: string;
  imageUrl: string;
  address: string;
}
  
export const UserSchema = {
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, enum: Object.values(IRole),required: true},
  birthDay: {type: String, required: true},
  imageUrl: {type: String, required: true},
  address: {type: String, required: true},
  isDeleted: { type: Boolean },
  createdBy: { type: String },
  deletedBy: { type: String },
}