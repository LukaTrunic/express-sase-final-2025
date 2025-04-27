import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Author } from "./Author";
import { User } from "./User";

@Index("fk_borrow_author_idx", ["authorId"], {})
@Index("fk_borrow_user_idx", ["userId"], {})
@Entity("borrow", { schema: "sde_sase_2025" })
export class Borrow {
  @PrimaryGeneratedColumn({ type: "int", name: "borrow_id", unsigned: true })
  borrowId: number;

  @Column("int", { name: "book_id", unsigned: true })
  bookId: number;

  @Column("int", { name: "author_id", unsigned: true })
  authorId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("tinyint", { name: "returned", unsigned: true })
  returned: number;

  @Column("datetime", { name: "borrow_at" })
  borrowAt: Date;

  @Column("datetime", { name: "due_at" })
  dueAt: Date;

  @Column("datetime", { name: "returned_at" })
  returnedAt: Date;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Author, (author) => author.borrows, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "author_id", referencedColumnName: "authorId" }])
  author: Author;

  @ManyToOne(() => User, (user) => user.borrows, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;
}
