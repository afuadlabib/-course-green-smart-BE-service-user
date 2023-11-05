export default {
    name: { type: String, required: true },
    userId: { type: Number },
    isDeleted: { type: Number, required: true },
    createdBy: { type: Number, required: true },
    deletedBy: { type: Number, required: true },
}