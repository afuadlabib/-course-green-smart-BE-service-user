import { Schema, model, Model } from "mongoose";
import IHistory from "./history";
import TeacherSchema from "./schemas/TeacherSchema";

export interface ITeacher extends IHistory {
  userId: bigint;
  fullname: string;
  courses: bigint[];
}

export class Teacher{
  getTeacher() : Model<any, any> {
  return model('teachers', new Schema<ITeacher>(TeacherSchema))
  }
}

export default new Teacher();