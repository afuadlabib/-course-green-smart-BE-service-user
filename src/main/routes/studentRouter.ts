import { Router } from "express"
import AuthorController from "../controllers/authorController";
import AppContext from "../config/appContext";

export default class StudentRouter{
    private router: Router;

    private studentController: AuthorController;

    constructor(){
        this.router = Router();

        this.studentController = AppContext.createStudentController();

    }

    public useRouter(): Router{
        return this.router
                        .get("/", this.studentController.find)

                        .post("/", this.studentController.create)

                        .put("/:id", this.studentController.updateOne)

                        .get("/:id", this.studentController.findById)

                        .delete("/:id", this.studentController.delete)

    }


}