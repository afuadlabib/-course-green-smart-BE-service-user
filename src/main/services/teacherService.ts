import {
  Schema,
  model,
  Model,
  Query,
  FilterQuery,
  UpdateQuery,
} from "mongoose";
import { ITeacher, TeacherSchema } from "../schemas/teacher";
import TeacherRepository from "../repositories/teacherRepository";


export default class TeacherService {
  private static Teacher: TeacherRepository = model(
    "teachers",
    new Schema<ITeacher>(TeacherSchema)
  );

  constructor() {}

  public static async create(doc: any): Promise<any> {
    return this.Teacher.create(doc)
  }

  public static async find(
    filter?: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Teacher.find({ ...filter }, { ...projection });
  }

  public static async findById(
    id: string,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Teacher.findById(id, { ...projection });
  }

  public static async findOne(
    filter: FilterQuery<any>,
    projection?: any
  ): Promise<Query<any, any>> {
    return this.Teacher.findOne(filter, { ...projection });
  }

  public static async updateOne(
    filter: FilterQuery<any>,
    update: UpdateQuery<any>
  ): Promise<Query<any, any>> {
    return this.Teacher.updateOne(filter, update);
  }

  public static async deleteOne(
    filter: FilterQuery<any>
  ): Promise<Query<any, any>> {
    return this.Teacher.deleteOne(filter);
  }
}
