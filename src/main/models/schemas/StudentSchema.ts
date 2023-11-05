export default {
    userId: { type: Number },
    fullname: {type: String, required: true},
    schoolId: {type: Number, required: true},
    classId: {type: Number, required: true},
    isDeleted: { type: Number, required: true },
    createdBy: { type: Number, required: true },
    deletedBy: { type: Number, required: true },
}