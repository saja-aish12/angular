import { ITasks } from "../taskService/tasks";

export interface IList {
  id: number;
  name: string;
  creating_date: Date;
  lastupdate: Date;
  tasks:ITasks[];
}
