import { Schema, model } from "mongoose";
import Author from "../Author";

const author = new Schema<Author>(
    {
        name: { type: String, required: true },
        userId: { type: Number },
        isDeleted: { type: Number, required: true },
        createdBy: { type: Number, required: true },
        deletedBy: { type: Number, required: true },
    },{ timestamps: true }
);

export default model("authors", author);