import { Types } from "mongoose";
import IHistory from "./history";

export interface ITeacher extends IHistory {
  userId: string;
  fullName: string;
  courses: Types.Array<string>;
}

export const TeacherSchema = {
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  courses: { type: [String], required: true },
  isDeleted: { type: Boolean, default: false },
  createdBy: { type: String, required: true },
  deletedBy: { type: String, default: "" },
};
