import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "../user/user-entities";

@Entity()
export default class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  description: string;

  @Column("boolean")
  isDueDate: boolean;

  @Column("text")
  date: boolean;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: "CASCADE" })
  user: User;
}
