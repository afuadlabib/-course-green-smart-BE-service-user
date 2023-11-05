import { Schema, model } from "mongoose";
import Student from "../Students";

const student = new Schema<Student>(
    {
        userId: { type: Number },
        fullname: {type: String, required: true},
        schoolId: {type: Number, required: true},
        classId: {type: Number, required: true},
        isDeleted: { type: Number, required: true },
        createdBy: { type: Number, required: true },
        deletedBy: { type: Number, required: true },
    },{ timestamps: true }
);

export default model("students", student);