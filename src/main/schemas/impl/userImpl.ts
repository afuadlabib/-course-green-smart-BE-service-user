import { Schema, model } from "mongoose";
import User from "../User";
import Role from "../Role";
const user = new Schema<User>(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String, enum: Object.values(Role),required: true},
        isDeleted: { type: Number, required: true },
        createdBy: { type: Number, required: true },
        deletedBy: { type: Number, required: true },
    },{ timestamps: true }
);

export default model("users", user);