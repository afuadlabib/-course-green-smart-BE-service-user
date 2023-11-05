export default {
    userId: { type: Number },
    fullname: {type: String, required: true},
    courses: {type: Array, required: true},
    isDeleted: { type: Number, required: true },
    createdBy: { type: Number, required: true },
    deletedBy: { type: Number, required: true },
}