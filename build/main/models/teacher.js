"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSchema = void 0;
exports.TeacherSchema = {
    userId: { type: Number },
    fullname: { type: String, required: true },
    courses: { type: Array, required: true },
    isDeleted: { type: String, required: true },
    createdBy: { type: String, required: true },
    deletedBy: { type: Boolean, required: true },
};
