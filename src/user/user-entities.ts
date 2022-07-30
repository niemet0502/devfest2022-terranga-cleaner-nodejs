import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Session from "../authentication/session-entity";
import Task from "../tasks/tasks-entities";

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

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
}
