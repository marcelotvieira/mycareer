import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController{
    private _service: UserService;

    constructor(service: UserService) {
        this._service = service;
    }

    public async insert(req: Request, res: Response) {
        const newUser = await this._service.insert(req.body);
        res.status(200).json({ message:  newUser });
    }

    public async get(req: Request, res: Response) {
        const rows = await this._service.get();
        res.status(200).json(rows);
    }

    public async getOne(req: Request, res: Response) {
        const user = await this._service.getOne(Number(req.params.id));
        res.status(200).json(user);
    }

    public async updateUser(req: Request, res: Response) {
        const updatedUser = await this._service.updateUser(
            Number(req.params.id),
            req.body,
            );
        res.status(200).json(updatedUser);  
    }
}