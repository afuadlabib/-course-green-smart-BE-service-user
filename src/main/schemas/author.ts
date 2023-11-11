import IHistory from "./history";

export interface IAuthor extends IHistory {
  name: string;
  userId: string;
}

export const AuthorSchema = {
  name: { type: String, required: true },
  userId: { type: String },
  isDeleted: { type: Boolean, default: false},
  createdBy: { type: String, require: true } ,
  deletedBy: { type: String, default: "" },
};
