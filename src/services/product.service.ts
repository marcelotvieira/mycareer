import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export class ProductService {
    private productModel = prisma.product;

    public async insert(payload: Prisma.ProductCreateInput) {
        return await this.productModel.create({ data: payload })
    }

    public async get() {
        return await this.productModel.findMany();
    }

    public async getOne(id: number) {
        return await this.productModel.findFirst({
            where: { id }
        })
    }

    public async delete(id: number) {
        return await this.productModel.delete({
            where: { id }
        })
    }

    public async update(
        id: number,
        payload: Prisma.ProductUpdateInput,
        ) {
            return await this.productModel.update({
                where: { id },
                data: payload,
            })
    }
}