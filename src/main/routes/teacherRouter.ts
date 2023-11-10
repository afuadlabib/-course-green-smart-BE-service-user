import { Router } from "express"
import AppContext from "../config/appContext";
import TeacherController from "../controllers/teacherController";

export default class TeacherRouter{
    private router: Router;

    private teacherController: TeacherController;

    constructor(){
        this.router = Router();

        this.teacherController = AppContext.createTeacherController();

    }

    public useRouter(): Router{
        return this.router
                        .get("/", this.teacherController.find)

                        .post("/", this.teacherController.create)

                        .put("/:id", this.teacherController.updateOne)

                        .get("/:id", this.teacherController.findById)

                        .delete("/:id", this.teacherController.delete)

    }


}