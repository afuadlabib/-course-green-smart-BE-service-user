import History from "./History";

export default interface Author extends History {
  name: string;
  userId: bigint;
}
