import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Borrow } from "./Borrow";

@Entity("author", { schema: "sde_sase_2025" })
export class Author {
  @PrimaryGeneratedColumn({ type: "int", name: "author_id", unsigned: true })
  authorId: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "website", length: 255 })
  website: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Borrow, (borrow) => borrow.author)
  borrows: Borrow[];
}
