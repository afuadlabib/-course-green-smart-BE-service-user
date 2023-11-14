import {
  Schema,
  model,
  Model,
  Query,
  FilterQuery,
  UpdateQuery,
} from "mongoose";
import { IStudent, StudentSchema } from "../schemas/student";
import StudentRepository from "../repositories/studentRepository";

export default class StudentService {
  private static Student: StudentRepository = model(
    "students",
    new Schema<IStudent>(StudentSchema)
  );

  constructor() {}

  public static async create(doc: IStudent): Promise<any> {
    return this.Student.create(doc);
  }

  public static async find(
    filter?: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Student.find({ ...filter }, { ...projection });
  }

  public static async findById(
    id: string,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Student.findById(id, { ...projection });
  }

  public static async findOne(
    filter: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Student.findOne(filter, { ...projection });
  }

  public static async updateOne(
    filter: FilterQuery<any>,
    update: UpdateQuery<any>
  ): Promise<Query<any, any>> {
    return this.Student.updateOne(filter, update);
  }

  public static async deleteOne(
    filter: FilterQuery<any>
  ): Promise<Query<any, any>> {
    return this.Student.deleteOne(filter);
  }
}
