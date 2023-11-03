import Role from './Role'
import History from "../../../../orchestrator/src/main/schemas/History";

export default interface User extends History{
    username: string;
    email: string;
    password: string;
    role: Role;
    birthDay: string;
    imageUrl: string;
    address: string;
}
