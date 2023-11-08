import { Model, Schema, model } from "mongoose";
import IHistory from "./history";
import StudentSchema from "./schemas/StudentSchema";

export interface IStudent extends IHistory {
  userId: bigint;
  fullname: string;
  schoolId: bigint;
  classId: bigint;
}

export class Student{
  students = new Schema<IStudent>(StudentSchema)

  getStudent() : Model<any, any>{
    return model('studens', this.students) 
  }
}

export default new Student()