import History from "../../../../orchestrator/src/main/schemas/History";

export default interface Student extends History{
    userId: bigint;
    fullname: string;
    schoolId: string;
    classId: string;
}