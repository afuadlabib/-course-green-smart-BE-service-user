import History from "./History";

export default interface Teacher extends History {
  userId: bigint;
  fullname: string;
  courses: bigint[];
}
