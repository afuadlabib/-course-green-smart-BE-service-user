import History from "../../../../orchestrator/src/main/schemas/History";

export default interface Author extends History{
    name: string;
    userId: bigint;
}