import IHistory from "./history";

export interface IStudent extends IHistory {
  userId: bigint;
  fullname: string;
  schoolId: bigint;
  classId: bigint;
}

export const StudentSchema = {
  userId: { type: Number },
  fullname: {type: String, required: true},
  schoolId: {type: Number, required: true},
  classId: {type: Number, required: true},
  isDeleted: { type: Boolean, required: true },
  createdBy: { type: String, required: true },
  deletedBy: { type: String, required: true },
}