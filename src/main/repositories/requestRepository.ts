import { Request } from "express";
import IUser from "../schemas/user";


export default interface RequestRepository extends Request{
    currentUser?: IUser;
}