import { Router } from "express";
import AuthRouter from "./authRouter";
import AppContext from "../config/appContext";
import Middleware from "../middlewares/middleware";
import AuthorRouter from "./authorRouter";
import TeacherRouter from "./teacherRouter";
import StudentRouter from "./studentRouter";

export default class Routes {
  private router: Router;

  private userRouter: AuthRouter;

  private middleware: Middleware;

  private authorRouter: AuthorRouter;

  private teacherRouter: TeacherRouter;

  private studentRouter: StudentRouter;

  constructor() {
    this.router = Router();

    this.userRouter = AppContext.createUserRouter();

    this.middleware = AppContext.createMiddleware();

    this.authorRouter = AppContext.createAuthorRouter();

    this.teacherRouter = AppContext.createTeacherRouter();

    this.studentRouter = AppContext.createStudentRouter();
  }

  public useRouter(): Router {
    return this.router
      .use("/auths", this.userRouter.useRouter())

      .get("/isMe", this.middleware.useRefreshToken)

      .use(this.middleware.useAuth)

      .use("/students", this.studentRouter.useRouter())

      .use("/teachers", this.teacherRouter.useRouter())

      .use("/authors", this.authorRouter.useRouter())

      .use(this.middleware.useErrorHandler);
  }
}
