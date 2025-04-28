import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Borrow } from "../entities/Borrow";
import { BookService } from "./book.service";
import { AuthorService } from "./author.service";

const repo = AppDataSource.getRepository(Borrow);

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export class BorrowService {
  static async getBorrows(id: number) {
    const data = await repo.find({
      select: {
        borrowId: true,
        bookId: true,
        authorId: true,
        author: {
          authorId: true,
          name: true,
        },
        borrowAt: true,
        dueAt: true,
        returnedAt: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        userId: id,
        deletedAt: IsNull(),
      },
      relations: {
        author: true,
      },
      order: {
        returnedAt: "asc",
        dueAt: "asc",
      },
    });

    const ids = data.map((borrow) => borrow.bookId); // Collect all IDs
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

    return data;
  }

  static async getBorrowById(
    user: number,
    id: number,
    includeBookObject = false
  ) {
    const data = await repo.findOne({
      where: {
        borrowId: id,
        userId: id,
        deletedAt: IsNull(),
      },
    });

    if (data == undefined) throw new Error("BORROW_NOT_FOUND");

    if (includeBookObject) {
      const rsp = await BookService.getBookById(data.bookId);
      data.book = rsp.data;
      data.author = await AuthorService.getAuthorById(data.authorId);
    }

    return data;
  }

  static async createBorrow(user: number, model: Borrow) {
    const now = new Date();

    await repo.save({
      userId: user,
      authorId: model.authorId,
      bookId: model.bookId,
      borrowAt: now, // Borrowed now
      dueAt: addDays(now, 14), // Due after 14 days
      returnedAt: null,
      createdAt: now,
    });
  }

  static async updateBorrow(user: number, id: number, model: Borrow) {
    const borrow = await this.getBorrowById(user, id);

    if (borrow.returnedAt != null) throw new Error("BOOK_ALREADY_RETURNED");

    borrow.bookId = model.bookId;
    borrow.authorId = model.authorId;
    borrow.updatedAt = new Date();
    await repo.save(borrow);
  }

  static async makeBorrowReturned(user: number, id: number) {
    const borrow = await this.getBorrowById(user, id);

    if (borrow.returnedAt != null) throw new Error("BOOK_ALREADY_RETURNED");

    borrow.returnedAt = new Date();
    await repo.save(borrow);
  }

  static async deleteBorrow(user: number, id: number) {
    const borrow = await this.getBorrowById(user, id);
    borrow.deletedAt = new Date();
    await repo.save(borrow);
  }
}
