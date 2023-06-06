import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
    private _service;

    constructor(service: ProductService) {
        this._service = service;
    }

    public async insert(req: Request, res: Response) {
        return await this._service.insert(req.body);
    }

    public async get(req: Request, res: Response) {
        return await this._service.get();
    }

    public async getOne(req: Request, res: Response) {
        return await this._service.getOne(Number(req.params.id))
    }

    public async delete(req: Request, res: Response) {
        return await this._service.delete(Number(req.params.id))
    }

    public async update(req: Request, res: Response) {
        return await this._service.update(
            Number(req.params.id),
            req.body
        )
    }
}