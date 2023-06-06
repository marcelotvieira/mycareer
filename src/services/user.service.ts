import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

export class UserService {
    private userModel = prisma.user;

    public async insert(payload: Prisma.UserCreateInput) {
        return await this.userModel.create({ data: payload })
    }

    public async get() {
        return await this.userModel.findMany();
    }

    public async getOne(id: number) {
        return await this.userModel.findFirst({
            where: { id }
        })
    }

    public async updateUser(id: number, payload: Prisma.UserUpdateInput) {
        return this.userModel.update({
            where: { id },
            data: payload,
        })
    }
}