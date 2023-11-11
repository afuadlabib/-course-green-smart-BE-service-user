import AppServer from "./appServer";
import IUser from "./schemas/user";

declare global {
    namespace Express {
        interface Request {
            currentUser?: IUser
        }
    }
}

AppServer.run();
