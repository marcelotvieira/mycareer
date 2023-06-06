import { Request, Response, Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";

const UserRouter = Router();
const userController = new UserController(new UserService());

UserRouter.post(
    '/users/register',
    (req: Request, res: Response) => userController.insert(req, res),
);

UserRouter.get(
    '/users',
    (req: Request, res: Response) => userController.get(req, res),
)

UserRouter.get(
    '/users/:id',
    (req: Request, res: Response) => userController.getOne(req, res),
)

UserRouter.put(
    '/users/:id',
    (req: Request, res: Response) => userController.updateUser(req, res),
)
export default UserRouter;