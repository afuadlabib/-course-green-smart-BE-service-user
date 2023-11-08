"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = void 0;
exports.AuthorSchema = {
    name: { type: String, required: true },
    userId: { type: Number },
    isDeleted: { type: String, required: true },
    createdBy: { type: String, required: true },
    deletedBy: { type: Boolean, required: true },
};
