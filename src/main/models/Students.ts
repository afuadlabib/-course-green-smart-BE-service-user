import History from "./History";

export default interface Student extends History {
  userId: bigint;
  fullname: string;
  schoolId: bigint;
  classId: bigint;
}
