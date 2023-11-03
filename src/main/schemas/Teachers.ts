import History from "../../../../orchestrator/src/main/schemas/History";

export default interface Teacher extends History{
    userId: string;
    fullname: string;
    courses: any; 
}