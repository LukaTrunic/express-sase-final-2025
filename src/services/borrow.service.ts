import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Borrow } from "../entities/Borrow";
import { BookService } from "./book.service";

const repo = AppDataSource.getRepository(Borrow)

export class BorrowService {
    static async getBorrow() {
        const data = await repo.find({
            where: {
                userId: 1,
                deletedAt: IsNull()
            }
        })

        for (let borrow of data) {
            const b = await BookService.getBookById(borrow.bookId)
            borrow.book = b.data
        }

        // const ids = data.map(br => br.bookId)
        // const books = await BookService.getBooksByIds(ids)

        // for (let borrow of data) {
        //     borrow.book = books.data.find((bo: any) => bo.id == borrow.bookId)
        // }

        return data
    }
}