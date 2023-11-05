import { Schema, model } from "mongoose";
import Teacher from "../Teachers";

const teacher = new Schema<Teacher>(
    {
        userId: { type: Number },
        fullname: {type: String, required: true},
        courses: {type: Array, required: true},
        isDeleted: { type: Number, required: true },
        createdBy: { type: Number, required: true },
        deletedBy: { type: Number, required: true },
    },{ timestamps: true }
);

export default model("students", teacher);