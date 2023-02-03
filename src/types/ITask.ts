import { Member } from './IMember';

export type ITask = {
  title: string;
  description: string;
  member?: Member[] | [];
  expire_in?: Date;
}

export type ITaskUpdate = {
  title?: string;
  description?: string;
  member?: string;
  task_status?: string;
  expire_in?: Date;
}
