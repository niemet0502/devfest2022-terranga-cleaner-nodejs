import Task from "./tasks-entities";

export const create = (body: Request) => {
  const { name, description, isDueDate, date } = body as any;

  const task = new Task();

  task.name = name;
  task.description = description;
  task.isDueDate = isDueDate;
  task.date = date;

  return task;
};
