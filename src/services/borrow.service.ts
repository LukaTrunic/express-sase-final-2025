import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Borrow } from "../entities/Borrow";
import { BookService } from "./book.service";

const repo = AppDataSource.getRepository(Borrow)

export class BorrowService {
    static async getBorrowsByUserId(id: number) {
        const data = await repo.find({
            select: {
                borrowId: true,
                bookId: true,
                authorId: true,
                author: {
                    authorId: true,
                    name: true
                },
                borrowAt: true,
                dueAt: true,
                returnedAt: true,
                createdAt: true,
                updatedAt: true
            },
            where: {
                userId: id,
                deletedAt: IsNull()
            },
            relations: {
                author: true
            }
        })

        const ids = data.map(borrow => borrow.bookId); // Collect all IDs
        const books = await BookService.getBooksByIds(ids); // Fetch books at once

        for (let borrow of data) {
            borrow.book = books.data.results.find((b: any) => b.id == borrow.bookId);
        }

        // try {
        //     const books = await Promise.all(
        //       data.map(b => BookService.getBookById(b.bookId))
        //     );
          
        //     data.forEach((borrow, index) => {
        //       borrow.book = books[index].data;
        //     });
        //   } catch (error) {
        //     console.error('Failed fetching books', error);
        //   }
          

        return data
    }
}