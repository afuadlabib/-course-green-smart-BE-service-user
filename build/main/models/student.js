"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
exports.StudentSchema = {
    userId: { type: Number },
    fullname: { type: String, required: true },
    schoolId: { type: Number, required: true },
    classId: { type: Number, required: true },
    isDeleted: { type: String, required: true },
    createdBy: { type: String, required: true },
    deletedBy: { type: Boolean, required: true },
};
