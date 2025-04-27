import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Author } from "../entities/Author";

const repo = AppDataSource.getRepository(Author)

export class AuthorService {
    static async getAuthors() {
        return await repo.find({
            select: {
                authorId: true,
                name: true,
                website: true,
                createdAt: true,
                updatedAt: true
            },
            where: {
                deletedAt: IsNull()
            }
        })
    }

    static async getAuthorById(id: number) {
        const data = await repo.findOne({
            where: {
                authorId: id,
                deletedAt: IsNull()
            }
        })

        if (data == undefined)
            throw new Error('NOT_FOUND')

        return data
    }
}