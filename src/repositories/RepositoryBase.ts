import { PrismaClient } from '@prisma/client';

class RepositoryBase<T> {
    private prismaModel: T;

    constructor(prismaModel: T) {
        this.prismaModel = prismaModel;
    }

    async create(entity: any): Promise<any> {
        return this.prismaModel['create']({ data: entity });
    }

    async findById(id: number): Promise<any | null> {
        return this.prismaModel['findUnique']({
            where: { id },
        });
    }

    async update(id: number, data: any): Promise<any> {
        return this.prismaModel['update']({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<any> {
        return this.prismaModel['delete']({
            where: { id },
        });
    }

    async findAll(): Promise<any[]> {
        return this.prismaModel['findMany']();
    }
}

export default RepositoryBase;
