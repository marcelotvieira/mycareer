import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../services/product.service";

const ProductRouter = Router();

const productController = new ProductController(new ProductService());

ProductRouter.post(
    '/products/register',
    (req: Request, res: Response) => productController.insert(req, res)
)

ProductRouter.get(
    '/products',
    (req: Request, res: Response) => productController.get(req, res),
)

ProductRouter.get(
    '/products/:id',
    (req: Request, res: Response) => productController.getOne(req, res)
)

ProductRouter.put(
    '/products/:id',
    (req: Request, res: Response) => productController.update(req, res)
)

ProductRouter.delete(
    '/products/:id',
    (req: Request, res: Response) => productController.delete(req, res)
)