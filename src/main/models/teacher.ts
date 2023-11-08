import IHistory from "./history";

export interface ITeacher extends IHistory {
  userId: bigint;
  fullname: string;
  courses: bigint[];
}

export const TeacherSchema = {
  userId: { type: Number },
  fullname: {type: String, required: true},
  courses: {type: Array, required: true},
  isDeleted: { type: String, required: true },
  createdBy: { type: String, required: true },
  deletedBy: { type: Boolean, required: true },
}