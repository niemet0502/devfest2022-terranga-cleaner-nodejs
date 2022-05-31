import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
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
}
