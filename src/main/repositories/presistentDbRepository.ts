import { Model, Schema, model } from "mongoose"
import { ITeacher, TeacherSchema } from "../schemas/teacher"

export default class PresistentDbRepository extends Model{

    getTeacher(){
        return model("teachers", new Schema<ITeacher>(TeacherSchema))
    }
}