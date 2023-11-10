import { Router } from "express"
import AuthorController from "../controllers/authorController";
import AppContext from "../config/appContext";

export default class AuthorRouter{
    private router: Router;

    private authorController: AuthorController;

    constructor(){
        this.router = Router();

        this.authorController = AppContext.createAuthorController();

    }

    public useRouter(): Router{
        return this.router
                        .get("/", this.authorController.find)

                        .post("/", this.authorController.create)

                        .put("/:id", this.authorController.updateOne)

                        .get("/:id", this.authorController.findById)

                        .delete("/:id", this.authorController.delete)

    }


}