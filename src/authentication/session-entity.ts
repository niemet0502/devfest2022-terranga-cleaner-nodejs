import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "../user/user-entities";

@Entity()
export default class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  token: string;

  @Column("date")
  expirationDate: Date;

  @ManyToOne(() => User, (user) => user.sessions, { onDelete: "CASCADE" })
  user: User;
}
