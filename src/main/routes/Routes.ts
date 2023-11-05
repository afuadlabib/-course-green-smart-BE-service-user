import { Router } from "express";

export default interface Routes{
    router: Router;

    useRouter(): Router;
}