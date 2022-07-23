import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  lastname: string;

  @Column("text")
  firstname: string;

  @Column("text")
  email: string;

  @Column("text")
  password: string;
}
