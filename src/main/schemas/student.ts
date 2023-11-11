import IHistory from "./history";

export interface IStudent extends IHistory {
  userId: string;
  fullName: string;
  schoolId: string;
  classId: string;
}

export const StudentSchema = {
  userId: { type: String },
  fullName: { type: String, required: true },
  schoolId: { type: String, required: true },
  classId: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdBy: { type: String, required: true },
  deletedBy: { type: String, default: "" },
};
